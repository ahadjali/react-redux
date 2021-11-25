import { DELETE_TASK, ADD_TASK } from './Type'

export const deleteTodo = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const addTodo = (newTodo) => {
    return {
        type: ADD_TASK,
        payload: newTodo
    }
}