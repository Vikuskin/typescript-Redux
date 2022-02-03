export interface CounterState {
    counter: number,
}

export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

export interface CounterIncrementAction {
    type: CounterActionTypes.INCREMENT;
}

export interface CounterDecrementAction {
    type: CounterActionTypes.DECREMENT;
}

export type CounterAction = CounterIncrementAction | CounterDecrementAction