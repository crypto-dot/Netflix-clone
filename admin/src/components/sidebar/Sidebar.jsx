import React from 'react';
import './Sidebar.scss';
import { LineStyle, Timeline, TrendingUp, PersonOutlineOutlined, AttachMoneyOutlined, BarChart, MailOutlineOutlined, QuestionAnswerOutlined, ChatBubbleOutlineOutlined, ReportOutlined, WorkOutlineOutlined, PlayArrowOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users">
                            <li className="sidebarListItem">
                                <PersonOutlineOutlined className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/movies">
                            <li className="sidebarListItem">
                                <PlayArrowOutlined className="sidebarIcon" />
                                Movies
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <QuestionAnswerOutlined className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar