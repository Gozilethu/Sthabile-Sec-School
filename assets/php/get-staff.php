// get-staff.php
<?php
session_start();
require 'db.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $stmt = $conn->prepare("SELECT * FROM staff");
    $stmt->execute();
    $result = $stmt->get_result();

    $staff_members = array();
    while ($row = $result->fetch_assoc()) {
        $staff_members[] = $row; // Store each row in an array
    }

    echo json_encode($staff_members); // Return data as JSON
}

$conn->close();
?>
