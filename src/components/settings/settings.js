import React, { Fragment } from 'react';

import '../form/form.scss';
import Table from '../table/table';

const Settings = ({ node, setroutes, setgroup, setrole, setpermission }) => {

    const endpointpri = window.localStorage.getItem("endpointpri");
    const body = "{ \n  \"nodeid\": \"789\" \n}";
    var tablegroups = null;
    var tableroles = null;
    var tablepermissions = null;

    const sendGetReq = async (endpoint, ansname) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
                body: body
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
            
    }

    sendGetReq(endpointpri+"/api/node/rights/group/list", "groupsdata");
    sendGetReq(endpointpri+"/api/node/rights/role/list", "rolesdata");
    sendGetReq(endpointpri+"/api/node/rights/permission/list", "permissionsdata");
    
    tablegroups = 
        <Table
            data = "groupsdata"
            node = { node }
            setroutes = { setroutes }
            func = { setgroup }
        />;
    tableroles = 
        <Table
            data = "rolesdata"
            node = { node }
            setroutes = { setroutes }
            func = { setrole }
        />;
    tablepermissions = 
        <Table
            data = "permissionsdata"
            node = { node }
            setroutes = { setroutes }
            func = { setpermission }
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