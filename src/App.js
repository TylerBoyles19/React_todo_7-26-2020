import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  //Above we have created a class called App that extends the functionality of the component class.

  //THe export keyword makes the class avalible outside of th JS file where it is created (like the access modifier in C#)

  constructor() {
    //We are going to create state data for our component. To do that, we need to create a constructor method. This method will get called when an object is created using this class. Said anohter way, this mehtod will be called when the component is initialized.

    //To ensure that we have all the necessary features form React to create a stateful component, we need to call a method called super(). This super() calls the constructor for the component class in React.
    super();

    this.state = {
      userName: "Tyler",
      todoItems: [
        {action: "Take out the trash", done: false},
        {action: "Mow", done: false},
        {action: "Pay the bills", done: true},
        {action: "Play Games", done: true},
        {action: "Hang out with wife", done: false},
      ]
    }

  }//End of constructor

  //When using fat arrow (lambda) syntax the return keyword is not needed and the curly braces (scope) around the body of the function is also not needed
  render = () =>
  <div>
      <ToDoBanner
        displayName = {this.state.userName}
        tasks = {this.state.todoItems}  
      />
  </div>
};//End of App component

export class ToDoBanner extends Component {
  render = () =>
    <h4 className="bg-primary text-white text-center p-2">
      {this.props.displayName}'s To Do List ({this.props.tasks.filter(taskx => !taskx.done).length} items to do)
    </h4>
};