# Backend Project 

## Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed and running locally or access to a MongoDB instance
## Install dependencies:
npm install
## Run this project locally
npm run start:dev

## API Documentation
Access the API documentation for product-related endpoints at ```http://localhost:3000/api/products```
Access the API documentation for order-related endpoints at ```http://localhost:3000/api/orders```

## Endpoints Overview
# Product Endpoints
POST /api/products: Create a new product
GET /api/products: Get all products
GET /api/products/:productId: Get a product by ID
DELETE /api/products/:productId: Delete a product by ID
PUT /api/products/:productId: Update a product by ID

# Order Endpoints
POST /api/orders: Create a new order
GET /api/orders: Get all orders
GET /api/orders/:email: Get all orders by email

