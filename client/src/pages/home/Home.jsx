import { React, useState, useEffect } from 'react'
import './Home.scss';
import NavBar from '../../components/navbar/NavBar';
import Featured from '../../components/featured/Featured';
import List from "../../components/list/List";
import axios from 'axios';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(`lists/${type ? "?type=" + type : ""}${!genre ? "&?genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWE5MTdjYmVkOGRhNjkwZGY0MGRmMyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjI2ODU2MDQsImV4cCI6MTY2MzExNzYwNH0.hHO2DlZOP8HsRSJNJg6UE8YC0hjscnrMMok4Zqbzzkc"
                    }
                });
                setLists(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getRandomList();
    }, [genre, type])
    return (
        <div className="home">
            <NavBar />
            <Featured type={type} />
            {lists.map(list => <List list={list} />)}

        </div>
    )
}

export default Home