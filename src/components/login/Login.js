import React, { Fragment, useState } from 'react';
import './login.scss';


const Login = () => {

    const [logininfo, setlogininfo] = useState({
        username: '',
        password: '',
        token: ''
    });

    const handleChange = e =>{
        setlogininfo({
            ...logininfo,
            [e.target.name] : e.target.value,
        })
        console.log('escribo');
    }
    
    const { username, password, token } = logininfo;

    const showsubmitbutton = () => {
        return(username !== "" && username !== null && username !== undefined && password !== '')
    }

    const loginattempt = e => {
        e.preventDefault();
        
        if(true){
            logged = true;
        }


    }


    return (
        <Fragment>
            <div className='login_square'>
                <h3>Log in</h3>
                <form className='form_login' onSubmit={loginattempt}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        className="u-full-width"
                        onChange={handleChange}
                        value= {username}
                        />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="u-full-width"
                        onChange={handleChange}
                        value= {password}
                    />
                    
                    <button className= {`login_button ${showsubmitbutton() ? 'show': ''}`}>
                        Log in
                    </button>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;