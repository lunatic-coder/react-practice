import React, { Component } from 'react'

 class Signup extends Component {
     constructor(props){
         super(props)
         this.state ={
             FirstName: '',
             LastName: '',
             Email_Address: '',
             Password: ''
         }
     }

     handleFirstName = (event) => {
         this.setState({
            FirstName: event.target.value         })
     }

     handleLastName = (event) =>{
         this.setState({
             LastName: event.target.value
         })
     }

    handleEmail = (event) =>{
        this.setState ({
            Email_Address: event.target.value
        })
    }

    handlePassword =(event) =>{
        this.setState({
            Password: event.target.value
        })
    }

    handleSubmit = (event) => {
event.preventDefault()
console.log(this.state)
    }

    render() {
        return (
            <>
            <form>
                <div className="mb-3">
                <label className="form-label">FristName</label>
                <input type='text' placeholder='firstname' className="form-control" onChange={this.handleFirstName}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">LastName</label>
                    <input type='text' placeholder='lastname' className="form-control"  onChange={this.handleLastName}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type='text' placeholder='email' className="form-control" onChange={this.handleEmail} />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Password</label>
                    <input type='text' placeholder='password' className="form-control"  onChange={this.handlePassword} />
                </div>
            <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
            </form>
               
            </>
        )
    }
}

export default Signup
