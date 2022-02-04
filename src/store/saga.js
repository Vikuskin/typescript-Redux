import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import { PostActionTypes } from '../types/post';

export function* sagaWatcher() {
    yield takeEvery(PostActionTypes.FETCH_POSTS, sagaWorker)
}

function* sagaWorker(): any {
    try {
        const data = yield call(fetchPost)
        yield put({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: data })
    } catch (e) {
        yield put({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: e })
    }
}

async function fetchPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return response.data
}
