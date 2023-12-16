from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import googlesearch
import subprocess

output_file_path = 'extracted_text.txt'
target_words = ['GPU', 'CPU', 'System', 'requirement', 'OS']

def extract_and_save_filtered_text(file_path, output_file_path, target_words):
    # Read the HTML content from the file
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    # Specify the list of tags to include
    selected_tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'a', 'strong', 'em', 'ul', 'ol', 'li']

    # Find specified tags and extract the text
    selected_tags_content = soup.find_all(selected_tags)

    # Extract text inside specified tags
    extracted_text = [tag.get_text(strip=True) for tag in selected_tags_content]

    # Remove duplicates
    unique_text = list(set(extracted_text))

    # Filter paragraphs that do not contain target words
    filtered_text = [text for text in unique_text if any(word in text for word in target_words)]

    # Save the filtered text to a new file
    with open(output_file_path, 'w', encoding='utf-8') as output_file:
        for text in filtered_text:
            output_file.write(text + '\n')


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}
def brand_search(search_input):
        search_url = 'software requirements ' + search_input #+ ' site:' + self.search_input
        result_list = []
        result = googlesearch.search(search_url,num_results=100)
        for a in result:
            result_list.append(a)
        return result_list[0]

def ottenere_html_da_link(link):
    response = requests.get(link, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        body_content = soup.body.contents
        body_content = str(body_content).replace("\"", "").replace("\'", "").replace("\n", " ").replace("\t", " ").replace("\r", " ").replace("  ", " ")
    else:
        print(f"Errore nella richiesta. Codice di stato: {response.status_code}")
        return None
    
    with open("html.txt", 'w', encoding='utf-8') as output_file:
            output_file.write(body_content + '\n')
    
    extract_and_save_filtered_text("html.txt", output_file_path, target_words)

    result = subprocess.run(['sh', 'prompt.sh'], capture_output=True, text=True)
    return body_content

app = Flask(__name__)
CORS(app, origins='*')  # Enable CORS for all routes

@app.route('/run-script', methods=['POST'])
def run_script():
    try:
        # Retrieve data from the request body as JSON
        data = request.get_json()
        program_name = data.get('program_name')
        print(program_name)
        program_name = brand_search(program_name)
        print(program_name)
        result = ottenere_html_da_link(program_name)


        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
