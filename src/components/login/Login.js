import React, { Fragment } from 'react';


import Button from '../button/button';
import './login.scss';
import { showsubmitbutton } from '../../util/show_submit_button';

const Login = ({logininfo, setlogininfo}) => {

    const enpointpri = window.localStorage.getItem("endpointpri");
    

    const handleChange = e =>{
        setlogininfo({
            ...logininfo,
            [e.target.name] : e.target.value,
        })
    }
    
    const { username, password } = logininfo;


    const loginattempt = async e => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(logininfo)
        };
        const answer = await fetch(enpointpri+'/api/node/user/auth', requestOptions)
            .then(response => {
                return response.json();
            });
            alert(answer.message);
            if(answer.success){
                document.getElementById("content").classList.remove("login");
                setlogininfo({
                    ...logininfo,
                    token: answer.data.token,
                    success: answer.success
                });
                window.localStorage.setItem("token", answer.data.token);
                // window.localStorage.setItem("uid", answer.data.);
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
                        placeholder="Username"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="u-full-width"
                        onChange={handleChange}
                        value= {password}
                    />
                    
                    <Button 
                        text ="Login"
                        onClick = {null}
                        className= {showsubmitbutton(Object.values(logininfo)) ? 'show': ''}
                    />
                </form>
            </div>
        </Fragment>
    );
}

export default Login;