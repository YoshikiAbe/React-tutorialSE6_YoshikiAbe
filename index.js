import React from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

class CommentList extends React.Component {
  render() {
    return(
      <div className='commentList'>
        Hello, World! I am a CommentList.
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);
