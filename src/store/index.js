import { createStore } from "redux";
const initialState = {
    Todo: [],
    posts: [],
    users: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                Todo: [...state.Todo, action.payload],
            };
        case 'DELETE_TODO':
            return {};
        default:
            return state
    }
}

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export function deleteTodo(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo,
    }
}


export const store = createStore(todoReducer);


