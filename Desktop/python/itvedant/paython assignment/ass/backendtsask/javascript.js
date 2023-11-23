const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];


// Middleware
app.use(bodyParser.json());

// Secret key for JWT (should be kept secret in production)
const secretKey = 'yourSecretKey';

// Helper function to find a task by ID
function findTaskById(id) {
    return tasks.find(task => task.id === parseInt(id));
}

// Authentication middleware using JWT
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Forbidden' });
        req.user = user;
        next();
    });
}








// Authentication endpoint to get JWT token
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Verify user credentials (this is a basic example, use a proper authentication mechanism)
    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});
// API endpoints

// Get all tasks
// app.get('/tasks', (req, res) => {
//     res.json(tasks);
// });



// 1. GET /tasks: Retrieve a list of all tasks with sorting and filtering options.
app.get('/tasks', (req, res) => {
    // Copy the tasks array to avoid modifying the original array
    let filteredTasks = [...tasks];

    // Filtering based on priority
    const priorityFilter = req.query.priority;
    if (priorityFilter) {
        filteredTasks = filteredTasks.filter(task => task.priority === priorityFilter);
    }

    // Sorting based on title (ascending by default)
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
    filteredTasks.sort((a, b) => sortOrder * a.title.localeCompare(b.title));

    res.json(filteredTasks);
});
// Get a specific task by ID
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex] = {...tasks[taskIndex], ...req.body };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((t) => t.id !== taskId);
    res.json({ message: 'Task deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});