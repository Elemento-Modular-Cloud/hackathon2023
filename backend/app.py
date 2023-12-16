from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

def ottenere_html_da_link(link):
    response = requests.get(link, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        body_content = soup.body.contents
        body_content = str(body_content).replace("\"", "").replace("\'", "").replace("\n", " ").replace("\t", " ").replace("\r", " ").replace("  ", " ")
        return body_content
    else:
        print(f"Errore nella richiesta. Codice di stato: {response.status_code}")
        return None

app = Flask(__name__)
CORS(app, origins='*')  # Enable CORS for all routes

@app.route('/run-script', methods=['POST'])
def run_script():
    try:
        # Retrieve data from the request body as JSON
        data = request.get_json()
        program_name = data.get('program_name')
        print(program_name)

        result = ottenere_html_da_link(program_name)

        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
