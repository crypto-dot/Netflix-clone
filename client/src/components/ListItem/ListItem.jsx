import "./ListItem.scss";
import Show from "../../assets/show.jpg";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState, useRef, React, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListItem = ({ item }) => {
    const [isHover, setIsHover] = useState(false);
    const listRef = useRef();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const newMovie = await axios.get(`/movies/find/630faaa2851fd759c0362c4e`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGZhYTQxODUxZmQ3NTljMDM2MmM0YiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjE5NzEwNjIsImV4cCI6MTY2MjQwMzA2Mn0.RHc-T28jpbeg5JoT3wD21N3dgA5mpttnFcGJzyvigpw"
                    }
                });
                setMovie(newMovie.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [item]);
    return (
        <div className="list-item"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            ref={listRef}
        >
            <Link to="/watch" state={{ movie }}>
                <img src={movie.image} />
                {isHover &&
                    (<div className="wrapper">
                        <video src={movie.trailer} autoPlay={false} loop />
                        <div className="item-info">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="item-info-top">
                                <span>{movie.duration}</span>
                                <span className="age-limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.description}
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>
                        </div></div>)
                }
            </Link>
        </div >
    )
}

export default ListItem