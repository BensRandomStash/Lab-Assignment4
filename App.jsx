/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  TextInput
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const Tasks = ({}) => {
  const tasks = React.useState(['Do laundry', 'Go to gym', 'Walk dog'])}

const addTask = (taskText) => {
  const [tasks, setTasks] = React.useState('')
  setTasks([...tasks, taskText])
}

function App() {
  return (
    <SafeAreaView>
      <ToDoList Tasks = {Tasks}/>
      <ToDoForm addTask = {addTask}/>
    </SafeAreaView>
  );
}

export default App;
