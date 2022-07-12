const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes

//CREATE a to-do

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

//UPDATE a to-do

//DELETE a to-do

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`);
});