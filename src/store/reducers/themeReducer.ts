import { ThemeChangeAction, ThemeChangeState, ThemeChangeActionTypes } from "../../types/theme";

const initialState: ThemeChangeState = {
    value: 'light'
}

export const themeReducer = (state = initialState, action: ThemeChangeAction) => {
    switch (action.type) {
        case ThemeChangeActionTypes.THEME_CHANGE_DARK:
            return {...state, value: 'dark'};
        case ThemeChangeActionTypes.THEME_CHANGE_LIGHT:
            return {...state, value: 'light'};
        default:
            return state;
    }
}