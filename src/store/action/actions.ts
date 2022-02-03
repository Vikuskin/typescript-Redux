import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';
import { CounterActionTypes, CounterAction } from '../../types/counter'
import { ThemeChangeAction, ThemeChangeActionTypes } from '../../types/theme';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            window.setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 2000)
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке'})
        }
    }
}

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

export const themeChangeDark = () => {
    return (dispatch: Dispatch<ThemeChangeAction>) => {
        dispatch({type: ThemeChangeActionTypes.THEME_CHANGE_DARK})
        const body: HTMLBodyElement = document.querySelector('body')!;
        body.style.backgroundColor = '#ccc';
    }
}

export const themeChangeLight = () => {
    return (dispatch: Dispatch<ThemeChangeAction>) => {
        dispatch({type: ThemeChangeActionTypes.THEME_CHANGE_LIGHT})
        const body: HTMLBodyElement = document.querySelector('body')!;
        body.style.backgroundColor = '#fff';
    }
}
