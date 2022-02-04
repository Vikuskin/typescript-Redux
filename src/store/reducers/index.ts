import { combineReducers } from "redux";
import { userReducer } from './userReducer';
import { counterReducer } from './counterReducer';
import { themeReducer } from './themeReducer';
import { todoReducer } from './todoReducer';
import { postReducer } from './postsReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
    theme: themeReducer,
    todo: todoReducer,
    post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>