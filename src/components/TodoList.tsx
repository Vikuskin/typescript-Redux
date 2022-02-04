import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector"

export const TodoList: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
    }

    const tasks: number[] | string[] = useTypedSelector(state => state.todo.tasks);
    const {addTaskTodo, removeTaskTodo} = useActions();
    
    return (
        <>
            <h1>TodoList</h1>
            <input
                value={inputValue}
                onChange={changeHandler}    
            >
            </input>
            <button onClick={() => {
                addTaskTodo(Date.now(), inputValue);
                setInputValue('')}}>+</button>
            <div>
                {tasks[0] ? tasks.map((task: any) => 
                <p key={task.id}>{task.task}<button onClick={() => removeTaskTodo(task.id)}>-</button></p>) :
                <p>Нет дел</p>}
            </div>
        </>
    )
}