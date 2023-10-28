# Sujeito Pizzaria - Node.js Backend with TypeScript

![Node.js](https://img.shields.io/badge/Node.js-v14.17.4-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.5.2-blue)
![Express](https://img.shields.io/badge/Express-v4.17.1-lightgrey)

This is the backend component of the "Sujeito Pizzaria" project, developed as part of a course. It provides the server-side logic for managing a pizzeria's operations, including menu items, orders, and customer interactions.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Dependencies](#dependencies)


## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/sujeito-pizzaria-backend.git
   cd sujeito-pizzaria-backend
   ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the server:**

    ```bash
    npm start
    ```
The server should now be running at http://localhost:3000.

## Project Structure
The project structure is organized as follows:
```bash
sujeito-pizzaria-backend/
│
├── src/                  # Source code
│   ├── controllers/      # Request handlers
│   ├── routes/           # API route definitions
│   ├── models/           # Data models
│   ├── services/         # Business logic
│   └── server.ts         # Express application setup
└── └──  ...              # Other project files
│
├── .env.template         # Environment variables template
├── package.json          # Node.js dependencies
├── tsconfig.json         # TypeScript configuration
├── README.md             # Project documentation
└── ...                   # Other project files
```

## Available Routes

### Users

- **POST /users**
  - Description: Create a user account.
  - Request 
    ```json
      {
        "name" : "Your name",
        "email" : "youremail.com",
        "password": "yourpassword"
      } 
    ```
  - Response 
    ```json
        {
          "id": "USER_ID",
          "name": "Your name",
          "email": "Your namen"
        }
    ```

- **POST /session**
  - Description: login to a user account.
  - Request 
    ```json
      {
        "email" : "youremail.com",
        "password": "yourpassword"
      }
    ```

  - Response
    ```json
      {
        "id": "USER_ID",
        "name" : "Your name",
        "email" : "youremail.com",
        "token": "USER_TOKEN"
      }
    ```

- **GET /me**
  - Description: User details.
  - Request 
    ```json
      "authentication": {
        "type": "bearer",
        "token": "YOUR_ACCESS_TOKEN",
        "prefix": "Bearer"
      },
    ```

  - Response
    ```json
      {
        "id": "HIDDEN",
        "name" : "Your name",
        "email" : "youremail.com",
      }
    ```

### Category
- **POST /category**
  - Description: Create a category.
  - Request 
    ```json
      {
        "name" : "category name"
      } 

      // You will need to configurate the bearer 
      "authentication": {
        "type": "bearer",
        "token": "YOUR_ACCESS_TOKEN",
        "prefix": "Bearer"
      },
    ```
  - Response 
    ```json
      {
        "id": "CATEGORY_ID",
        "name": "Category name"
      }
    ```




### Products
### Orders





## Dependencies
- Node.js (v16.17.1)
- TypeScript (v5.1.6)
- Express (v4.18.2)
- Other dependencies as specified in `package.json`

