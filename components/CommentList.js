import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component{
    constructor() {
        super();
        this.state = {
            page: 1,
            maxPage: 2
        }
    }

    previousPage(page) {
        // this.setState({page: this.state.page + 1});
    }

    nextPage(page) {
        // this.setState({page: this.state.page - 1});
    }

    render() {
        const commentNodes = this.props.data.map((comment)=> {
            return (<Comment comment={comment} onDelete={this.props.onDelete} />);
        });
        // .slice((this.state.page * this.statemaxPage) - this.state.maxPage, (this.state.Page * this.state.maxPage) - 1);
        return (
        <div className='commentList'>
            <div className='pager'>
                <input type='button' value='<' onClick={this.previousPage(this.state.page)} />
                <input type='button' value='>' onClick={this.nextPage(this.state.page)} />
            </div>
            {commentNodes}
        </div> );
    }
}
