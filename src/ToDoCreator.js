import React, {Component} from 'react'

export class ToDoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {newItemText: ""}
    }//end of constructor

    //Method for the onChange of the input box
    updateNewTextValue = (event) =>{
        this.setState({newItemText: event.target.value});
    }

    //Method for the onClick of the Add button
    createNewTodo = () =>{
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""});
    }

    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
                Add
            </button>
                
        </div>
}