import React from "react";
import Story from "../Story/story"
import Comment from "../Comment/Comment";
import Uploadbox from "../Uploadbox/uploadbox"
import "./feed.scss"

class Feed extends React.Component {
    constructor() {
        super();
        this.state={
            storyImg: [],
            uploadImg: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    storyImg: res
                })
            })
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    uploadImg : res.data.movies
                })
            })
    }

    render() {
        return (
            <div className="feed_ho">
                <div className="storyBox">
                    {this.state.storyImg.map((img) => 
                        <Story key={img.name} img={img} />
                    )}
                </div>
                {this.state.uploadImg.map((img) =>
                    <Uploadbox key={img.title} img={img}/> 
                )}
            </div>
        );
    }
}

export default Feed;