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

  sortName = () => {
    const { sortedEmployees, ascending } = this.state
    const upOrDown = ascending ? 'asc' : 'desc'
    const sorted = orderBy(sortedEmployees, 'name', upOrDown);

    this.setState({ sortedEmployees: sorted, ascending: !ascending })
  }

  render() {
    return (
      <Wrapper>
        <div className='container'>
          <Title>Directory of Employees</Title>

          <Form />
          <table className='table'>
            <thead>
              <tr className='header'>
                <th scope='col' onClick={this.sortName}>Name</th>
                <th scope='col'>Phone Number</th>
                <th scope='col'>Email</th>
                <th scope='col'>Position</th>
              </tr>
            </thead>
            {this.state.sortedEmployees.map(employee => {
              return (
                <Employee
                id={employee.id}
                key={employee.id}
                name={employee.name}
                phone={employee.phone}
                email={employee.email}
                position={employee.position}
                />
              )
            })}
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default App;
