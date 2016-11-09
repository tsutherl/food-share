import React, { Component } from 'react';
import {browserHistory} from 'react-router'
 
export default class Login extends Component {

	render (){
		const newAuth= this.props.newAuth;
		return (
			  <div className="login-signup">
			  <h3>Login</h3>
			  <form onSubmit={evt => {
			    evt.preventDefault()
			    this.props.login(evt.target.username.value, evt.target.password.value)
			    .then(function(){ 
			    	if(newAuth().auth){
			    		browserHistory.push('/home')	
			    	}
			    	else{
			    		alert("Wrong UserName/Password!!");
			    	}
			    })
			  } }>
			    <input name="username" placeholder="Email"/>
			    <br/>
			    <br/>
			    <input name="password" type="password" placeholder="Password"/>
			    <br/>
			    <br/>
			    <button type="submit" className="btn btn-pink" value="Login"> Login </button>
			  </form>
			  <hr className="signup"/>
			  <h3>Or Signup</h3>
			  <form onSubmit={evt => {
			    evt.preventDefault()
			    this.props.signup(evt.target.name.value,evt.target.email.value, evt.target.password.value)
			    .then(function(){ 
			    	browserHistory.push('/home')	
			    	
			    })
			  } }>
			    <input name="name" placeholder="Name" />
			    <br/>
			    <br/>
			    <input name="email" placeholder="Email"/>
			    <br/>
			    <br/>
			    <input name="password" type="password" placeholder="password"/>
			    <br/>
			    <br/>
			    <button type="submit" className="btn btn-pink" value="Signup"> Signup </button>
			  </form>
			  </div>
			)
	 }
}




//full name
//email
//password
//confirm password


