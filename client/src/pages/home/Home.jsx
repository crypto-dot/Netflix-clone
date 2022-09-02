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
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGZhYTQxODUxZmQ3NTljMDM2MmM0YiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjE5NzEwNjIsImV4cCI6MTY2MjQwMzA2Mn0.RHc-T28jpbeg5JoT3wD21N3dgA5mpttnFcGJzyvigpw"
                    }
                });
                console.log(res.data);
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