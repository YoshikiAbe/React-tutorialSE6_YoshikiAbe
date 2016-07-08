import React from 'react'

export default class Comment extends React.Component {
    handleDelete(event) {
        event.preventDefault();
        this.props.onDelete(this.props.comment);
    }
    render() {
        return (
            <div className='comment'>
                <h3 className='commentAuthor' >
                    {this.props.comment.author}
                    {this.props.comment.key}
                </h3>
                {this.props.comment.text}
                <form className ='commentForm'>
                    <input type='button' value='削除' onClick={this.handleDelete.bind(this)} />
                </form>
            </div>
        );
    }
}
