import React, { Fragment } from 'react';
import Apps from '../apps/apps';
import Groups from '../groups/groups';
import Permissions from '../permissions/permissions';
import Roles from '../roles/roles';

import './form.scss';

export const sendGetReq = async (endpoint, ttitles, trows, table) => {
    window.localStorage.setItem("pass", "true");
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
        // body: JSON.stringify(req)
    };
    const answer = await fetch(endpoint, requestOptions)
        .then(response => {
         return response.json();
        });
        if(answer.success && window.localStorage.getItem("pass") === "true"){
            window.localStorage.setItem("data", JSON.stringify(answer.data));
            // arr_titles = Object.keys(answer.data[0]);
            // arr_data = answer.data;
            window.localStorage.setItem("pass", "false");
        }
}
const Form = ({routes, setroutes}) => {


    sendGetReq("https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/list", "table_titles", "table_rows", "table");







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
                />;
            console.log("Apps");
        }else if(route.includes("Groups")){
            route = route.substr(route.indexOf("Groups") + 6,route.length);
            form =
                <Groups 
                    service = { route }
                />;
            console.log("Groups");
        }else if(route.includes("Roles")){
            route = route.substr(route.indexOf("Roles") + 5,route.length);
            form =
                <Roles
                    service = { route }
                />;
            console.log("Roles");
        }else if(route.includes("Permissions")){
            route = route.substr(route.indexOf("Permissions") + 11,route.length);
            form =
                <Permissions
                    service = { route }
                />;                
            console.log("Permissions");
        }else if(route.includes("Users")){
            route = route.substr(route.indexOf("Users") + 11,route.length);
            console.log("Users");
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