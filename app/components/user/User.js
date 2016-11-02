import React, {Component} from 'react';

export default class User extends Component {
	render () {
		return(
				<div>
					<h3> {this.props.auth && this.props.auth.name}</h3>
                </div>
			)
	}
}