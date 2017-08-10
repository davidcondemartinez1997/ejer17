import React, { Component } from 'react';

class CampoTexto extends Component {
	render(){
		return (
			<p>{this.props.persona.nombre}</p>
		)
	}
}

export default CampoTexto;
