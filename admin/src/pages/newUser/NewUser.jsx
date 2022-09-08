import React from 'react';
import './NewUser.scss';
const NewUser = () => {
    const handleInput = (e) => {
        return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
    }
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Johnsmith99' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='John Smith' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='John@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" maxlength={10} onInput={handleInput} placeholder='+1 123 456 789' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='New York, NY' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="gender">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" />
                        <label htmlFor='Male'>Male</label>
                        <input type="radio" name="gender" id="female" />
                        <label htmlFor='Female'>Female</label>
                        <input type="radio" name="gender" id="others" />
                        <label htmlFor='others'>Other</label>

                    </div>
                    <button className="newUserButton">Create</button>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                </div>
            </form>
        </div>
    )
}

export default NewUser