import React, { useState } from 'react';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoListing from '../TodoListing/TodoListing';
import ClearTodos from '../ClearTodos/ClearTodos';
import Header from '../../presentationalComponents/Header/Header';

const LandingPage = () => {
  const [state, setState] = useState({ currentTab: 'listing', isOpen: false });
  const { currentTab, isOpen } = state;

  function showListing() {
    setState({ ...state, currentTab: 'listing', isOpen: false });
  }

  function showTabs() {
    switch (currentTab) {
      case 'create':
        return (
          <CreateTodo createTodo={isOpen} showListing={showListing} />
        );
      case 'listing':
        return <TodoListing />;
      case 'clear':
        return <ClearTodos showListing={showListing} />;
      default:
        return null;
    }
  }

  function handleClick(type) {
    // Refract here to be more optimised
    if (type === 'clear') {
      setState({ ...state, currentTab: 'clear', isOpen: false });
    } else if (type === 'listing') {
      setState({ ...state, currentTab: 'listing', isOpen: false });
    } else {
      setState({ ...state, currentTab: 'create', isOpen: true });
    }
  }
  return (
    <div className="container">
      <h2>TODO list application</h2>
      <Header handleClick={handleClick} />
      {showTabs()}
    </div>
  );
};
export default LandingPage;
