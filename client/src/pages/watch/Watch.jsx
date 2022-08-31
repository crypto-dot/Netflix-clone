import "./Watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import React from 'react';
const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <button>
                    <ArrowBackOutlined />
                    Home
                </button>
            </div>
            <video className="video" autoPlay progress="true" controls src="https://youtu.be/FzWG8jiw4XM"
            ></video>
        </div>
    )
}

export default Watch