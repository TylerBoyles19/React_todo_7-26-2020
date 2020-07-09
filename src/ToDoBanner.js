import React, {Component} from 'react'

export class ToDoBanner extends Component {
    render = () =>
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.displayName}'s To Do List ({this.props.tasks.filter(taskx => !taskx.done).length} items to do)
      </h4>
  };