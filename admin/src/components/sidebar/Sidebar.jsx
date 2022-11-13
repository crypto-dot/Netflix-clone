import React from 'react';
import './Sidebar.scss';
import {
    Home, Timeline, AttachMoney
    , PersonOutlineOutlined, List, BarChart, MailOutlineOutlined, QuestionAnswerOutlined, ChatBubbleOutlineOutlined, ReportOutlined, WorkOutlineOutlined, PlayArrowOutlined
} from '@material-ui/icons';
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
                                <Home className="sidebarIcon" />
                                <span className="sideBarSubTitle">Home</span>
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            <span className="sideBarSubTitle">Analytics</span>
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney
                                className="sidebarIcon" />
                            <span className="sideBarSubTitle">Sales</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users">
                            <li className="sidebarListItem">
                                <PersonOutlineOutlined className="sidebarIcon" />
                                <span className="sideBarSubTitle">Users</span>
                            </li>
                        </Link>
                        <Link to="/movies">
                            <li className="sidebarListItem">
                                <PlayArrowOutlined className="sidebarIcon" />
                                <span className="sideBarSubTitle">Movies</span>
                            </li>
                        </Link>
                        <Link to="lists">
                            <li className="sidebarListItem">
                                <List className="sidebarIcon" />
                                <span className="sideBarSubTitle">Lists</span>
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            <span className="sideBarSubTitle">Reports</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined className="sidebarIcon" />
                            <span className="sideBarSubTitle">Mail</span>
                        </li>
                        <li className="sidebarListItem">
                            <QuestionAnswerOutlined className="sidebarIcon" />
                            <span className="sideBarSubTitle">Feedback</span>
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="sidebarIcon" />
                            <span className="sideBarSubTitle">Messages</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarIcon" />
                            <span className="sideBarSubTitle">Manage</span>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            <span className="sideBarSubTitle">Analytics</span>
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className="sidebarIcon" />
                            <span className="sideBarSubTitle">Reports</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar