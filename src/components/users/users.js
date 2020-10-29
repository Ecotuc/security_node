import React, { Fragment } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';
import Table from '../table/table';


const Users = ( { service, node, user, setuser, setroutes, group } ) => {
    // var parse = require('html-react-parser');
    // parse(form)

    var arr_roles = Object.values(JSON.parse(window.localStorage.getItem("rolesdata")));
    var checkboxes = [];
    // debugger
    const endpointpri = window.localStorage.getItem("endpointpri");
    var form = null;
    var endpoint = "";
    var arrayOfOptionValues = null;
// const { name, description, roles,} = group;
    const sendGetReq = async (endpoint, ansname, body) => {
            
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem("token")},
            body: JSON.stringify(body)
        };
        await fetch(endpoint, requestOptions)
        const answer = await fetch(endpoint, requestOptions)
            .then(response => {
                return response.json();
            });
            // if(!answer.message.includes("Listado")){
            //     alert(answer.message);
            // }
            if(answer.success){
                // debugger
                window.localStorage.setItem(ansname, JSON.stringify(answer.data));
            }
        
}

    const handleChange = e => {
        // debugger
        var value = "";
        if (e.target.type.includes('select-multiple')){
            arrayOfOptionValues = [];
            for (var i = 0; i < e.target.selectedOptions.length; i++){
                arrayOfOptionValues.push(e.target.selectedOptions[i].attributes.value.value);
            }
            value = arrayOfOptionValues;
        }else{ value = e.target.value }
        setuser({
            ...user,
            nodeid:node,
            [e.target.name]: value,
        })
    }
    
    const { description, roles,} = user;

    switch (service){
        case "List":
            endpoint = endpointpri+"/api/node/rights/group/listuser";
            setTimeout(() => {
                sendGetReq(endpoint, "usersdata", {nodeid: node, data:{groupid: group.groupid}});
            }, 1000);
            // debugger
            form = 
                <Fragment>
                    <Table
                        data = "usersdata"
                        node = { node }
                        setroutes = { setroutes }
                        func = { setuser }
                        refresh = "UsersList"
                        refreshname = "List Users"
                        ttitle = "Users"
                    />
                    <Table
                        data = "superusersdata"
                        node = { node }
                        setroutes = { setroutes }
                        func = { setuser }
                        refresh = "UsersList"
                        refreshname = "List Users"
                        ttitle = "Users"
                    />

                </Fragment>
            ;
            break
        case "Create":
            endpoint = endpointpri+"/api/node/user/create";

            arr_roles.forEach(element => {
                checkboxes.push(
                    <option value={element.roleid}>{element.name}</option>
                )
            });


            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {
                        sendPostReq(e, user, endpoint);
                        setTimeout(() => {
                            setroutes({ route: "SettingsList", route_title: "App Settings"})
                        }, 500);
                        }}>
                    <div className = "input-row">
                        <div className = "input-user">
                            <label>Name</label>
                            <input
                                type = "text"
                                name = "name"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "User name"
                                // value = { name }
                            />
                        </div>
                        <div className = "input-user">
                            <label>Roles</label>
                            <select name = "roles" multiple={true} value = { roles } onChange={handleChange}>
                                {checkboxes}
                            </select>
                        </div>
                    </div>
                    <div className = "input-row">
                        
                        <div className = "input-user">
                            <label>Description</label>
                            <textarea
                                type = "text"
                                name = "description"
                                className = "u-full-width"
                                onChange = { handleChange }
                                value = { description }
                                ></textarea>
                        </div>
                    </div>
                    
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(user)) ? 'show': ''}
                        />
                    </form>
                </Fragment>
            break
        case "Update":
            // debugger
            break
        default :
            service = 1;
            break
    }
    
    return ( form );
}
 
export default Users;