import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = this.props;
    this.change = function(e){
      let value = e.target.value;
      let correct = false;
        switch(e.target.id){
          case "nombre":
            if(typeof value === "string" && value.length < 20 && value.length >= 3){
             correct = true;
             this.setState({
                persona:{
                  nombre: value
                }
              });
            }
            break;
          case "apellidos":
            if(typeof value === "string" && value.length < 20 && value.length >= 3){
              correct = true;
              this.setState({
                persona:{
                  apellidos: value
                }
              });
            }
           break;
          case "edad":
            value = parseInt(value,0);
            if(typeof value === "number" && value <= 120 && value >= 0){
              correct = true;
              this.setState({
                persona:{
                  edad: value
                }
              });
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
    this.props = this.state;
    return (
      <div>
      <h1>Formulario</h1>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" defaultValue={this.state.persona.nombre} onChange={(e) => this.change(e)}/>   
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" defaultValue={this.state.persona.apellidos} onChange={(e) => this.change(e)}/>
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input type="number" id="edad" name="edad" defaultValue={this.state.persona.edad} onChange={(e) => this.change(e)}/>
        </div>
      </div>
    )
  }

}

export default App;
