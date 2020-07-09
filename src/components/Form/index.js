import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: ''
    };

    handleInputchange = event => {
        const { name, value } = event.target;
        // console.log('Name ', name);
        // console.log("Value ", value);
        this.setState({
            [name]: value
        });

        this.props.filterEmployees(value)

        // let input, filter, table, tr, td, i, textValue;
        // input = document.getElementById('userInput');
        // filter = input.value.toUpperCase();
        // table = document.getElementById('table');
        // tr = table?.getElementsByTagName('tr');

        // for (i = 0; i < tr?.length; i++){
        //     td = tr[i].getElementsByTagName('td')[0];
        //     if (td){
        //         textValue = td.textContent || td.innerText;
        //         if (textValue.toUpperCase().indexOf(filter) > -1){
        //             tr[i].style.display = '';
        //         } else {
        //             tr[i].style.display = 'none';
        //         }
        //     }
        // }
    }

    render() {
        return (
            <div>
                <form className='form'>
                    <input 
                    id='userInput'
                    vaule={this.state.name}
                    name='name'
                    onChange={this.handleInputchange}
                    type='text'
                    placeholder='Search'
                    />
                </form>
            </div>
        );
    }
}

export default Form;