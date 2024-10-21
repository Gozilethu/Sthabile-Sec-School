<?php
session_start();
require 'db.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $staff_id = $_POST['staff_id']; // Assuming the staff ID is passed in the form
    $full_name = $_POST['staff-full-name'];
    $job_role = $_POST['staff-job-role'];
    $email = $_POST['staff-email'];

    // Update staff details
    $stmt = $conn->prepare("UPDATE staff SET full_name = ?, position = ?, email = ? WHERE staff_id = ?");
    $stmt->bind_param("sssi", $full_name, $job_role, $email, $staff_id);

    if ($stmt->execute()) {
        echo "Staff updated successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>
