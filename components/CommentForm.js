import React from 'react';
import ReactDOM from 'react-dom';
export default class CommentForm extends React.Component {
    handleSubmit(e) {
        // ブラウザのサブミット処理を無効化する
        e.preventDefault();
        // フォームからデータを取得する
        var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
        var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) return;
        // サーバにデータを送信
        this.props.onCommentSubmit({author: author, text: text});
        // フォームをクリアする
        ReactDOM.findDOMNode(this.refs.author).value = '';
        ReactDOM.findDOMNode(this.refs.text).value = '';
      }

    render() {
        return(
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Your Name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="Post" />
            </form>
        );
    }
}
