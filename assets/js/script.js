// script.js
/*
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}*/

function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
}

window.onload = updateYear;

function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    } else {
        openIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
}

// Close the menu automatically after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        var navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active'); // Close the menu
        document.querySelector('.open-icon').style.display = 'inline-block';
        document.querySelector('.close-icon').style.display = 'none';
    });
});

function getDirections() {
    const destination = "-29.682692,30.947748"; 
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
    
    window.open(googleMapsUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(link) {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});

/*Javascript*/
function toggleRegistrationForm() {
    console.log("Close icon clicked!");
    const regSection = document.getElementById('alumni-reg');
    regSection.classList.toggle('hidden');
}

/*function toggleRegistrationForm() {
    var regSection = document.getElementById('alumni-reg');
    regSection.classList.toggle('hidden');
}*/


//alumin card 
document.getElementById("alumni-registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("full-name").value;
    const profession = document.getElementById("profession").value;
    const graduationYear = document.getElementById("graduation-year").value;
    const message = document.getElementById("message").value;
    const photo = document.getElementById("photo").files[0];

    // Create a new FileReader to read the uploaded photo
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const imageSrc = event.target.result;
        createAlumniCard(fullName, profession, graduationYear, message, imageSrc);
    };
    
    if (photo) {
        reader.readAsDataURL(photo);
    }

    // Reset form and hide registration form
    document.getElementById("alumni-registration-form").reset();
    toggleRegistrationForm();
});

function createAlumniCard(fullName, profession, graduationYear, message, imageSrc) {
    const alumniCardsContainer = document.getElementById("alumniCardsContainer");

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("alumni-card-display");

    // Create the image element
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `${fullName}'s Avatar`;

    // Create the name element
    const nameElement = document.createElement("h3");
    nameElement.textContent = fullName;

    const professionElement = document.createElement("p");
    professionElement.textContent = profession;

    // Create the graduation year element
    const yearElement = document.createElement("p");
    yearElement.style.fontWeight = "bold";
    yearElement.textContent = `Class of ${graduationYear}`;

    // Create the message element
    const messageElement = document.createElement("p");
    messageElement.textContent = `"${message}"`;

    // Append all elements to the card
    card.appendChild(img);
    card.appendChild(nameElement);
    card.appendChild(professionElement);
    card.appendChild(yearElement);
    card.appendChild(messageElement);

    // Append the card to the container
    alumniCardsContainer.appendChild(card);
}



window.onload = function() {
    const storedData = localStorage.getItem('alumniData');
    if (storedData) {
        const alumniData = JSON.parse(storedData);
        document.getElementById('user-photo').src = alumniData.photoURL;
        document.getElementById('user-name').textContent = alumniData.fullName;
        document.getElementById('user-year').textContent = `Year of Matriculation: ${alumniData.graduationYear}`;
        document.getElementById('alumni-card').style.display = 'block';
    }
};

/*
// Handle Email Submission 
document.getElementById('send-email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const subject = document.getElementById('email-subject').value;
    const message = document.getElementById('email-message').value;

    const mailtoLink = `mailto:mbuthothandazani@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
});
*/

// Handle Voice My Concerns Submission
document.getElementById('concerns-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const concernsMessage = document.getElementById('concerns-message').value;

    // Option 1: Send Concerns via Email
    const mailtoLink = `mailto:mbuthothandazani@gmail.com?subject=Concerns&body=${encodeURIComponent(concernsMessage)}`;
    window.location.href = mailtoLink;

    // Option 2: Send Concerns via WhatsApp (uncomment if preferred)
    const whatsappLink = `https://wa.me/0790763974?text=${encodeURIComponent(concernsMessage)}`;
    window.open(whatsappLink, '_blank');
});

function applyForAdmission() {
    alert("The Admissions form will be available soon!");
}

function showUpcomingEvents() {
    alert("Upcoming events will be displayed here!");
}

function showMetricResults() {
    document.getElementById('metric-result-modal').classList.remove('hidden');
}

function closeMetricResults() {
    document.getElementById('metric-result-modal').classList.add('hidden');
}


// Show past metric results
function showPastMetricResults() {
    alert("Displaying past metric results...");
    // Open a modal or load content dynamically
}

// Show library info
function showLibraryInfo() {
    alert("Displaying school library information...");
}

// Show study tips
function showStudyTips() {
    alert("Displaying study tips...");
}

// Show teacher contacts
function showTeacherContacts() {
    alert("Displaying teacher contact information...");
}

document.getElementById('add-staff-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

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

document.getElementById('add-staff-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Gather the form data

    // Send the data to the server
    fetch('add-staff.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success or error message
        // Optionally, refresh the staff list or update the UI
    })
    .catch(error => console.error('Error:', error));
});

function viewMore(stream) {
    let title = "";
    let description = "";

    if (stream === 'science') {
        title = "Science Stream";
        description = "The Science stream offers an in-depth focus on Physics, Chemistry, Life Sciences, and Mathematics...";
    } else if (stream === 'general') {
        title = "General Stream";
        description = "The General stream provides a broad range of subjects, focusing on foundational skills in communication...";
    } else if (stream === 'commerce') {
        title = "Commerce Stream";
        description = "The Commerce stream is centered around subjects such as Accounting, Business Studies, Economics...";
    }

    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let scrollPosition = window.scrollY + 100; // Adjust offset to detect the section accurately

    sections.forEach(section => {
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});







