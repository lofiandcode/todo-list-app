const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes

//CREATE a to-do
app.post('/todos', async (req, res) => {
    try {
        const { description, isComplete } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, isComplete) VALUES ($1, $2) RETURNING *",
            [description, isComplete]
        );
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

//GET all to-dos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query(
            'SELECT * FROM todo'
        );
        res.json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//GET a to-do
app.get('/todos/:id', async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;
        const todo = await pool.query(
          "SELECT * FROM todo WHERE id = $1",
          [id]  
        );
        res.json(todo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

//UPDATE a to-do

//DELETE a to-do

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`);
});