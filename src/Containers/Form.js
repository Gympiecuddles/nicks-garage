import React, { Component } from 'react';
import kwesforms from 'kwesforms';
import './Form.css';

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             email: '',
             tel: ''
        }
    }

    componentDidMount() {
        kwesforms.init();
    }
    
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleTelChange = event => {
        this.setState({
            tel: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
    }

    render() {
        return (
            <form 
            mode='test' 
            className='kwes-form' 
            onSubmit={this.handleSubmit} 
            action='https://kwesforms.com/api/foreign/forms/jMrus4f6FLYhN2FetfT3' 
            method='post'>
                <label for='name'>Enter Your Name</label>
                <input 
                type='text' 
                name='name'
                rules='required'
                value={this.state.username} 
                onChange={this.handleUsernameChange} 
                placeholder='Name'
                />
                <label 
                className='emailLabel'
                for='email'
                >Email</label>
                <input 
                type='email'
                name='email'
                rules='required|email'
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder='Email'
                required/>
                <label
                for='phone'
                >Phone</label>
                <input 
                type='tel'
                name='phone'
                rules='required'
                value={this.state.tel}
                onChange={this.handleTelChange}
                placeholder='Phone'/>
                <label
                for='text'
                >Message</label>
                <textarea 
                name='text'
                rules='required'
                value={this.state.comments} 
                onChange={this.handleCommentsChange}
                placeholder='Message' 
                />
                <button type='submit'>Submit</button>   
            </form>
        )
    }
}

export default Form

