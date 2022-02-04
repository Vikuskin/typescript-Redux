import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../../types/todo'

export const addTaskTodo = (id: number, task: string) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActionTypes.ADD_TASK, id: id, task: task})
    }
}

export const removeTaskTodo = (id: number) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActionTypes.REMOVE_TASK, id: id})
    }
}
