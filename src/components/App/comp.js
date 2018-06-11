import React, { Component } from 'react';
import './comp.style.scss';

import TaskCreator from '../TaskCreator/comp.js';
import TaskList from '../TaskList/comp.js';
import Task from '../Task/comp.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  removeTask(index) {
    const tasks = this.state.tasks.slice(0);
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  createTask(e) {
    // Only fire on Enter
    if (e.which !== 13) {
      return;
    }

    const tasks = this.state.tasks.slice(0);
    tasks.push({ taskName: e.target.value });
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className="App">
        <h1>My Todolist</h1>
        <TaskCreator onKeyUpHandler={this.createTask.bind(this)} />
        <TaskList>
          {this.state.tasks.map((task, i) => (
            <Task
              onClickHandler={this.removeTask.bind(this, i)}
              taskName={task.taskName}
              key={i}
            />
          ))}
        </TaskList>
      </div>
    );
  }
}

export default App;
