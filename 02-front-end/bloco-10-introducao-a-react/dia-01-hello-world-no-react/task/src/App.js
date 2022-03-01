import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['estudar', 'trabalhar', 'correr', 'cozinhar'];

class App extends React.Component {
  render() {
    return (
      <div>{tasks.map((task) => (
        Task(task)
      ))}</div>
    );
  }
}

export default App;
