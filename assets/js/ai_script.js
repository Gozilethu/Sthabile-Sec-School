document.querySelector('.open-chat-btn').addEventListener('click', function() {
    document.querySelector('.chat-container').classList.add('open');
    document.querySelector('.open-chat-btn').style.display = 'none';
});

document.querySelector('.close-chat').addEventListener('click', function() {
    document.querySelector('.chat-container').classList.remove('open');
    document.querySelector('.open-chat-btn').style.display = 'block';
});

document.querySelector('.send-btn').addEventListener('click', function() {
    const userMessage = document.querySelector('.chat-input').value;

    if (userMessage.trim() !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'user');
        messageDiv.textContent = userMessage;
        document.querySelector('.chat-messages').appendChild(messageDiv);

        document.querySelector('.chat-input').value = '';

        // Simulate bot response (replace this with actual AI logic later)
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('chat-message', 'bot');
            botMessageDiv.textContent = "Let me get that information for you!";
            document.querySelector('.chat-messages').appendChild(botMessageDiv);
        }, 1000);
    }
});


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
        displayBotMessage("Oops! Something went wrong. Please try again.");
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
    
    // Auto scroll to the bottom
    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
}
function displayBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('chat-message', 'bot');
    botMessageDiv.textContent = message;
    document.querySelector('.chat-messages').appendChild(botMessageDiv);
    
    // Auto scroll to the bottom
    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
}

