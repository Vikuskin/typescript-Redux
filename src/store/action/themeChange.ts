import { Dispatch } from 'redux';
import { ThemeChangeAction, ThemeChangeActionTypes } from '../../types/theme';

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