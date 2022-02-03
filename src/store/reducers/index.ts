import { combineReducers } from "redux";
import { userReducer } from './userReducer';
import { counterReducer } from './counterReducer';
import { themeReducer } from './themeReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
    theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>