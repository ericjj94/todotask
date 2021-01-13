import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoListing from '../TodoListing/TodoListing';

const LandingPage = () => {

    const [state, setState ] = useState({ currentTab: 'listing', isOpen: false });
    const { currentTab, isOpen } = state;
    function handleCreate() {
        setState({ ...state, currentTab: 'create', isOpen: true })
    }
    function cancelCreateTodo(){
        setState({...state, currentTab: 'listing', isOpen: false })
    }

    function showTabs(){
        switch(currentTab)  {
            case 'create' : return <CreateTodo createTodo={isOpen} cancelCreateTodo={cancelCreateTodo}/>
            case 'listing' : return <TodoListing /> 
        }
    }
    return (<div className="container">
        <div className="row">
            <div className="col-md-4">
                <Button variant="contained" color="primary" onClick={handleCreate}>Create a TODO</Button>
            </div>
            <div className="col-md-4">
                <Button variant="contained" color="primary">View all TODOS</Button>
            </div>
            <div className="row">
            <Button variant="contained" color="primary">Clear all</Button>
            </div>
        </div>
         {showTabs()}
    </div>)
}
export default LandingPage;