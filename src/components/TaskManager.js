import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class TaskManager extends Component {
  state = {
    tasks: [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a project', completed: true },
    ]
  };

  addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  toggleTaskCompletion = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    });
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList 
          tasks={this.state.tasks} 
          toggleTaskCompletion={this.toggleTaskCompletion} 
          deleteTask={this.deleteTask} 
        />
      </div>
    );
  }
}

export default TaskManager;
