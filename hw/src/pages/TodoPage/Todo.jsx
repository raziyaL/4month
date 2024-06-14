import React from 'react';
import Description from "../../component/Description";
import TodoCom from "../../component/TodoCom";
import style from './Todo.module.css'

const TodoArrays = ['todo1', 'todo2', 'todo3']
function Todo() {
    return (
        <div className={style.container}>
            {
                TodoArrays.map((todosArr, index) => (
                    <TodoCom key={index} todo={todosArr}/>
                ))
            }
        </div>
    );
}

export default Todo;