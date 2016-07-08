import React from 'react';

export default class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const author = this.refs.author.value.trim();
        const text = this.refs.text.value.trim();
        // TODO 一意なkeyを付けたいなあ
        const key = this.props.data.length + 1;
        if(!author || !text) return;
        this.props.onCommentSubmit({author: author, text: text, key: key});
        this.refs.author.value='';
        this.refs.text.value='';
    }
    render() {
        return (
            <form className='commentForm' onSubmit = {this.handleSubmit.bind(this)}>
                <input type='text' placeholder='ユーザ名' ref='author'/>
                <input type='text' placeholder='コメント' ref='text'/>
                <input type='submit' value='投稿' />
            </form>
        );
    }
}
