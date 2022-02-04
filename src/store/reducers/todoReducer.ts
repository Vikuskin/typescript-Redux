import { TodoState, TodoActionTypes, TodoAction } from "../../types/todo"

const initialState: TodoState = {
    tasks: []
}

export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, task: action.task}]
            };
        case TodoActionTypes.REMOVE_TASK:
            const removeElem = state.tasks.find(obj => obj.id === action.id);
            state.tasks.splice(removeElem, 1);
            return {
                ...state, 
                tasks: [...state.tasks]
            }
        default:
            return state
    }
}