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

  // if(token === "" || token === null || token === undefined)
  if(token === "") /* TODO */  // Temp para saltar login
  {
    actual =  
      <Login 
        logininfo ={logininfo} 
        setlogininfo = {setlogininfo}
      />;
    
  }else{
    actual = 
    <Fragment>
      <Form
        routes = { routes }
        setroutes = { setroutes }
      />

    </Fragment>;
    setTimeout(() => {
      if(route_title !== "" && document.getElementById("form")){
        document.getElementById("form").classList.add("show");
      }
    }, 500);
  }





  return(
    <Fragment>
      { title }
      <Menu 
        route = { route }
        setroutes = { setroutes }
      />
      <div className = "content">
        { actual }
      </div>
    </Fragment>
  )
}

export default App;
