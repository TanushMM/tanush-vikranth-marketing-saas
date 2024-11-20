# Tanush-Vikranth Marketing SaaS

## Overview

Tanush-Vikranth Marketing SaaS is a backend application designed for a marketing service that specializes in car stickering. The system manages user authentication using Firebase and MongoDB, ensuring robust security and scalability.

This project implements user registration and login using Firebase authentication as the primary system and MongoDB as a secondary database for user data storage. JWT tokens are issued for session management.

---

## Features

- **User Registration:**

  - Register users with Firebase authentication.
  - Store user details in MongoDB after Firebase validation.

- **User Login:**

  - Authenticate users with Firebase using email and password.
  - Generate a custom JWT token containing Firebase and MongoDB data.

- **MongoDB Integration:**

  - Store and manage secondary user data in a robust and flexible NoSQL database.

- **Secure Authentication:**
  - Firebase for password management and primary user verification.
  - JWT for session and token-based authentication.

---

## Technologies Used

- **Backend Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** Firebase Authentication (REST API)
- **Token Management:** JSON Web Token (JWT)
- **HTTP Client:** Axios
- **Environment Management:** Dotenv

---

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Firebase Project with API Key

---

## API Endpoints

### **Authentication Routes**

#### **POST** `/api/v1/auth/register`

- Register a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phoneNumber": "1234567890",
    "dob": "1990-01-01"
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "message": "User registered successfully"
  }
  ```

#### **POST** `/api/v1/auth/login`

- Login an existing user.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "jwtToken": "your_jwt_token",
    "message": "Login successful"
  }
  ```

---

## Future Improvements

- Add user roles and permissions for better control.
- Implement advanced analytics for car sticker campaigns.
- Introduce payment gateway integration for subscription plans.

---

## License

This project is licensed under the MIT License.
