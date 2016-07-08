import ReactDOM from 'react-dom';
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

export default class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    // コンポーネントがレンダリングされた時に自動で呼び出される
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => { this.setState({data: data}); },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    handleCommentSubmit(comment) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'POST',
            cache: false,
            data: comment,
            success: (data) => { this.setState({data: data}); },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err);
            }
        });
    }

    handleCommentDelete(comment) {
        // TODO データの削除したいなあ
        // const jsonData =  this.state.data;
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     method: 'GET',
        //     cache: false,
        //     data: comment,
        //     success: (data) => { this.setState({data: jsonData.filter((jsonData) => {
        //                 return comment.key !== jsonData.key;
        //             })
        //         });
        //     },
        //     error: (xhr, status, err) => {
        //         console.error(this.props.url, status, err.toString());
        //     }
        // })
    }

    render() {
        return (
            <div className='commentBox'>
                <h2>コメント欄</h2>
                <CommentForm data={this.state.data} onCommentSubmit={this.handleCommentSubmit.bind(this)} />
                <CommentList data={this.state.data} onDelete={this.handleCommentDelete.bind(this)} />
            </div>
        );
    }
}
