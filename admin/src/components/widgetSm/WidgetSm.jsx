import { Visibility } from '@material-ui/icons';
import { React, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext/authContext';
import axios from 'axios';
import './WidgetSm.scss';
const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get('users/?new=true', {
                    headers: {
                        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
                    }
                });
                setNewUsers(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getNewUsers();
    }, []);
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {newUsers.map(user => {
                    return (
                        <li key={user._id} className='widgetSmListItem'>
                            <img src={user.profilePic || 'https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg'} alt='user profile' className='widgetSmImg' />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                                <span className="widgetSmUserTitle">{user.email}</span>

                            </div>
                            <button className='widgetSmButton'>
                                <Visibility />
                                Display
                            </button>
                        </li>)
                })
                }
            </ul>
        </div>
    )
}

export default WidgetSm