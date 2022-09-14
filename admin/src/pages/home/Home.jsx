import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo.jsx';
import Chart from '../../components/chart/Chart.jsx';
import './Home.scss';
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx';
import WidgetLg from '../../components/widgetLg/WidgetLg.jsx';
import { useState, useEffect, useMemo, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext/authContext.js';
const Home = () => {
    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ], []);

    const [userStats, setUserStats] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("users/stats", {
                    headers: {
                        token: `Bearer ${user.accessToken}`
                    }
                });
                const listSorted = res.data.sort(
                    (a, b) => {
                        return a._id - b._id;
                    }
                )
                listSorted.map(item =>
                    setUserStats(prev =>
                        [...prev, { "name": MONTHS[item._id - 1], "New Users": item.total }]));
            } catch (err) {
                console.log(err);
            }
        };
        getStats();

    }, [MONTHS]);
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart grid dataKey={"New Users"} data={userStats} title={"User Analytics"} />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>

    )
}

export default Home