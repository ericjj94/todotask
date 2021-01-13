import React from 'react';
import { connect } from 'react-redux';
import SimpleTable from '../../presentationalComponents/SimpleTable/SimpleTable';


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

    return (<div className="main-content">
        {todos && todos.length ? <SimpleTable todos={todos}/>: renderNoTodosMessage()}
    </div>)
}
const mapStateToProps = state => ({
    todos: state.todoListReducer.todos
}) 
export default connect(mapStateToProps)(TodoListing);