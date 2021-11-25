import React from 'react'
import Task from './Task'

const ListTask = ({todos}) => {
    return (
        <div>
            {todos.map(todo=><Task todo={todo}></Task>)}
        </div>
    )
}

export default ListTask; 