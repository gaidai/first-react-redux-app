import React, { Component } from 'react';
import './RegistrationForm.css'


class RegistrationForm extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //  email: ''
        // };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('form is submitteed .Email value is : ', this.testInput.value);
    }
    handleEmailChange(event){
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value});
    }

    render() {
      
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    ref={(input) => this.testInput = input}
                    type="text" 
                    placeholder="E-mail" 
                                        
                    onChange= {(event) => this.handleEmailChange(event)} 
                    className="emailField"
                />  
                <button className="submitBtn">Save</button>               
            </form>
        )
    }

}

export default RegistrationForm;
// value={this.state.email} 