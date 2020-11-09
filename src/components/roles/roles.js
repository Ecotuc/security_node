import React, { Fragment } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';
import Table from '../table/table';
import { sleep } from '../../util/sleep';


const Roles = ( { service, node, role, setrole, setroutes } ) => {
    // var parse = require('html-react-parser');
    // parse(form)
    const endpointpri = window.localStorage.getItem("endpointpri");
    var form = null;
    var users = null;
    var allusers = [];
    var endpoint = "";
    var aux = [];

    setTimeout(() => {
        console.log('exe');
        if (parseInt(window.localStorage.getItem("timesexecuted")) === 0){
            setroutes({ route: "RolesSettings", route_title: "Role Settings" });
            window.localStorage.setItem("timesexecuted", "1");
        }
    }, 2000);

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
            if(!answer.message.includes("Listado")){
                alert(answer.message);
            }
            if(answer.success){
                // debugger
                window.localStorage.setItem(ansname, JSON.stringify(answer.data));
                
            }
        
    }
    sendGetReq(endpointpri+"/api/node/user/list", "users",{});
    sleep(500);


    const handleChange = e => {
        setrole({
            ...role,
            nodeid:node,
            [e.target.name]: e.target.value,
        })
    }
    
    // const { name, description } = role;

    switch (service){
        case "Create":
            endpoint = endpointpri+"/api/node/rights/role/create";
            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {sendPostReq(e, role, endpoint);setroutes({ route: "SettingsList", route_title: "App Settings"})}}>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Name</label>
                            <input
                                type = "text"
                                name = "name"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "role name"
                                // value = { name }
                            />
                        </div>
                        <div className = "input-group">
                            <label>Description</label>
                            <textarea
                                type = "text"
                                name = "description"
                                className = "u-full-width"
                                onChange = { handleChange }
                                // value = { description }
                                ></textarea>
                        </div>
                    </div>
                    
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(role)) ? 'show': ''}
                        />
                    </form>
                </Fragment>;
            break
        case "Settings":
            sleep(500);
            users = JSON.parse(window.localStorage.getItem("usersfromrl"));
            aux = JSON.parse(window.localStorage.getItem("users"));
            if (users.length > 0 && aux.length !== users.length){
                aux.forEach(user => {
                    users.forEach(roleuser => {
                        if(user.userid !== roleuser.id){
                            allusers.push(user);
                        } 
                    });
                });
                window.localStorage.setItem("users", JSON.stringify(allusers));
            }else if(aux.length === users.length){
                window.localStorage.setItem("users",JSON.stringify(allusers));
            }


            form =
                <Fragment>
                    <Table
                        data = "usersfromrl"
                        node = { node }
                        setroutes = { setroutes }
                        // func = { setgroup }
                        refresh = "RolesSettings"
                        refreshname = "Role Settings"
                        ttitle = "Users from role"
                        ttitles = {["username"]}
                        extradata ={window.localStorage.getItem("roleid")}
                        secndtaboption = {false}
                    />
                    <Table
                        data = "users"
                        node = { node }
                        setroutes = { setroutes }
                        // func = { setgroup }
                        refresh = "RolesSettings"
                        refreshname = "Role Settings"
                        ttitle = "Users availables"
                        ttitles = {["username", "email", "fullname"]}
                        extradata ={window.localStorage.getItem("roleid")}
                        secndtaboption = {false}
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
 
export default Roles;