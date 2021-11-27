import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from 'react-redux'
import { addTodo } from '../Actions/todoActions';
import { Button, InputGroup, FormControl, Container } from 'react-bootstrap';

const Addtask = () => {
  const dispatch = useDispatch();

  const [newToDo, setNewToDo] = useState({
    id: uuidv4(),
    name: "",
    isDone: false
  })

  const handleAdd = () => {
    dispatch(addTodo(newToDo));
    setNewToDo({
      id: uuidv4(),
      name: "",
      isDone: false
    });
  }
  return (
    <Container style={{ marginTop: 20}}>
      <InputGroup>
        <FormControl style={{ maxWidth: 595}}
          placeholder="Add new task"
          aria-label="Add new task"
          aria-describedby="basic-addon2"
          value={newToDo.name} onChange={(e) => setNewToDo({ ...newToDo, name: e.target.value })}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleAdd}>
          Add To Do
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Addtask;
