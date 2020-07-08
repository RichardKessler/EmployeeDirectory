import React from 'react'


let Employee = props => {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.position}</td>
            </tr>
        </tbody>
    );
}

export default Employee;