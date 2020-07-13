import React from "react";
import Story from "../Story/story"
import Comment from "../Comment/Comment";
import Uploadbox from "../Uploadbox/uploadbox"
import "./feed.scss"

class Feed extends React.Component {
    constructor() {
        super();
         this.state = {
            storyImg: [
                {src: '/images/hogeunoh/사진.png',
                name: 'suayo'},
                {src: '/images/hogeunoh/이미지1.jpeg',
                name: 'name2'},
                {src: '/images/hogeunoh/이미지2.jpeg',
                name: 'name3'},
                {src: '/images/hogeunoh/이미지3.jpeg',
                name: 'name4'},
                {src: '/images/hogeunoh/이미지4.jpeg',
                name: 'name5'},
                {src: '/images/hogeunoh/이미지5.jpeg',
                name: 'name6'},
                {src: '/images/hogeunoh/이미지6.jpeg',
                name: 'name7'},
                {src: '/images/hogeunoh/이미지7.jpeg',
                name: 'name8'},
                {src: '/images/hogeunoh/이미지8.jpeg',
                name: 'name9'},
                {src: '/images/hogeunoh/이미지9.jpeg',
                name: 'name10'},
            ],
            img: [
                {src: '/images/hogeunoh/사진.png',
                name: 'suayo'},
                {src: '/images/hogeunoh/이미지1.jpeg',
                name: 'name2'},
                {src: '/images/hogeunoh/이미지2.jpeg',
                name: 'name3'},
                {src: '/images/hogeunoh/이미지3.jpeg',
                name: 'name4'},
                {src: '/images/hogeunoh/이미지4.jpeg',
                name: 'name5'},
                {src: '/images/hogeunoh/이미지5.jpeg',
                name: 'name6'},
                {src: '/images/hogeunoh/이미지6.jpeg',
                name: 'name7'},
                {src: '/images/hogeunoh/이미지7.jpeg',
                name: 'name8'},
                {src: '/images/hogeunoh/이미지8.jpeg',
                name: 'name9'},
                {src: '/images/hogeunoh/이미지9.jpeg',
                name: 'name10'},
            ]
        } 
    }

    render() {
        return (
            <div className="feed_ho">
                <div className="storyBox">
                    {this.state.storyImg.map((img, index) => 
                        <Story key={img.name + index} img={img} />
                    )}
                </div>
                {this.state.img.map((img, index) =>
                    <Uploadbox key={img.name + index} img={img} /> 
                )}
            </div>
        );
    }
}

export default Feed;