import React, { useState } from "react";
import { connect } from 'react-redux';
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import * as todoListActions from '../../actions/createTodoListActions'
import "./createTodo.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "300px",
  },
};

const CreateTodo = ({ createTodo, showListing, addEntryToDoList }) => {
  const [state, setState] = useState({
    todoName: "",
    todoDescription: "",
    // bucket: "",
  });
  const { todoName, todoDescription, todoBucket } = state;
  
  function handleInputChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }
  function handleCreateTodo(){
    if(todoName && todoDescription) {
        addEntryToDoList({todoName, todoDescription })
        showListing();
    }  
  }
  function renderTodoEntities() {
    return (
      <div className="container">
        <h2>Create a TODO</h2>
        <div className="row">
          <div className="col-md-6">
            <TextField
              id="standard-basic"
              name="todoName"
              label="Todo Name"
              value={todoName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-area">
            <TextareaAutosize
              aria-label="textarea"
              placeholder="Enter the Todo Description"
              rowsMin={4}
              value={state.todoDescription}
              style={{ width: "50%" }}
              name="todoDescription"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* <label>Bucket:</label> */}
            {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 action-btn">
            <Button
              variant="contained"
              color="primary"
              style={{ top: "10px", right: "5px" }}
              onClick={handleCreateTodo}
            >
              Create Todo
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ top: "10px" }}
              onClick={showListing}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Modal
        isOpen={createTodo}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {renderTodoEntities()}
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todo: state.todoListReducer.todos 
})
export default connect(mapStateToProps, { ...todoListActions })(CreateTodo);
