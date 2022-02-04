import { Dispatch } from 'redux';
import { CounterActionTypes, CounterAction } from '../../types/counter'

export const increment = () => {
    return (dispatch: Dispatch<CounterAction>) => {
        dispatch({type: CounterActionTypes.INCREMENT})
    }
}

export const decrement = () => {
    return (dispatch: Dispatch<CounterAction>) => {
        dispatch({type: CounterActionTypes.DECREMENT})
    }
}

