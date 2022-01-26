import React, { Component } from 'react'
import './Form.css'

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
        alert(`${this.state.username} ${this.state.comments}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action='contactform.php' method='post'>
                <div>
                    <label>Enter Your Name</label>
                    <input 
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange} 
                    placeholder='Name'
                    />
                    <label className='emailLabel'>Enter Your Email</label>
                    <input 
                    type='email'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    placeholder='Email'
                    required/>
                    <label>Phone</label>
                    <input 
                    type='tel'
                    value={this.state.tel}
                    onChange={this.handleTelChange}
                    placeholder='Phone'/>
                    <label>Enter Your Message Here</label>
                    <textarea 
                    value={this.state.comments} 
                    onChange={this.handleCommentsChange}
                    placeholder='Message' 
                    />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form

