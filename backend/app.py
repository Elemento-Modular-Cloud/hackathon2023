from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run-script', methods=['GET'])
def run_script():
    try:
        program_name = request.args.get('program_name')
        # result = subprocess.run(['sh', 'temp_script.sh'], capture_output=True, text=True)
        return program_name , 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
