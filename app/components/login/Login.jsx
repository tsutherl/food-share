import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router'
 
export default class Login extends Component {

	render (){
		const newAuth= this.props.newAuth
		let wrongPassword= false;
		return (
			  <div>
			  {wrongPassword? <div class="alert alert-danger alert-dismissible" role="alert">
			    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			    <strong>Warning!</strong> Better check yourself, youre not looking too good.
			  </div> : ""}
			  <form onSubmit={evt => {
			    evt.preventDefault()
			    this.props.login(evt.target.username.value, evt.target.password.value)
			    .then(function(){ 
			    	if(newAuth().auth){
			    		browserHistory.push('/home')	
			    	}
			    	else{
			    		wrongPassword=true;
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

