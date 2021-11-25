import { Button, Row, Col, Container, InputGroup } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../Actions/todoActions'

const Task = ({ todo }) => {
const dispatch=useDispatch();

    return (
        <Container>
            <Row xs="auto">
                <Col>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input"
                     checked={todo.isDone}
                    />
                </Col>
                <Col xs={6}>{todo.name}</Col>
                <Col>
                    <Button className='btn btn-danger' size="sm" onClick={()=>dispatch(deleteTodo(todo.id))}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>

    );
}
export default Task;