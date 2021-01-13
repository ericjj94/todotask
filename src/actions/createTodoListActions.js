export function addEntryToDoList(todo) {
    return (dispatch) => {
        dispatch({ type: 'ADD_TO_TODO_LIST', todo });
    }
}