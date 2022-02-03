import { CounterAction, CounterActionTypes, CounterState } from "../../types/counter";

const initialState: CounterState = {
    counter: 0
}
export const counterReducer = (state = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT: 
            return {counter: state.counter + 1};
        case CounterActionTypes.DECREMENT: 
            return {counter: state.counter - 1};
        default: 
            return state
    }
}
