-- Create Database
CREATE DATABASE school_management;
USE school_management;

-- Table 1: users (for admin credentials)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL -- Password will be stored as a hash
);

-- Table 2: metric_results (for storing metric results)
CREATE TABLE metric_results (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(20) NOT NULL,
    term1 DECIMAL(5, 2) NOT NULL, -- Storing percentage with 2 decimal precision
    term2 DECIMAL(5, 2) NOT NULL,
    term3 DECIMAL(5, 2) NOT NULL,
    term4 DECIMAL(5, 2) NOT NULL
);

-- Table 3: alumni (for alumni information)
CREATE TABLE alumni (
    alumni_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    year_of_graduation INT NOT NULL,
    message TEXT,
    photo_url VARCHAR(255) -- URL to the alumni's photo
);

-- Table 4: staff (for staff directory)
CREATE TABLE staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE, -- Email should be unique
    photo_url VARCHAR(255) -- URL to the staff member's photo
);

-- Insert sample data for users (admin credentials)
INSERT INTO users (username, password) VALUES
('admin', '$2y$10$EIXgghvF3RLh4h14Oie7e.nSe4WFeU.QIY4e6ZPMuSwpEeh6w.zzu'); -- This is a bcrypt-hashed password (for example, 'password123')

-- Insert sample data for metric results
INSERT INTO metric_results (class_name, term1, term2, term3, term4) VALUES
('G 12 A', 78.00, 82.00, 76.00, 80.00),
('G 12 B', 75.00, 79.00, 74.00, 77.00),
('G 12 C', 72.00, 78.00, 75.00, 79.00),
('G 12 D', 70.00, 73.00, 71.00, 75.00),
('G 12 E', 80.00, 83.00, 79.00, 82.00);

-- Insert sample data for alumni
INSERT INTO alumni (full_name, year_of_graduation, message, photo_url) VALUES
('John Doe', 2020, 'Proud to be an alumni of this wonderful school.', 'https://example.com/photos/johndoe.jpg'),
('Jane Smith', 2019, 'This school gave me a strong foundation.', 'https://example.com/photos/janesmith.jpg');

-- Insert sample data for staff
INSERT INTO staff (full_name, position, email, photo_url) VALUES
('Alice Brown', 'Math Teacher', 'alice.brown@example.com', 'https://example.com/photos/alicebrown.jpg'),
('Bob Johnson', 'Science Teacher', 'bob.johnson@example.com', 'https://example.com/photos/bobjohnson.jpg');
