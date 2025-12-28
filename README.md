# React All-In-One Dashboard

A comprehensive full-stack dashboard built to demonstrate advanced React concepts, including Redux Toolkit, Context API, Hooks, Class Lifecycle methods, and Lazy Loading, integrated with a Node.js/MySQL backend.

## 🚀 Key Features & Concepts

### Frontend (React + Vite)
- **Redux Toolkit (RTK)**: Global state management for dashboard statistics and paginated data fetching with asynchronous thunks.
- **Context API**: Global theme management (Light/Dark mode) and user state.
- **React Hooks**: Implementation of `useState`, `useEffect`, `useMemo`, and `useCallback` for optimized performance.
- **Class Components**: Demonstration of legacy lifecycle methods (`componentDidMount`, `componentDidUpdate`, etc.).
- **Lazy Loading**: Code-splitting using `React.lazy` and `Suspense` for efficient resource loading.
- **Modern UI**: Clean, responsive layout with CSS variables and glassmorphism.

### Backend (Node.js + Express)
- **RESTful API**: Endpoints for stats and paginated lists.
- **MySQL Integration**: Persistent storage using local XAMPP MySQL.
- **Automated Seeding**: Database and table initialization with sample data on startup.

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js installed.
- XAMPP/WAMP (MySQL) running.

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure `.env`:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=react_dashboard
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure
```text
/backend
  ├── server.js      # Express server & API routes
  ├── db.js          # MySQL connection pool
  └── .env           # Configuration (port, db credentials)
/frontend
  ├── src/
  │   ├── features/  # Redux slices (dashboard, items)
  │   ├── context/   # AppContext for theme/user
  │   ├── pages/     # Feature-specific pages
  │   ├── components/# Reusable UI components
  │   └── App.jsx    # Routing and state providers
  └── index.html     # Entry point
```

## 📚 Preparation value
This project serves as a perfect reference for:
- Explaining the difference between **Context API** and **Redux**.
- Demonstrating **Optimization** via `useMemo` and `useCallback`.
- Handling **Asynchronous operations** in Redux.
- Managing **Large Datasets** with lazy loading and pagination.
- Connecting **Frontend to a real relational database**.

---
Developed for Reference and Preparation.
