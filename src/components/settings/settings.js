import React, { Fragment } from 'react';

import '../form/form.scss';
import Table from '../table/table';
// import { sleep } from '../../util/sleep';


const Settings = ({ node, setroutes, setgroup, setrole, setpermission }) => {

    // const endpointpri = window.localStorage.getItem("endpointpri");
    var tablegroups = null;
    var tableroles = null;
    var tablepermissions = null;

    
    // debugger
    /* const sendGetReq = async (endpoint, ansname) => {
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
                body: JSON.stringify({nodeid:node})
            };
            await fetch(endpoint, requestOptions)
            const answer = await fetch(endpoint, requestOptions)
                .then(response => {
                    return response.json();
                });
                if(!answer.message.includes("Listado")){
                    alert(answer.message);
                }
                if(answer.success){
                    // debugger
                    window.localStorage.setItem(ansname, JSON.stringify(answer.data));
                    
                }
            
    } */

    // if(window.localStorage.getItem("groupsdata") !== ""){
    //     debugger
    // }
    // if(window.localStorage.getItem("rolesdata") !== ""){
    //     debugger
    // }
    // if(window.localStorage.getItem("permissionsdata") !== ""){
    //     debugger
        
    // }

    
    // sleep(2000);
    tablegroups = 
        <Table
            data = "groupsdata"
            node = { node }
            setroutes = { setroutes }
            func = { setgroup }
            refresh = "Settings"
            refreshname = "App Settings"
            ttitle = "Groups"
            ttitles = {["Name", "Description", "Roles", "Actions"]}
            secndtaboption = {true}
        />;
    tableroles = 
        <Table
            data = "rolesdata"
            node = { node }
            setroutes = { setroutes }
            func = { setrole }
            refresh = "Settings"
            refreshname = "App Settings"
            ttitle = "Roles"
            ttitles = {["Name", "Description", "Actions"]}
            secndtaboption = {true}
        />;
    tablepermissions = 
        <Table
            data = "permissionsdata"
            node = { node }
            setroutes = { setroutes }
            func = { setpermission }
            refresh = "Settings"
            refreshname = "App Settings"
            ttitle = "Permissions"
            ttitles = {["Permissiondata", "Description", "Actions"]}
            secndtaboption = {true}
        />;




    return ( 
        <Fragment>
            <div className="table_list">
                {tablegroups}
                {tableroles}
                {tablepermissions}
            </div>
        </Fragment>
     );
}
 
export default Settings;