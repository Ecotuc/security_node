import React from 'react';

import './form.scss';

const Form = ({route}) => {
    if(route.includes("Apps")){
        route = route.substr(route.indexOf("Apps")+4,route.length);
        


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







    return ( null );
}
 
export default Form;