import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"

const initialState: TodoState = {
    tasks: []
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TASK:
            return {...state}
        default:
            return state
    }
}