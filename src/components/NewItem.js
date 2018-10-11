import React, { Component } from 'react';

class NewItem extends Component {
    constructor() {
        super();
        this.state = {
            newItemName: ""
        }
    }

    setNewItemName = e => {
        this.setState({ newItemName: e.target.value })
    }

    handleFormSubmit = e => {
        // Stop form from resetting the page
        e.preventDefault();

        // Add checklist item to state in App component
        this.props.addChecklistItem(this.state.newItemName);

        // reset newItemName on submit so another item can be added
        this.setState({ newItemName: "" })
    }
    
    render() {
        return (
            <form>
                {/* Checklist Item Name */}
                <label htmlFor="item-name">New Checklist Item</label>
                <input id="item-name" type="text" value={this.state.newItemName} onChange={this.setNewItemName}/>

                <button onClick={this.handleFormSubmit}>Add New Item</button>
            </form>
        );
    }
}

export default NewItem;