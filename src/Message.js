import { Component } from 'react';

class Message extends Component {

  render(){
  return <div className='container'>
     <p className='textContent'>{this.props.contentProps}</p>
     <p className='textAuthor'>{this.props.authorProps}</p>
    </div>
}
}

export default Message;
