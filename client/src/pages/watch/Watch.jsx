import "./Watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
const Watch = () => {
    const location = useLocation();
    const movie = location.state.movie;
    return (
        <div className="watch">
            <div className="back">
                <Link to="/">
                    <button>
                        <ArrowBackOutlined />
                        Home
                    </button>
                </Link>
            </div>
            <video className="video" autoPlay progress="true" controls src={movie.video}
            ></video>
        </div>
    )
}

export default Watch