import { Visibility } from '@material-ui/icons';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './WidgetSm.scss';
const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get('users/?new=true', {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWE5MTdjYmVkOGRhNjkwZGY0MGRmMyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjI2ODU2MDQsImV4cCI6MTY2MzExNzYwNH0.hHO2DlZOP8HsRSJNJg6UE8YC0hjscnrMMok4Zqbzzkc"
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