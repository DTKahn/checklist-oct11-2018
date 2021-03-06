import React, { Component } from 'react';
import './App.css';

import NewItem from'./components/NewItem';
import Checklist from './components/Checklist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      checklistItems: []
    }
  }

  addChecklistItem = item => {
  // takes a string as an arg and adds an object to checklistItems in state
    
    // Make a copy checklistItems
    const checklistItems = this.state.checklistItems;

    // Add new item to copy of checklistItem
    checklistItems.push({checklistItem: item, done: false});

    // Set state with the new version of checklistItems
    this.setState({
      checklistItems
    })
  }

  render() {
    return (
      <div className="App">
        <NewItem addChecklistItem={this.addChecklistItem} />
        <Checklist checklistItems={this.state.checklistItems} />
      </div>
    );
  }
}

export default App;
