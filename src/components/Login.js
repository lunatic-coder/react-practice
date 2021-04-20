import React, { Component } from 'react'


 class Login extends Component {
     constructor(props){
         super(props)
         this.state = {
             email: '',
             password: ''
         }
     }

     handleEmail = (event) => {
this.setState({
    email: event.target.value
})
     }

     handlePassword = (event) => {
this.setState({
    password: event.target.value
})
     }

     handleSubmit = (event) =>{
         console.log(this.state)
         event.preventDefault()
     }

    render() {
        return (
            < div className='div'> 
            <from >

            
            <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type='text' placeholder='email'  className="form-control" onChange={this.handleEmail}/>
                </div>
            <div className="mb-3">

           
                <label className="form-label">password</label>
                <input type='text' placeholder='password' className="form-control" onChange={this.handlePassword} />
                </div>
            <button type='submit' className="btn btn-primary btn-block" onClick={this.handleSubmit}>login </button>
            </from>
            </ div>
        )
    }
}

export default Login
