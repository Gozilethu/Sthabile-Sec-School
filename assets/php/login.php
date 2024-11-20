<?php
session_start();
require 'db.php'; // Include your database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming only password is required
    $password = $_POST['admin-password'];


    // Fetch admin credentials from the database
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = 'admin'");
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verify the entered password
        if (password_verify($password, $user['password'])) {
            $_SESSION['loggedin'] = true;
            header('Location: admin-dashboard.php'); // Redirect to Admin Dashboard
            exit;
        } else {
            echo "Invalid credentials.";
        }
    } else {
        echo "Admin user not found.";
    }
} else {
    echo "Unauthorized access.";
}
?>
