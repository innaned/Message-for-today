import { Component } from 'react';
import './App.css';
import Message from './Message';

class App extends Component {
  state = {
  content: null,
  author: null,
  }

  async getInfo() {

    const url="https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({content:data.content, author: data.author})
  }

  render(){
    const text = "What is your message for today?"
  return <div className='container'>
     <p>{text}</p>
     <div className='btnCheck'>
     <button className='btn' onClick={() => this.getInfo()}>Check</button>
     </div>
    <Message 
     contentProps={this.state.content}
     authorProps={this.state.author}
     />
    </div>
}
}

export default App;