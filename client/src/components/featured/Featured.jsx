import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";
import billBoardImg from "../../assets/billboardImg.webp";
import BG from '../../assets/background.webp';
import { React, useState, useEffect } from 'react';
import axios from "axios";
const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const randomMovie = await axios.get(`movies/random?type=${type}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGZhYTQxODUxZmQ3NTljMDM2MmM0YiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjE5NzEwNjIsImV4cCI6MTY2MjQwMzA2Mn0.RHc-T28jpbeg5JoT3wD21N3dgA5mpttnFcGJzyvigpw"
                        }
                    }
                );
                setContent(randomMovie.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type]);
    console.log(content);
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
            <img src={content.image} width="100%" />
            <div className="info">
                <img src={content.imageTitle} />

                <span className="desc">
                    {content.description}
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