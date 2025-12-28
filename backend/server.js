const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME;

// Initialize Database
const initDB = async () => {
    try {
        await db.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);

        await db.query(`
            CREATE TABLE IF NOT EXISTS ${DB_NAME}.items (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                category VARCHAR(100),
                status VARCHAR(50) DEFAULT 'Active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Check if data exists, if not seed some
        const [rows] = await db.query(`SELECT COUNT(*) as count FROM ${DB_NAME}.items`);
        if (rows[0].count === 0) {
            const seedQuery = `INSERT INTO ${DB_NAME}.items (name, category, status) VALUES ?`;
            const values = [
                ['React Hooks Demo', 'Frontend', 'Active'],
                ['Redux Toolkit Setup', 'Frontend', 'Active'],
                ['Node.js API', 'Backend', 'Pending'],
                ['MySQL Connection', 'Database', 'Completed'],
                ['Lazy Load Test 1', 'Testing', 'Active'],
                ['Lazy Load Test 2', 'Testing', 'Active'],
                ['Lazy Load Test 3', 'Testing', 'Active'],
                ['Lazy Load Test 4', 'Testing', 'Active'],
                ['Lazy Load Test 5', 'Testing', 'Active'],
                ['Lazy Load Test 6', 'Testing', 'Active']
            ];
            await db.query(seedQuery, [values]);
        }
        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Database initialization failed:', err);
    }
};

initDB();

// API Endpoints
app.get('/api/stats', async (req, res) => {
    try {
        const [total] = await db.query(`SELECT COUNT(*) as count FROM ${DB_NAME}.items`);
        const [active] = await db.query(`SELECT COUNT(*) as count FROM ${DB_NAME}.items WHERE status = "Active"`);
        const [completed] = await db.query(`SELECT COUNT(*) as count FROM ${DB_NAME}.items WHERE status = "Completed"`);

        res.json({
            total: total[0].count,
            active: active[0].count,
            completed: completed[0].count
        });
    } catch (err) {
        console.error('Stats Error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/items', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    try {
        // Fix: Ensure limit and offset are numbers for MySQL
        const [items] = await db.query(
            `SELECT * FROM ${DB_NAME}.items ORDER BY created_at DESC LIMIT ? OFFSET ?`,
            [limit, offset]
        );
        const [total] = await db.query(`SELECT COUNT(*) as count FROM ${DB_NAME}.items`);

        res.json({
            data: items,
            pagination: {
                total: total[0].count,
                page,
                limit,
                totalPages: Math.ceil(total[0].count / limit)
            }
        });
    } catch (err) {
        console.error('Items Error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
