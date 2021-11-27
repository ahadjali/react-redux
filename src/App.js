import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import ListTask from './Components/ListTask'
import Addtask from './Components/Addtask'
import { toogleFilter } from './Actions/filterAction'
import { Button, Container, Card } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(State => State.todosReducer);
  const filter = useSelector(State => State.filterReducer)
  //console.log(filter);

  return (
    <>
      <div>
        <Container style={{ marginTop: 20, marginBottom: 20 }}>


          <Card.Header style={{ marginBottom: 20, textAlign: 'center', maxWidth: 700 }}>TASK TO DO</Card.Header>
          <Button variant="outline-info" size="sm" onClick={() => dispatch(toogleFilter(null))}>ALL</Button>
          <Button variant="outline-info" size="sm" onClick={() => dispatch(toogleFilter(true))}>DONE</Button>
          <Button variant="outline-info" size="sm" onClick={() => dispatch(toogleFilter(false))}>UNDONE</Button>
        </Container>
      </div>
      <div >
        <ListTask todos={filter === null ? todos : todos.filter(el => el.isDone === filter)} />
      </div>
      <div>
        <Addtask />
      </div>


    </>
  );
}

export default App;
