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
        case 'DELETE_TODO' :{
            const updatedTodos = state.todos.filter((todo,index)=> index !== action.id );
            console.log('updatedTodos',updatedTodos);
            return {
                ...state,
                todos: updatedTodos
            }
        } 

        default: return state;

    }
}
export default todoListReducer;
