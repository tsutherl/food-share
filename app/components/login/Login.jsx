import React, { Component } from 'react';
import {browserHistory} from 'react-router'
 
export default class Login extends Component {

	render (){
		const newAuth= this.props.newAuth;
		return (
			  <div>
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
			    <input name="username" />
			    <input name="password" type="password" />
			    <input type="submit" value="Login" />
			  </form>
			  </div>
			)
	 }
}

