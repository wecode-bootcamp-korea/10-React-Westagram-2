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
                    <img alt="profile" src={`https://robohash.org/${img.id}?set=set2&size=180x180`} />
                </div>
                <span>{img.name}</span>
            </div>
        )
    }
}

export default Story