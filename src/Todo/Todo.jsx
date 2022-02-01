import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import './Todo.css';
import { ReactComponent as TrashSvg } from '../svg/trash.svg';

const Todo = ({ id, removeTodo, children }) => {
  return (
    <div className="d-flex mb-2">
      <ListGroup.Item className="todo-item">{children}</ListGroup.Item>
      <Button onClick={() => removeTodo(id)} variant="danger" type="submit">
        <TrashSvg />
      </Button>
    </div>
  );
};

export default Todo;