import React from 'react';
import Button from '@material-ui/core/Button';

const Header = ({handleClick}) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <Button variant="contained" color="primary" onClick={()=> {handleClick('create')}}>Create a TODO</Button>
            </div>
            <div className="col-md-4">
                <Button variant="contained" color="primary" onClick={()=> {handleClick('listing')}}>View all TODOS</Button>
            </div>
            <div className="row">
            <Button variant="contained" color="secondary" onClick={()=> {handleClick('clear')}}>Clear all</Button>
            </div>
        </div>
    )
}
export default Header;
