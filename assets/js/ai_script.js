openChatButton.addEventListener('click', function() {
    console.log('Open button clicked');
    chatContainer.classList.add('open');
    openChatButton.style.display = 'none';
});

closeChatButton.addEventListener('click', function() {
    console.log('Close button clicked');
    chatContainer.classList.remove('open');
    openChatButton.style.display = 'flex';
});


document.addEventListener('DOMContentLoaded', function() {
    const openChatButton = document.querySelector('.open-chat-btn');
    const chatContainer = document.querySelector('.chat-container');
    const closeChatButton = document.querySelector('.close-chat');

    // Check if elements exist before adding event listeners
    if (openChatButton && chatContainer && closeChatButton) {
        openChatButton.addEventListener('click', function() {
            chatContainer.classList.add('open');
            openChatButton.style.display = 'none';
        });

        closeChatButton.addEventListener('click', function() {
            chatContainer.classList.remove('open');
            openChatButton.style.display = 'flex';
        });
    }
});


const response = await fetch('http://localhost:3000/chatbot-server', {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: message }),
});


// Event listener to send the user's message
document.querySelector('.send-btn').addEventListener('click', function() {
    const userMessage = document.querySelector('.chat-input').value;

    if (userMessage.trim() !== "") {
        displayUserMessage(userMessage);
        sendMessageToOpenAI(userMessage);  // Call the function to get the actual AI response
    }
});


document.querySelector('.send-btn').addEventListener('click', function() {
    const userMessage = document.querySelector('.chat-input').value;

    if (userMessage.trim() !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'user');
        messageDiv.textContent = userMessage;
        document.querySelector('.chat-messages').appendChild(messageDiv);


        document.querySelector('.chat-input').value = '';// Send the message to the backend server

        document.querySelector('.chat-input').value = '';


        // Simulate bot response (replace this with actual AI logic later)
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('chat-message', 'bot');

            botMessageDiv.textContent = "let get that information for you";/////////////////////////////////////////////////////////
            displayBotMessage(message);
            
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

    document.querySelector('.chat-input').value = '';  // Clear input after sending
    
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
