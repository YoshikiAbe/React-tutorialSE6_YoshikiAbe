import React from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        こんにちは, 世界！ 私はコメントボックス。
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);
