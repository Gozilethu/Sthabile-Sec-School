<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['loggedin'])) {
    header('Location: index.html'); // Redirect to login if not logged in
    exit;
}

// Admin Dashboard logic
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to the Admin Dashboard</h1>

    <div class="dashboard-container">
        <!-- Add Staff Section -->
        <section id="add-staff">
            <h2>Add Staff</h2>
            <form id="add-staff-form" method="post" action="add-staff.php">
                <label for="staff-full-name">Full Name:</label>
                <input type="text" id="staff-full-name" name="staff-full-name" required>

                <label for="staff-job-role">Job Role:</label>
                <select id="staff-job-role" name="staff-job-role" required>
                    <option value="Principal">Principal</option>
                    <option value="HOD">Head of Department</option>
                    <option value="Teacher">Teacher</option>
                    <option value="General Worker">General Worker</option>
                    <option value="Cook">Cook</option>
                </select>

                <label for="staff-email">Email:</label>
                <input type="email" id="staff-email" name="staff-email" required>

                <button type="submit">Add Staff</button>
            </form>
        </section>

        <!-- View Staff Section -->
        <section id="view-staff">
            <h2>Staff Directory</h2>
            <div class="staff-cards-container">
                <!-- This section will dynamically load staff cards using PHP -->
                <?php
                require 'db.php'; // Include database connection

                $result = $conn->query("SELECT * FROM staff");
                if ($result->num_rows > 0) {
                    while ($staff = $result->fetch_assoc()) {
                        echo "
                        <div class='staff-card'>
                            <h3>{$staff['position']}</h3>
                            <p>Full Name: {$staff['full_name']}</p>
                            <p>Email: {$staff['email']}</p>
                        </div>";
                    }
                } else {
                    echo "<p>No staff members found.</p>";
                }

                $conn->close();
                ?>
            </div>
        </section>
    </div>

    <a href="logout.php">Logout</a> <!-- Logout link -->

</body>
</html>
