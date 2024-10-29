import os
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Rate limiter setup
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["100 per 15 minutes"]
)

# Set your OpenAI API key and port from the environment variables
api_key = os.getenv("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")
port = int(os.getenv("PORT", 3000))

# Define the /api/chat endpoint
@app.route('assets/js/ai_script.js', methods=['POST'])
@limiter.limit("100 per 15 minutes")
def chat():
    data = request.get_json()
    message = data.get('message')

    if not message:
        return jsonify({"error": "No message provided"}), 400

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": message}
        ]
    }

    try:
        response = requests.post('https://api.openai.com/v1/chat/completions', json=payload, headers=headers)
        response.raise_for_status()
        bot_message = response.json()["choices"][0]["message"]["content"]
        return jsonify({"botMessage": bot_message})

    except requests.exceptions.RequestException as e:
        if e.response and e.response.status_code == 429:
            return jsonify({"error": "Rate limit exceeded. Please try again later."}), 429
        return jsonify({"error": "Error communicating with OpenAI API"}), 500

# Error handling for 500 errors
@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Something went wrong on the server!"}), 500

if __name__ == '__main__':
    app.run(port=port)
