import React, { useState , useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import { clearAll } from '../../actions/createTodoListActions'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ClearTodos = ({ clearAll, todos, showListing }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(()=> {
    if(todos && !todos.length) {
      setIsOpen(false);
      showListing();
    }
  }, [todos])

  function handleClear() {
    clearAll();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Are you sure you want to clear all todos?</p>
            <Button variant="contained" color="primary" onClick={handleClear} style={{marginRight: '5px' }}>
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setIsOpen(false);
                showListing();
              }}
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
const mapStateToProps = state => ({
    todos: state.todoListReducer.todos
}) 
export default connect(mapStateToProps, {clearAll})(ClearTodos);
