export function addEntryToDoList({todoName='', todoDescription= '', todoBucket=  '' }) {
    return (dispatch) => {
        dispatch({ type: 'ADD_TO_TODO_LIST', todo: {todoName, todoDescription, todoBucket} });
    }
}
export function clearAll(){
    return {
        type: 'CLEAR_ALL'
    }
}