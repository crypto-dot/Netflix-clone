import "./List.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../ListItem/ListItem";
import { useRef, useState, React } from "react";
const List = () => {
    const convertPixelToRem = (px) => {
        return ((px) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size')));
    }
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();
    const leftArrowRef = useRef();
    const rightArrowRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distanceInRem = convertPixelToRem(listRef.current.getBoundingClientRect().x) - 3;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            if (slideNumber - 1 === 0) {
                setIsMoved(false);
            }
            listRef.current.style.transform = `translateX(${15.5 + distanceInRem}rem)`;
            leftArrowRef.current.style.pointerEvents = "none";
            setTimeout(() => {
                leftArrowRef.current.style.pointerEvents = "auto";
            }, 500);
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-15.5 + distanceInRem}rem)`;
            rightArrowRef.current.style.pointerEvents = "none";
            setTimeout(() => {
                rightArrowRef.current.style.pointerEvents = "auto";
            }, 500);
        }
    }
    return (
        <div className="list">
            <span className="list-title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={(() => handleClick("left"))} ref={leftArrowRef} style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                    <ListItem index={10} />
                    <ListItem index={1221} />

                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} ref={rightArrowRef} />
            </div>
        </div>
    )
}

export default List