# Lead Management App

A simple **Lead Management Application** built with:  
- **Backend** → Node.js, Express, MongoDB (Mongoose)  
- **Frontend** → Next.js + Tailwind CSS  
- **Database** → MongoDB  

This project was built as part of a take-home assignment to demonstrate working with **Next.js, Node.js, APIs, and databases**.

---

## 🚀 Features
- Add a new lead with name, email, and status  
- View all leads in a styled list  
- Lead schema includes:
  - **name** (string, required)  
  - **email** (string, required, unique)  
  - **status** (one of: `New`, `Engaged`, `Proposal Sent`, `Closed-Won`, `Closed-Lost`)  
  - **createdAt** (timestamp)  

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js, Mongoose  
- **Frontend**: Next.js (React) with Tailwind CSS  
- **Database**: MongoDB (Atlas or local)  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/lead-management-app.git
cd lead-management-app
```
---
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a .env file inside backend/:
```bash
MONGO_URI=mongodb://localhost:27017/leadsdb
PORT=4000
```
Run the backend server:
```bash
npm run dev
```
Server runs at 👉 `http://localhost:4000`
### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```
Run the Next.js frontend:
```bash
npm run dev
```
Frontend runs at 👉 `http://localhost:3000`
### API Endpoints
#### Add Lead
`POST /leads `
`````
{
  "name": "Alice  Five",
  "email": "alice@gmail.com",
  "status": "New"
}
`````
#### Get All Leads
`GET /leads `
`````
[
  {
    "_id": "650fa0d2c1a45f0012b8babc",
    "name": "Alice  Five",
    "email": "alice@gmail.com",
    "status": "New",
    "createdAt": "2025-09-24T10:30:00.000Z"
  }
]
`````
---
## Running Locally

1. Start **MongoDB** locally (or connect to MongoDB Atlas).
2. **Run the backend**: `npm run dev` (port 4000).
3. **Run the frontend**: `npm run dev` (port 3000).
4. **Visit** 👉 `http://localhost:3000` to use the app.

