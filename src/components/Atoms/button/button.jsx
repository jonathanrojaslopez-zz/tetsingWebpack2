import React, { Component } from 'react';

class Button extends React.Component {

	handleVar = () => {
		console.log(`hi mg`)
	}

	render(){
		return(
			<div>
				<button onClick={()=> this.handleVar() }>botonsillito</button>
				Botonete
			</div>
		)
	}
}

export default Button;