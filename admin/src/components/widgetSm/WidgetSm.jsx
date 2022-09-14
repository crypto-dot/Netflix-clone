import { Visibility } from '@material-ui/icons';
import { React, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext/authContext';
import axios from 'axios';
import './WidgetSm.scss';
const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const getNewUsers = async () => {
            console.log(user);
            try {
                const res = await axios.get('users/?new=true', {
                    headers: {
                        token: `Bearer ${user.accessToken}`
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
    console.log(newUsers);
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {newUsers.map(user => {
                    return (
                        <li className='widgetSmListItem'>
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