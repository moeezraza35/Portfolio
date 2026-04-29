<?php
// Load database configuration
include("./config.php");

// Enable error reporting for installation only (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connect to MySQL
$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 1: Create tables
$sql = "
-- Users table
CREATE TABLE IF NOT EXISTS `user` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL UNIQUE,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Messages table
CREATE TABLE IF NOT EXISTS `message` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `body` TEXT NOT NULL,
    `date` DATE NOT NULL,
    `time` TIME NOT NULL,
    `read` TINYINT(1) DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
";

if ($conn->multi_query($sql)) {
    do {
        // Clear results to allow next query
        if ($result = $conn->store_result()) {
            $result->free();
        }
    } while ($conn->more_results() && $conn->next_result());
    echo "Tables created successfully.<br>";
} else {
    die("Error creating tables: " . $conn->error);
}

// Step 2: Insert user 'moeez.raza' with password '123' (hashed)
$username = "moeez.raza";
$email = 'moeezrazaseven@gmail.com';
$plainPassword = '123';
$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

// Check if user already exists (by email or username)
$checkStmt = $conn->prepare("SELECT id FROM `user` WHERE email = ? OR username = ?");
$checkStmt->bind_param("ss", $email, $username);
$checkStmt->execute();
$checkStmt->store_result();

if ($checkStmt->num_rows > 0) {
    echo "User '{$email}' or '{$username}' already exists. Skipping insertion.<br>";
} else {
    // Insert into `user` table with username, email, password
    $insertStmt = $conn->prepare("INSERT INTO `user` (username, email, password) VALUES (?, ?, ?)");
    $insertStmt->bind_param("sss", $username, $email, $hashedPassword);
    if ($insertStmt->execute()) {
        echo "User '{$username}' created successfully with hashed password.<br>";
    } else {
        echo "Failed to create user: " . $insertStmt->error . "<br>";
    }
    $insertStmt->close();
}
$checkStmt->close();

$conn->close();

echo "Installation completed.";
?>