async function sendMessageToOpenAI(message) {
    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        });

        const data = await response.json();
        const botMessage = data.botMessage;
        displayBotMessage(botMessage);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.querySelector('.send-btn').addEventListener('click', function() {
    const userMessage = document.querySelector('.chat-input').value;

    if (userMessage.trim() !== "") {
        displayUserMessage(userMessage);
        sendMessageToOpenAI(userMessage);  // Send the message to the backend server
    }
});

function displayUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', 'user');
    messageDiv.textContent = message;
    document.querySelector('.chat-messages').appendChild(messageDiv);
}

function displayBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('chat-message', 'bot');
    botMessageDiv.textContent = message;
    document.querySelector('.chat-messages').appendChild(botMessageDiv);
}
