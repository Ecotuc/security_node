import React, { Fragment, useState } from 'react';
import Form from './components/form/form';
import Login from './components/login/login';
import Menu from './components/menu/menu';

function App() {
  
  const [logininfo, setlogininfo] = useState({
    username: '',
    password: '',
  });
 
  const [routes, setroutes] = useState({
    route:'',
    route_title: ''
  });

  const { route } = routes;
  const { token } = logininfo;
  
  var title = <h1 className="title">Security node</h1>
  var actual = null;

// debugger
  if(token === "" || token === null || token === undefined)
  // if(token === "") /* TODO */  // Temp para saltar login
  {
    actual =  
      <Login 
        logininfo ={logininfo} 
        setlogininfo = {setlogininfo}
      />;
    
  }else if(route === "" || route === "/"){
    actual = 
    <Menu
      route = {route}
      setroutes = {setroutes}
    />;
  }else {
    actual = 
    <Form
      routes = {routes}
    />
  }





  return(
    <Fragment>
      {title}
      {actual}
    </Fragment>
  )
}

export default App;
