import { createStore } from "redux";
const initialState = {
    todoList: [],
    posts: [],
    users: [],
}

function todoReducer(state = initialState, action) {
    return state;
}

const store = createStore(todoReducer);
