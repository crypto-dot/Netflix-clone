import "./ListItem.scss";
import Show from "../../assets/show.jpg";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState, useRef } from "react";
const ListItem = ({ index }) => {
    const [isHover, setIsHover] = useState(false);
    const listRef = useRef();
    const convertRemToPixel = (rem) => {
        return ((rem) * parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size')));
    }
    const handleEnter = () => {
        setIsHover(true);
        const listItems = [...document.getElementsByClassName('list-item')];
        let found = false;
        listItems.forEach(listItem => {
            if (!found && listItem === listRef.current) {
                return;
            }
            listItem.style.pointerEvents = 'none';
        });
    }
    const handleLeave = () => {
        setIsHover(false);
        const listItems = [...document.getElementsByClassName('list-item')];
        let found = false;
        setTimeout(() => {
            listItems.forEach(listItem => {
                if (!found && listItem === listRef.current) {
                    return;
                }
                listItem.style.pointerEvents = 'auto';
            })
        }, 500);
    }
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="list-item"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{ left: isHover && `${index * convertRemToPixel(15.5) - convertRemToPixel(2.25)}px` }}
            ref={listRef}
        >
            <img src={Show} />
            {isHover &&
                (<>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="item-info">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="item-info-top">
                            <span>1 hour 14 min</span>
                            <span className="age-limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed aliquam distinctio laudantium voluptates cumque.
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div></>)}
        </div >
    )
}

export default ListItem