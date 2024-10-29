document.querySelector('.open-chat-btn').addEventListener('click', function() {
    document.querySelector('.chat-container').classList.add('open');
    document.querySelector('.open-chat-btn').style.display = 'none';
});

document.querySelector('.close-chat').addEventListener('click', function() {
    document.querySelector('.chat-container').classList.remove('open');
    document.querySelector('.open-chat-btn').style.display = 'block';
});

<<<<<<< HEAD
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

=======
>>>>>>> d3f237f (chat bot)
document.querySelector('.send-btn').addEventListener('click', function() {
    const userMessage = document.querySelector('.chat-input').value;

    if (userMessage.trim() !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'user');
        messageDiv.textContent = userMessage;
        document.querySelector('.chat-messages').appendChild(messageDiv);

<<<<<<< HEAD
        document.querySelector('.chat-input').value = '';// Send the message to the backend server
=======
        document.querySelector('.chat-input').value = '';
>>>>>>> d3f237f (chat bot)

        // Simulate bot response (replace this with actual AI logic later)
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('chat-message', 'bot');
<<<<<<< HEAD
            botMessageDiv.textContent = "let get that information for you";/////////////////////////////////////////////////////////
=======
            botMessageDiv.textContent = "Let me get that information for you!";
>>>>>>> d3f237f (chat bot)
            document.querySelector('.chat-messages').appendChild(botMessageDiv);
        }, 1000);
    }
});

<<<<<<< HEAD
async function sendMessageToOpenAI(message) {
    try {
        const response = await fetch('assets/chatbot-server/app.py', {
=======

async function sendMessageToOpenAI(message) {
    try {
        const response = await fetch('http://localhost:3000/api/chat', {
>>>>>>> d3f237f (chat bot)
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

<<<<<<< HEAD
=======
document.querySelector('.send-btn').addEventListener('click', function() {
    const userMessage = document.querySelector('.chat-input').value;

    if (userMessage.trim() !== "") {
        displayUserMessage(userMessage);
        sendMessageToOpenAI(userMessage);  // Send the message to the backend server
    }
});
>>>>>>> d3f237f (chat bot)

function displayUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', 'user');
    messageDiv.textContent = message;
    document.querySelector('.chat-messages').appendChild(messageDiv);
<<<<<<< HEAD
    document.querySelector('.chat-input').value = '';  // Clear input after sending
=======
>>>>>>> d3f237f (chat bot)
    
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

<<<<<<< HEAD


=======
>>>>>>> d3f237f (chat bot)
