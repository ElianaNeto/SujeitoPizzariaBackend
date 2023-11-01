# Sujeito Pizzaria - Node.js Backend with TypeScript

![Node.js](https://img.shields.io/badge/Node.js-v16.17.1-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.1.6-blue)
![Express](https://img.shields.io/badge/Express-v4.18.2-lightgrey)


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
    yarn install
    ```

3. **Run the server:**

    ```bash
    yarn run dev
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

- **GET /list-category**
  - Description: Get all categories.
  - Request 
    ```json
      {
        
      }

      "authentication": {
        "type": "bearer",
        "token": "YOUR_ACCESS_TOKEN",
        "prefix": "Bearer"
      },
    ```

  - Response
    ```json
      [
        {
          "id": "CATEGORY_ID",
          "name": "Category name"
        },
        {
          ...
        }
      ]
    ```


### Products
- **POST /product**
  - Description: Create a product.
  - Request 
    ```json
      {
        "multipart_form_data": {
          "name": "PRODUCT_NAME",
          "price": "PRODUCT_PRICE",
          "description": "PRODUCT_DESCRIPTION",
          "file": "path/to/uploaded/file.jpg",
          "category_id": "CATEGORY_ID"
        }
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
          "id": "PRODUCT_ID",
          "name": "PRODUCT_NAME",
          "price": "PRODUCT_PRICE",
          "description": "PRODUCT_DESCRIPTION",
          "banner": "19043958b156db6249efac836689b75a-681ce4883e44e134adfdaa9762e2ced0_XL.jpg",
          "created_at": "2023-10-26T00:32:21.789Z",
          "updated_at": "2023-10-26T00:32:21.789Z",
          "category_id": "CATEGORY_ID"
        }
    ```
    
- **GET /category/product**
  - Description: List products by category.
  - Request 
    ```bash
    http://localhost:3333/category/product?category_id=CATEGORY_ID
    
    ```
    ```json
      {
        
      }

      "authentication": {
        "type": "bearer",
        "token": "YOUR_ACCESS_TOKEN",
        "prefix": "Bearer"
      },
    ```

  - Response
    ```json
      [
        {
          "id": "PRODUCT_ID",
          "name": "PRODUCT_NAME",
          "price": "PRODUCT_PRICE",
          "description": "PRODUCT_DESCRIPTION",
          "banner": "19043958b156db6249efac836689b75a-681ce4883e44e134adfdaa9762e2ced0_XL.jpg",
          "created_at": "2023-10-26T00:32:21.789Z",
          "updated_at": "2023-10-26T00:32:21.789Z",
          "category_id": "CATEGORY_ID"
        },
        {
          ...
        }
      ]
    ```





### Orders
- **POST /order**
  - Description: Create an order.
  - Request 
    ```json
      {
        "table": TABLE_NUMBER
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
          "id": "ORDER_ID",
          "table": TABLE_NUMBER,
          "status": false,
          "draft": true,
          "name": null,
          "created_at": "2023-10-26T21:10:26.122Z",
          "updated_at": "2023-10-26T21:10:26.122Z"
        }
    ```
  





## Dependencies
- Node.js (v16.17.1)
- TypeScript (v5.1.6)
- Express (v4.18.2)
- Other dependencies as specified in `package.json`

