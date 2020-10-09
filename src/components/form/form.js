import React, { Fragment } from 'react';
import Apps from '../apps/apps';

import './form.scss';

const Form = ({routes}) => {
    var form = null;
    var { route, route_title } = routes; 

    if(route.includes("Apps")){
        route = route.substr(route.indexOf("Apps")+4,route.length);
        form =
            <Apps 
                service = {route}
            />
        console.log("Apps");
    }else if(route.includes("Groups")){
        route = route.substr(route.indexOf("Groups")+6,route.length);
        
        console.log("Groups");
    }else if(route.includes("Roles")){
        route = route.substr(route.indexOf("Roles")+5,route.length);
        console.log("Roles");
    }else if(route.includes("Permissions")){
        route = route.substr(route.indexOf("Permissions")+11,route.length);
        console.log("Permissions");
    }else if(route.includes("Users")){
        route = route.substr(route.indexOf("Users")+11,route.length);
        console.log("Users");
    }







    return ( 
        <Fragment>
            <div className='form_square'>
                <h3>{ route_title }</h3>
                {form} 
            </div>
        </Fragment>
        );
}
 
export default Form;