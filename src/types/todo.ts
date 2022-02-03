export interface TodoState {
    tasks: any[]
}

export enum TodoActionTypes {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
}

export interface TodoAddTaskAction {
    type: TodoActionTypes.ADD_TASK;
    payload: string
}

export interface TodoRemoveTaskAction {
    type: TodoActionTypes.REMOVE_TASK;
    payload: string
}

export type TodoAction = TodoAddTaskAction | TodoRemoveTaskAction
