import React, {Component} from 'react'

export class ToDoRow extends Component{
    //Below we define the value for the onChange event property as a callback()
    //This is how child components are able to communicate with parents, as they cannot update the value of props passed to them from a parent component. This is because React only supports a one-way data flow (from parent down to child).
    //However, the parent can provide a function property (prop) that children can call upon whenever something important (like an event) happens.

    //There are 2 different kinds of PROPS
    //Data Props - allows the parent to pass data to the child
    //Function Props - allows the child to comunicate with the parent

    render = () =>
        <tr>
            <td>{this.props.item.action}</td>
            <td>
                <input type="checkbox" checked={this.props.item.done} onChange={() => this.props.callback(this.props.item)} />
            </td>
        </tr>
};