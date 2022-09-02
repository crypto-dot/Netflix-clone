import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";
import billBoardImg from "../../assets/billboardImg.webp";
import BG from '../../assets/background.webp';
import React from 'react';
const Featured = ({ type }) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>
                            Genre
                        </option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={BG} width="100%" />
            <div className="info">
                <img src={billBoardImg} />

                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, harum, suscipit enim sed aliquam quod rerum quam nesciunt consectetur voluptates nam quasi laborum temporibus nisi? Repellendus obcaecati officia nulla dolore.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Featured