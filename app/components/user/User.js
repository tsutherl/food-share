import React, {Component} from 'react';
import {Link} from 'react-router'

export default class User extends Component {
	constructor (){
		super();
		this.state={
			name: '',
			email: '',
			password: ''
		}
		this.updateName= this.updateName.bind(this);
		this.updateEmail= this.updateEmail.bind(this);
		this.updatePassword= this.updatePassword.bind(this);
	}

	updateName (evt){this.setState({name: evt.target.value})}
	updateEmail (evt){this.setState({email: evt.target.value})}
	updatePassword (evt){this.setState({password: evt.target.value})}

	render () {
		console.log('----------MY PROPS---------',this.props)
		return(
				<div>
					<div className='text-center'>
						<div className="jumbotron">
						  <h3 className="display-3"> Welcome to Your Account, {this.props.auth && this.props.auth.name} !! </h3>
						  <hr className="my-2"/>
						  <p> Below are more options for your account </p>
						</div>
					</div>
					<div className="well container center_div">
						<h3> Order History </h3>
						<Link to="/user/orders"><button type="button" className="btn btn-success">View More Orders...</button></Link>
					</div>
					<hr/>
					<div className='center_div container'>
						<h3> Settings </h3>
						<form onSubmit={(evt)=>{
							this.props.submitInfo(this.state,this.props.auth)
						}}>
						  <div className="form-group" >
						    <label for="exampleInputName1">Name</label>
						    <input onChange={this.updateName} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/>
						  </div>
						  <div className="form-group" >
						    <label for="exampleInputEmail1">Email address</label>
						    <input onChange={this.updateEmail} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
						    <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
						  </div>
						  <div className="form-group">
						    <label for="exampleInputPassword1">Password</label>
						    <input onChange={this.updatePassword} type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
						  </div>
						  <div className="form-group">
						    <label for="exampleInputFile">File input</label>
						    <input onChange={evt => this.setState({picture: event.target.value})} type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
						    <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.</small>
						  </div>
						  <button type="submit" className="btn btn-primary">Save Changes</button>
						</form>
					</div>
                </div>
			)
	}
}