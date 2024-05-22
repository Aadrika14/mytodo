const express = require('express');
const { connection } = require('./db');
const { todosRouter } = require('./routes/todo.routes'); // Import todosRouter
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use("/todos", todosRouter); // Use todosRouter middleware

// Listen for incoming requests
app.listen(port, async () => {
    try {
        await connection;
        console.log('Connected to db');
    } catch (error) {
        console.log(error);
    }
    console.log("Server is started on port", port);
});
