export interface ThemeChangeState {
    value: string,
}

export enum ThemeChangeActionTypes {
    THEME_CHANGE_DARK = 'THEME_CHANGE_DARK',
    THEME_CHANGE_LIGHT = 'THEME_CHANGE_LIGHT',
}

export interface ThemeChangeDarkAction {
    type: ThemeChangeActionTypes.THEME_CHANGE_DARK;
}

export interface ThemeChangeLightAction {
    type: ThemeChangeActionTypes.THEME_CHANGE_LIGHT;
}

export type ThemeChangeAction = ThemeChangeDarkAction | ThemeChangeLightAction
