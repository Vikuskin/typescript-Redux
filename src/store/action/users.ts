import axios from 'axios';
import { Dispatch } from 'redux';
import { PostActionTypes } from '../../types/post';
import { UserAction, UserActionTypes } from '../../types/user';

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

export const fetchPosts = () => {
    return {
        type: PostActionTypes.FETCH_POSTS
    }
}

