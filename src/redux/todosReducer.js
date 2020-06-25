import { ADD_TODO, DELETE_TODO } from "./types"

const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: state.todos.concat(action.payload) }
        case DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(item => {
                    return item.id !== action.payload
                })
            }
        default: return state
    }
}