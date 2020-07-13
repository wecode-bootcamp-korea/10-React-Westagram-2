import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from "../Nav/nav";
import Feed from "../Feed/feed";
import MainRight from "../MainRight/mainRight";
import "./Main.scss"

class Main extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <div className="main_ho">
                    <Feed />
                    <MainRight />
                </div>
            </>
        );
    }
}

export default Main;