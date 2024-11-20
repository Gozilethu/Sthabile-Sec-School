<?php
// db.php
$servername = "localhost"; // Change if necessary
$username = "admin"; // Your database username
$password = " "; // Your database password
$dbname = "school_management"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
