-- DROP TABLE RENTAL_REQUESTS;
-- DROP TABLE PRODUCTS;
-- DROP TABLE ADMINS;


-- CREATE TABLE ADMINS(
--     admin_id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(150) NOT NULL UNIQUE,
--     password_hash VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE PRODUCTS (
--     product_id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(150) NOT NULL,
--     description TEXT,
--     quantity INT NOT NULL CHECK (quantity >= 0),
--     rate_per_day DECIMAL(10,2) NOT NULL,
--     is_active BOOLEAN DEFAULT TRUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE RENTAL_REQUESTS (
--     request_id INT AUTO_INCREMENT PRIMARY KEY,

--     product_id INT NOT NULL,
--     customer_email VARCHAR(150) NOT NULL,

--     start_date DATE NOT NULL,
--     end_date DATE NOT NULL,

--     requested_quantity INT NOT NULL CHECK (requested_quantity > 0),

--     status ENUM('PENDING', 'APPROVED', 'REJECTED') DEFAULT 'PENDING',

--     admin_id INT NULL,
--     admin_note TEXT,

--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

--     CONSTRAINT fk_product
--         FOREIGN KEY (product_id) REFERENCES products(product_id),

--     CONSTRAINT fk_admin
--         FOREIGN KEY (admin_id) REFERENCES admins(admin_id),

--     CONSTRAINT chk_date
--         CHECK (end_date >= start_date)
-- );


-- CREATE TABLE payments (
--     payment_id INT AUTO_INCREMENT PRIMARY KEY,

--     request_id INT NOT NULL,

--     amount DECIMAL(10,2) NOT NULL,
--     payment_method ENUM('CASH', 'BANK_TRANSFER', 'CARD', 'E_WALLET') NOT NULL,

--     payment_status ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED') DEFAULT 'PENDING',

--     transaction_reference VARCHAR(100),
--     paid_at TIMESTAMP NULL,

--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

--     CONSTRAINT fk_payment_request
--         FOREIGN KEY (request_id)
--         REFERENCES rental_requests(request_id)
--         ON DELETE CASCADE
-- );
