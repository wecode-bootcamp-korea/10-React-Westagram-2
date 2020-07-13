import React from "react";
import "./story.scss"

class Story extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { img } = this.props;
        return (
            <div className="story">
                <div className="gradation">
                    <img alt="profile" src={img.src} />
                </div>
                <span>{img.name}</span>
            </div>
        )
    }
}

export default Story