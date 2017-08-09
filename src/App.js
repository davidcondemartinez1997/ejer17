import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.change = function(e){
      let value = e.target.value;
      let correct = false;
        switch(e.target.id){
          case "nombre":
            if(typeof value === "string" && value.length < 20 && value.length >= 3){
             correct = true;
             this.props.persona.nombre = value;
            }
            break;
          case "apellidos":
            if(typeof value === "string" && value.length < 20 && value.length >= 3){
              correct = true;
              this.props.persona.nombre = value;
            }
           break;
          case "edad":
            value = parseInt(value);
            if(typeof value === "number" && value <= 120 && value >= 0){
              correct = true;
              this.props.persona.nombre = value;
            }
            break;
          default:
        }
        if(correct){
          e.target.style.color = "green";
        }else{
          e.target.style.color = "red";
        }
    }
  }

  render() {
    return (
      <div>
      <h1>Formulario</h1>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" defaultValue={this.props.persona.nombre} onChange={(e) => this.change(e)}/>   
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" defaultValue={this.props.persona.apellidos} onChange={this.change}/>
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input type="number" id="edad" name="edad" defaultValue={this.props.persona.edad} onChange={this.change}/>
        </div>
      </div>
    )
  }

}

export default App;
