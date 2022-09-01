import { React, useState()} from 'react'
import './Home.scss';
import NavBar from '../../components/navbar/NavBar';
import Featured from '../../components/featured/Featured';
import List from "../../components/list/List";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    return (
        <div className="home">
            <NavBar />
            <Featured type={type} />
            <List />
            <List />
            <List />
            <List />

        </div>
    )
}

export default Home