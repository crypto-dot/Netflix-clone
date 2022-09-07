import React from 'react';
import './FeaturedInfo.scss';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
const FeaturedInfo = () => {
    return (
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="arrowIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,315</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="arrowIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">+11.4 <ArrowUpward className="arrowIcon positive" /></span>
                </div>
                <span className="featuredSub">Compared to last month </span>
            </div>
        </div>
    )
}

export default FeaturedInfo