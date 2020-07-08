import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from "../Nav/nav";
import Feed from "../Feed/feed";
import MainRight from "../MainRight/mainRight";
import "./Main.scss"

class HoMain extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="mainBox">
                    <Feed />
                    <MainRight />
                </div>
            </div>
        );
    }
}

export default HoMain;