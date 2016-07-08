import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component{
    constructor() {
        super();
    }

    previousPage(page) {
        page += 1;
    }

    nextPage(page) {
        page -= 1;
    }

    render() {
        let page = 1;
        let maxPage = 2;
        const commentNodes = this.props.data.map((comment)=> {
            return (<Comment comment={comment} onDelete={this.props.onDelete} />);
        }).slice(page, maxPage);
        return (
        <div className='commentList'>
            <div className='pager'>
                <input type='button' value='<' onClick={this.previousPage(page)} />
                <input type='button' value='>' onClick={this.nextPage(page)} />
            </div>
            {commentNodes}
        </div> );
    }
}
