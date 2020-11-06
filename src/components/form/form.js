import React, { Fragment, useState } from 'react';
import Apps from '../apps/apps';
import Groups from '../groups/groups';
import Permissions from '../permissions/permissions';
import Roles from '../roles/roles';
import Settings from '../settings/settings';
import Users from '../users/users';

import './form.scss';

export const sendGetReq = async (endpoint, ttitles, trows, table) => {
    window.localStorage.setItem("pass", "true");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
        // body: JSON.stringify(req)
    };
    const answer = await fetch(endpoint, requestOptions)
        .then(response => {
         return response.json();
        });
        if(answer.success && window.localStorage.getItem("pass") === "true"){
            // debugger
            window.localStorage.setItem("data", JSON.stringify(answer.data));
            // arr_titles = Object.keys(answer.data[0]);
            // arr_data = answer.data;
            window.localStorage.setItem("pass", "false");
        }
}
const Form = ({routes, setroutes}) => {
  const endpointpri = window.localStorage.getItem("endpointpri");
    var aux = "";

    sendGetReq(endpointpri+"/api/node/list", "table_titles", "table_rows", "table");

    const [node, setnode] = useState("");
    const [group, setgroup] = useState({
        name:'',
        description:'',
        roles:[],
        nodeid: ''
    });
    const [role, setrole] = useState({
        name:'',
        description:'',
        nodeid:''
    });
    const [permission, setpermission] = useState({
        nodeid: '',
        permissiondata: '',
        description: ''
    });
    const [user, setuser] = useState({
        username: '',
        email: '',
        fullname: '',
        password: ''
    });


    

    var form = null;
    var render = null;
    var { route, route_title } = routes; 

    if( route_title === "" || route_title === null || route_title === undefined ){
        render = null;
    }else{
        if(route.includes("Apps")){
            route = route.substr(route.indexOf("Apps") + 4,route.length);
            form =
                <Apps 
                    service = { route }
                    setroutes = { setroutes }
                    setnode = { setnode }
                />;
            console.log("Apps");
        }else if(route.includes("Groups")){
            route = route.substr(route.indexOf("Groups") + 6,route.length);
            form =
                <Groups 
                    service = { route }
                    node = { node }
                    group = { group }
                    setgroup = { setgroup }
                    setroutes = { setroutes }
                />;
            console.log("Groups");
        }else if(route.includes("Roles")){
            route = route.substr(route.indexOf("Roles") + 5,route.length);
            form =
                <Roles
                    service = { route }
                    node = { node }
                    role = { role }
                    setrole = { setrole }
                    setroutes = { setroutes }
                />;
            console.log("Roles");
        }else if(route.includes("Permissions")){
            route = route.substr(route.indexOf("Permissions") + 11,route.length);
            form =
                <Permissions
                service = { route }
                node = { node }
                permission = { permission }
                setpermission = { setpermission }
                setroutes = { setroutes }
                />;                
            console.log("Permissions");
        }else if(route.includes("Users") || route.includes("users")){
            aux = route;
            route = route.includes("Uusers")? route.substr(route.indexOf("Users") + 7,route.length): route.substr(route.indexOf("Users") + 5,route.length);
            console.log("Users");
            form = 
                <Users
                service = { route }
                node = { node }
                user = { user }
                setuser = { setuser }
                setroutes = { setroutes }
                group = { group }
                route = { aux }
                />
        }else if(route.includes("Settings")){
            route = route.substr(route.indexOf("Settings") + 8,route.length);
            console.log("Settings");
            form = 
                <Settings
                    node = { node }
                    setroutes = { setroutes }
                    setgroup = { setgroup }
                    setrole = { setrole }
                    setpermission = { setpermission }
                />
        }
        render =
            <Fragment>
                <div className='form_square'>
                    <div className = "form_title">
                        <div className = "module-border-wrap"><h3 className = "module">{ route_title }</h3></div>
                    </div>
                    {form} 
                </div>
            </Fragment>;
    }

    
    return ( 
        render
    );
}
 
export default Form;