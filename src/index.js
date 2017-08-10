import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import CampoTexto from './CampoTexto';
import registerServiceWorker from './registerServiceWorker';

const persona = {
	nombre: "Pepe",
	apellidos: "Lopez",
	edad: 23
}

ReactDOM.render(<App persona={persona}/>, document.getElementById('root'));

//ReactDOM.render(<CampoTexto persona={persona}/>, document.getElementById('root2'));

registerServiceWorker();

