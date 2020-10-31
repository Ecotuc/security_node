import React, { Fragment } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';
import Table from '../table/table';
import { sleep } from '../../util/sleep';

import './users.scss';


const Users = ( { service, node, user, setuser, setroutes, group } ) => {
    // var parse = require('html-react-parser');
    // parse(form)

    var arr_roles = Object.values(JSON.parse(window.localStorage.getItem("rolesdata")));
    var checkboxes = [];
    // debugger
    const endpointpri = window.localStorage.getItem("endpointpri");
    var form = null;
    var endpoint = "";
    var permissions = null;
    var users = null;
    var allpermissions = [];
    var usersdata = "";
    var aux = [];



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
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const { username } = user;

    switch (service){
        case "List":
            endpoint = endpointpri+"/api/node/rights/group/listuser";
            usersdata = JSON.parse(window.localStorage.getItem("users"));
            
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
                        ttitles = {["username", "email", "fullname"]}
                    />
                    {/* <Table
                        data = "superusersdata"
                        node = { node }
                        setroutes = { setroutes }
                        func = { setuser }
                        refresh = "UsersList"
                        refreshname = "List Users"
                        ttitle = "Users"
                    /> */}

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
                            setroutes({ route: "UserList", route_title: "Users"})
                        }, 500);
                        }}>
                    <div className = "input-row">
                        <div className = "input-user">
                            <label>Username</label>
                            <input
                                type = "text"
                                name = "username"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "user01"
                                // value = { name }
                            />
                        </div>
                        <div className = "input-user">
                            <label>Full Name</label>
                            <input
                                type = "text"
                                name = "fullname"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "Juan Benito Perez Fieldman"
                                // value = { name }
                            />
                        </div>
                    </div>
                    <div className = "input-row">
                        <div className = "input-user">
                            <label>Email</label>
                            <input
                                type = "email"
                                name = "email"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "example@domain.com"
                                // value = { name }
                            />
                        </div>
                        <div className = "input-user">
                            <label>Password</label>
                            <input
                                type = "password"
                                name = "password"
                                className = "u-full-width"
                                onChange = { handleChange }
                                // value = { name }
                            />
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
        case "Settings":
            sleep(500);
            permissions = JSON.parse(window.localStorage.getItem("prmsfromusr"));
            aux = JSON.parse(window.localStorage.getItem("permissions"));
            if (permissions.length > 0 && aux.length !== permissions.length){
                aux.forEach(pemission => {
                    permissions.forEach(peruser => {
                        if(pemission.userid !== peruser.id){
                            allpermissions.push(pemission);
                        } 
                    });
                });
                window.localStorage.setItem("permissions", JSON.stringify(allpermissions));
            }else if(aux.length === permissions.length){
                window.localStorage.setItem("permissions",JSON.stringify(allpermissions));
            }


            form =
                <Fragment>
                    <Table
                        data = "prmsfromusr"
                        node = { node }
                        setroutes = { setroutes }
                        func = { setuser }
                        refresh = "UsersSettings"
                        refreshname = {`${username} Settings`}
                        ttitle = "Permissions From User"
                        ttitles = {["permissiondata", "description"]}
                        secndtaboption = {false}
                    />
                    <Table
                        data = "permissions"
                        node = { node }
                        setroutes = { setroutes }
                        func = { setuser }
                        refresh = "UsersSettings"
                        refreshname = {`${username} Settings`}
                        ttitle = "Permissions Availables"
                        ttitles = {["permissiondata", "description"]}
                        secndtaboption = {false}
                        extradata = {window.localStorage.getItem("userid")}
                        // extradata ={window.localStorage.getItem("roleid")}
                    />

                </Fragment>
            ;

            break
        default :
            service = 1;
            break
    }
    
    return ( form );
}
 
export default Users;