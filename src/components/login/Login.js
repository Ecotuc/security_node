import React, { Fragment } from 'react';
import './login.scss';


const Login = ({logininfo, setlogininfo}) => {

    

    const handleChange = e =>{
        setlogininfo({
            ...logininfo,
            [e.target.name] : e.target.value,
        })
    }
    
    const { username, password } = logininfo;

    const showsubmitbutton = () => {
        return(username !== "" && username !== null && username !== undefined && password !== '')
    }

    const loginattempt = async e => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { 
                    "username": "mario1",
                    "password": "P_@ssw0rdS4p3rSecuR3" 
                }
            )
        };
        const answer = await fetch('https://private-5bf7ee-igsoftwaremoduloseguridad.apiary-mock.com/api/node/user/auth', requestOptions)
            .then(response => {
                return response.json();
            });
            alert(answer.message);
            if(answer.success){
                setlogininfo({
                    ...logininfo,
                    token: answer.data.token,
                    success: answer.success
                });
                window.localStorage.setItem("token", answer.data.token);
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