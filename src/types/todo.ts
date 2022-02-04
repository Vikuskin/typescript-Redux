export type TodoState = {
    tasks: any[]
}

export enum TodoActionTypes {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
}

export interface TodoAddTaskAction {
    type: TodoActionTypes.ADD_TASK;
    id: number,
    task: string
}

export interface TodoRemoveTaskAction {
    type: TodoActionTypes.REMOVE_TASK;
    id: number
}

export type TodoAction = TodoAddTaskAction | TodoRemoveTaskAction
