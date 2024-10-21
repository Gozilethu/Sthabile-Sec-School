<?php
session_start();
require 'db.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['staff-full-name'];
    $job_role = $_POST['staff-job-role'];
    $email = $_POST['staff-email'];

    // Insert into staff table
    $stmt = $conn->prepare("INSERT INTO staff (full_name, position, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $full_name, $job_role, $email);

    if ($stmt->execute()) {
        echo "Staff added successfully!";
        header('Location: admin-dashboard.php'); // Redirect to the dashboard after adding staff
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>
