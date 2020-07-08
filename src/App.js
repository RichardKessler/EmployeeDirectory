import React, { Component } from 'react';
import Title from './components/Title'
import Employee from './components/Employees'
import Form from './components/Form'
import './App.css';
import orderBy from 'lodash/orderBy'
import employees from './employees.json'
import Wrapper from './components/Wrapper'

class App extends Component {
  state = {
    employees,
    sortedEmployees: employees,
    ascending: true
  };

  nameSort = () => {
    const { sortedEmployees, ascending } = this.state
    const 
  }
}

export default App;
