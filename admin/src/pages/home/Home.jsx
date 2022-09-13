import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo.jsx';
import Chart from '../../components/chart/Chart.jsx';
import './Home.scss';
import { UserData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx';
import WidgetLg from '../../components/widgetLg/WidgetLg.jsx';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
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

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("users/stats", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWE5MTdjYmVkOGRhNjkwZGY0MGRmMyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjI2ODU2MDQsImV4cCI6MTY2MzExNzYwNH0.hHO2DlZOP8HsRSJNJg6UE8YC0hjscnrMMok4Zqbzzkc"
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