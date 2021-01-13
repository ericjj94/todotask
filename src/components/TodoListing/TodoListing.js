import React from 'react';
import { connect } from 'react-redux';


const TodoListing = ({ todos }) => { 
    function renderNoTodosMessage(){
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div>No todos exists as of now. Please add some to view </div>
                </div>
            </div>
        </div>
    }
    if(todos && todos.length) {
        return (<div>{renderTodosInTable}</div>)
    }
    return renderNoTodosMessage()
}
const mapStateToProps = state => ({
    todos: state.todoListReducer.todos
}) 
export default connect(mapStateToProps)(TodoListing);