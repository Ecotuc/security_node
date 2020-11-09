import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import Form from './components/form/form';
import Login from './components/login/login';
import Menu from './components/menu/menu';

function App() {
  const [logininfo, setlogininfo] = useState({
    username: '',
    password: '',
  });
 
  const [routes, setroutes] = useState({
    route:'/',
    route_title: ''
  });

  const goHome = () => {
    setroutes({
      route: "/"
    });
  }

  const goOut = () => {
    window.localStorage.removeItem("token");
    setlogininfo({
      token:"",
      username: '',
      password: '',
    })
    goHome()
  }

  // var enpoint = "http://2a1ce45d1288.ngrok.io";
  // window.localStorage.setItem("endpointpri","https://auth.zer0th.com");
  window.localStorage.setItem("endpointpri","http://ec2-3-136-116-249.us-east-2.compute.amazonaws.com");
  // window.localStorage.setItem("endpointpri","https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com");

  // "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp



  const { route, route_title } = routes;
  const { token } = logininfo;

  var title = <h1 className="title">Security node</h1>;
  var actual = null;
  
  if (route !== "/" && route !=="" && route !== undefined && route !== null){
    title = 
    <Fragment>
      <div className = "nav">
        <div className = "goBack">
          <FontAwesomeIcon onClick={goHome} icon={faHome}/>
        </div>
        <h1 className="title">Security node</h1>
        <div className = "goOut">
          <i className = "fas fa-sign-out-alt" onClick={goOut}></i>
        </div>
      </div>
    </Fragment>;
  }else{
    title =
    <Fragment>
      <div className = "nav">
        <h1 className="title">Security node</h1>
      </div>
    </Fragment>;
  }

  var content = null;
  if(token === "" || token === null || token === undefined)
  // if(token === "") /* TODO */  // Temp para saltar login
  {
    actual =  
      <Login 
        logininfo ={logininfo} 
        setlogininfo = {setlogininfo}
        setroutes = {setroutes}
      />;
    content = 
    <Fragment>
      { title }
      <div className = "content login" id = "content">
        { actual }
      </div>
    </Fragment>;

    
  }else{
    actual = 
      <Fragment>
        <Form
          routes = { routes }
          setroutes = { setroutes }
          />

      </Fragment>;
    content = 
      <Fragment>
        { title }
        <Menu 
          route = { route }
          setroutes = { setroutes }
        />
        <div className = "content" id = "content">
          { actual }
        </div>
      </Fragment>;
    
    setTimeout(() => {
      if(route_title !== "" && document.getElementById("form")){
        document.getElementById("form").classList.add("show");
      }
    }, 500);
  }





  return(
    <Fragment>
      {content}
    </Fragment>
    )
}

export default App;
