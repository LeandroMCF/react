import React from 'react';
import './App.css';


function DataFormatada(props) {
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    };
  }
  //Ciclo de vida que ocorre quando o Clock é inserida na DOM
  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000 );
  }

  //Ciclo de vida que ocorre quando o componente é removido da DOM
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  thick(){
    this.setState({
      date : new Date()
    });
  }

  render(){
    return(
      <div>
        <header>
          <h1>Relógio</h1>
          <DataFormatada date ={this.state.date}/>
          <input></input>
        </header>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
