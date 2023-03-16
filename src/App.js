import { Component } from 'react';
import './App.css';
import Message from './Message';

class App extends Component {
  state = {
  mes: false
  }

  render(){
    const text = "What is your message for today?"
    console.log()
  return <div className='container'>
     <p>{text}</p>
     <div className='btnCheck'>
     <button className='btn' onClick={() => this.setState({mes:true})}>Check</button>
     </div>
     {this.state.mes ? <Message/> : null}
    </div>
}
}

export default App;