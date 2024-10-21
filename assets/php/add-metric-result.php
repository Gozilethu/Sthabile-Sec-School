<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $class_name = $_POST['class-name'];
    $term1 = $_POST['term1'];
    $term2 = $_POST['term2'];
    $term3 = $_POST['term3'];
    $term4 = $_POST['term4'];

    $stmt = $conn->prepare("INSERT INTO metric_results (class_name, term1, term2, term3, term4) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $class_name, $term1, $term2, $term3, $term4);
    $stmt->execute();
    
    echo "Metric result added successfully!";
}
?>
