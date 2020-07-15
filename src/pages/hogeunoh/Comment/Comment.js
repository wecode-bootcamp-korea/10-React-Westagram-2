import React from "react";
import "./Comment.scss"

class Comment extends React.Component {
    constructor() {
        super();
    }
    
    delete = () => {
        this.props.parentFunction(this.props.id)
    }

    render() {
        return (
            <div className="commentBox">
                <span className="name">ohohho</span>
                <span>{this.props.comment}</span>
                <span className="delete" onClick={this.delete} >🗑️</span>
                <img alt="love" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            </div>
        );
    }
}

export default Comment;