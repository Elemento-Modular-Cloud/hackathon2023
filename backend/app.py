from flask import Flask, request, jsonify
import subprocess
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
# Access-Control-Allow-Origin

@app.route('/run-script', methods=['POST'])
def run_script():
    try:
        program_name = request.args.get('program_name')
        # result = subprocess.run(['sh', 'temp_script.sh'], capture_output=True, text=True)
        return "CIAO" , 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
