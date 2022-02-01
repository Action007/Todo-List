import { useState } from 'react';
import { Alert, Button, Container, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState('');

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!state.length) return;
    if (todos.length === 10) return alert("Todo list cannot be more than 10!");

    setTodos((prevState) => [...prevState, { id: uuidv4(), text: state }]);
    setState('')
  };

  const removeTodoHandler = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <Container className="pt-4 pb-4">
      <h1>Todo List: {todos.length}</h1>
      <Form className="mb-4" onSubmit={(e) => addTodoHandler(e)}>
        <Form.Group className="d-flex" controlId="formBasicEmail">
          <Form.Control
            className="todo-input"
            type="text"
            placeholder="Enter Todo"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
      <ListGroup>
        {todos.length
          ?
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              removeTodo={removeTodoHandler}
            >
              {todo.text}
            </Todo>
          ))
          :
          <Alert variant="info">
            Your to-do list is empty!
          </Alert>}
      </ListGroup>
    </Container>
  );
}

export default App;
