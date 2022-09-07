import { Visibility } from '@material-ui/icons';
import React from 'react';
import './WidgetSm.scss';
const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://www.w3schools.com/w3images/avatar6.png' alt='user profile' className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Grant</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://www.w3schools.com/w3images/avatar6.png' alt='user profile' className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Grant</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://www.w3schools.com/w3images/avatar6.png' alt='user profile' className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Grant</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://www.w3schools.com/w3images/avatar6.png' alt='user profile' className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Grant</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://www.w3schools.com/w3images/avatar6.png' alt='user profile' className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Grant</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default WidgetSm