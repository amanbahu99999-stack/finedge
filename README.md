# FinEdge – Personal Finance & Expense Tracker API

## Features Implemented
- MVC Architecture
- REST API for Transactions (CRUD)
- Summary endpoint (income, expense, balance)
- Async/await with fs/promises
- File-based data persistence (db.json)
- Environment variable configuration

## API Endpoints

GET /health  
POST /transactions  
GET /transactions  
GET /transactions/:id  
PATCH /transactions/:id  
DELETE /transactions/:id  
GET /summary  

## How to Run

npm install  
node server.js  

Server runs on http://localhost:8000

Submission branch PR