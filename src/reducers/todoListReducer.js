const initialState = {
    todos: []
}
const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_TODO_LIST': {
            const clonedTodos = [...state.todos];
            clonedTodos.push(action.todo);
            console.log('clonedTodos', clonedTodos);
            return {
                ...state,
                todos: clonedTodos
            }
        }
        case 'CLEAR_ALL' : {
            return  {
                ...state,
                todos: []
            }
        }

        default: return state;

    }
}
export default todoListReducer;
