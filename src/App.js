import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoBanner} from './ToDoBanner';
import {ToDoRow} from './ToDoRow';
import {ToDoCreator} from './ToDoCreator';

export default class App extends Component {
  //Above we have created a class called App that extends the functionality of the component class.

  //THe export keyword makes the class avalible outside of th JS file where it is created (like the access modifier in C#)

  constructor() {
    //We are going to create state data for our component. To do that, we need to create a constructor method. This method will get called when an object is created using this class. Said anohter way, this mehtod will be called when the component is initialized.

    //To ensure that we have all the necessary features form React to create a stateful component, we need to call a method called super(). This super() calls the constructor for the {component} class in React.
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

  //If the ToDoRow Component's "done" property experiences a change event (checking the done box in the UI) then the ToDoRow compnent calls a callback method called toggleTodo (below) and passes toggleTodo the checked todo item
  todoTableRows = (isTaskDone) => this.state.todoItems.filter(x => x.done === isTaskDone).map(notCompleted => <ToDoRow 
      key = {notCompleted.action}
      item = {notCompleted}
      callback = {this.toggleTodo}
  />)

  //The toggleTodo method is invoked as a callback when the ToDoRow compnent has a change event to the "done" property
  //.setState allows the data to be updated
  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  });

  //Method below is the callback for the ToDoCreator Component
  createNewTodoCallback = (newTask) => {
    if(!this.state.todoItems.find(x => x.action === this.state.newItemText)) {
      this.setState({
        //The spread operator {...} below expands the array of todoItems and adds the new item to the array
        todoItems: [...this.state.todoItems, {action: newTask, done: false}]
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state))//endo of setItem
      );//end of setState
    }
  }

  //The method below is a built in react method to handle logic when the app "mounts" or "loads"
   componentDidMount = () => {
    let data = localStorage.getItem("todos");
     this.setState(data != null ? JSON.parse(data) : {
       userName: "Default user",
       todoItems: [
         {action: "Make a todo", done: false},
         {action: "Get life in order", done: false},
         {action: "Go fishing", done: false}
       ]
     })
   }

  //When using fat arrow (lambda) syntax the return keyword is not needed and the curly braces (scope) around the body of the function is also not needed
  render = () =>
  <div>
      <ToDoBanner
        displayName = {this.state.userName}
        tasks = {this.state.todoItems}  
      />

      {/*Feature 5*/}
      <ToDoCreator 
        callback = {this.createNewTodoCallback}
      />

      <table className="table table-striped table-bordered">
        <thead>
          <th>Description</th>
          <th>Done</th>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>
  </div>
};//End of App component

