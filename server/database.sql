CREATE DATABASE todo_list_app;

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(256),
    isComplete BOOLEAN
);