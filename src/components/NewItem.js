import React, { Component } from 'react';

class NewItem extends Component {
    constructor() {
        super();
        this.state = {
            newItemName: ""
        }
    }

    setNewItemName = () => {

    }

    handleFormSubmit = e => {
        // Stop form from resetting the page
        e.preventDefault();


    }
    
    render() {
        return (
            <form>
                {/* Checklist Item Name */}
                <label htmlFor="item-name">New Checklist Item</label>
                <input id="item-name" type="text"/>

                <button onClick={this.handleFormSubmit}>Add New Item</button>
            </form>
        );
    }
}

export default NewItem;