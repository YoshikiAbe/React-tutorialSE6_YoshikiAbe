import React from 'react';

export default class CommentForm extends React.Component {
  hundleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) return;
  }

  render() {
    return(
      <form className="commentForm">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
