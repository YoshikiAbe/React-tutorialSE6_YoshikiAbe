import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render() {
    return(
      <div className='commentList'>
        <Comment auther='Yoshiki'>This is one comment</Comment>
        <Comment auther='Abe'>This is *auther* comment</Comment>
      </div>
    );
  }
}
