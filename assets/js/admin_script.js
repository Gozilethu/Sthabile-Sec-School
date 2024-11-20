document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Handle Metric Results Submission
function handleMetricResults(event) {
    event.preventDefault();

    // Simulate success or error
    const messageDiv = document.getElementById('metric-result-message');
    messageDiv.textContent = "Metric Results added successfully!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}

// Handle Staff Addition
function handleAddStaff(event) {
    event.preventDefault();

    // Simulate success or error
    const messageDiv = document.getElementById('staff-message');
    messageDiv.textContent = "Staff added successfully!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}


// Handle Metric Results Submission
function handleMetricResults(event) {
    event.preventDefault();

    // Simulate success or error
    const messageDiv = document.getElementById('metric-result-message');
    messageDiv.textContent = "Metric Results added successfully!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}

// Handle Staff Addition
function handleAddStaff(event) {
    event.preventDefault();

    // Simulate success or error
    const messageDiv = document.getElementById('staff-message');
    messageDiv.textContent = "Staff added successfully!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Handle adding staff dynamically
document.getElementById('add-staff-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById('staff-full-name').value;
    const jobRole = document.getElementById('staff-job-role').value;
    const email = document.getElementById('staff-email').value;

    // Create a new staff card
    const staffCard = document.createElement('div');
    staffCard.className = 'staff-card';
    staffCard.innerHTML = `
        <h4>${jobRole}</h4>
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
    `;

    // Append the new staff card to the staff cards container
    document.querySelector('.staff-cards-container').appendChild(staffCard);

    // Clear the form inputs
    this.reset();
});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

function toggleAdminLogin() {
    var adminLogin = document.getElementById("admin-login");
    adminLogin.classList.toggle("hidden");
}

// Handle adding staff dynamically
document.getElementById('add-staff-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById('staff-full-name').value;
    const jobRole = document.getElementById('staff-job-role').value;
    const email = document.getElementById('staff-email').value;

    // Create a new staff card
    const staffCard = document.createElement('div');
    staffCard.className = 'staff-card';
    staffCard.innerHTML = `
        <h4>${jobRole}</h4>
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
    `;

    // Append the new staff card to the staff cards container
    document.querySelector('.staff-cards-container').appendChild(staffCard);

    // Clear the form inputs
    this.reset();
});

// Filter Alumni Cards
function filterAlumniCards() {
    const searchInput = document.getElementById('search-alumni').value.toLowerCase();
    const alumniCards = document.querySelectorAll('.alumni-card');

    alumniCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if (name.includes(searchInput)) {
            card.style.display = ""; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}

// Hide Alumni Card Functionality
function hideAlumniCard(button) {
    const card = button.parentElement; // Get the card element
    card.style.display = "none"; // Hide the card
}


