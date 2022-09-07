import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo.jsx';
import Chart from '../../components/chart/Chart.jsx';
import './Home.scss';
import { UserData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx';
import WidgetLg from '../../components/widgetLg/WidgetLg.jsx';
const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart grid dataKey={"activeUser"} data={UserData} title={"User analytics"} />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>

    )
}

export default Home