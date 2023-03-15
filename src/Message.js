import { Component } from 'react';

class Message extends Component {
  state = {
    content: null,
    author: null
  }

  async componentDidMount() {

    const url="https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({content:data.content, author: data.author})
  }

  render(){
  return <div className='container'>
     <p className='textContent'>{this.state.content}</p>
     <p className='textAuthor'>{this.state.author}</p>
    </div>
}
}

export default Message;
