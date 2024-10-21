<?php
// db.php
$servername = "localhost"; // Change if necessary
$username = "your_db_username"; // Your database username
$password = "your_db_password"; // Your database password
$dbname = "school_management"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
