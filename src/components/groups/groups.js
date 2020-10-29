import React, { Fragment, useState } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';


const Groups = ( { service, node, group, setgroup, setroutes } ) => {
    // var parse = require('html-react-parser');
    // parse(form)

    var arr_roles = Object.values(JSON.parse(window.localStorage.getItem("rolesdata")));
    var checkboxes = [];
    // debugger
    const endpointpri = window.localStorage.getItem("endpointpri");
    var form = null;
    var endpoint = "";
    var arrayOfOptionValues = null;

    const [groupupdate, setgroupupdate] = useState({
        nodeid:node,
        data:{
            groupid: group.groupid
        }
    })

    
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
        setgroup({
            ...group,
            nodeid:node,
            [e.target.name]: value,
        })
    }
    const handleChange2 = e => {
        // debugger
        var value = "";
        if (e.target.type.includes('select-multiple')){
            arrayOfOptionValues = [];
            for (var i = 0; i < e.target.selectedOptions.length; i++){
                arrayOfOptionValues.push(e.target.selectedOptions[i].attributes.value.value);
            }
            value = arrayOfOptionValues;
        }else{ value = e.target.value }
        setgroup({
            ...group,
            nodeid:node,
            [e.target.name]: value,
        })
        setgroupupdate({
            ...groupupdate,
            nodeid:node,
            data:{
                ...groupupdate.data,
                [e.target.name]: value,
            }
        })
    }
    
    const { name, description, roles,} = group;

    switch (service){
        case "Create":
            endpoint = endpointpri+"/api/node/rights/group/create";

            arr_roles.forEach(element => {
                checkboxes.push(
                    <option value={element.roleid}>{element.name}</option>
                )
            });


            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {
                        sendPostReq(e, group, endpoint);
                        setTimeout(() => {
                            setroutes({ route: "SettingsList", route_title: "App Settings"})
                        }, 500);
                        }}>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Name</label>
                            <input
                                type = "text"
                                name = "name"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "Group name"
                                // value = { name }
                            />
                        </div>
                        <div className = "input-group">
                            <label>Roles</label>
                            <select name = "roles" multiple={true} value = { roles } onChange={handleChange}>
                                {checkboxes}
                            </select>
                        </div>
                    </div>
                    <div className = "input-row">
                       
                        <div className = "input-group">
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
                            className= {showsubmitbutton(Object.values(group)) ? 'show': ''}
                        />
                    </form>
                </Fragment>
            break
        case "Update":
            endpoint = endpointpri+"/api/node/rights/group/update";
            form = 
            arr_roles.forEach(element => {
                checkboxes.push(
                    <option value={element.roleid}>{element.name}</option>
                )
            });


            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {
                        debugger
                        sendPostReq(e, groupupdate, endpoint);
                        setTimeout(() => {
                            setroutes({ route: "SettingsList", route_title: "App Settings"})
                        }, 500);
                        }}>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Name</label>
                            <input
                                type = "text"
                                name = "name"
                                className = "u-full-width"
                                onChange = { handleChange2 }
                                placeholder = "Group name"
                                value = { name }
                            />
                        </div>
                        <div className = "input-group">
                            <label>Roles</label>
                            <select name = "roles" multiple={true} value = { roles } onChange={handleChange2}>
                                {checkboxes}
                            </select>
                        </div>
                    </div>
                    <div className = "input-row">
                       
                        <div className = "input-group">
                            <label>Description</label>
                            <textarea
                                type = "text"
                                name = "description"
                                className = "u-full-width"
                                onChange = { handleChange2 }
                                value = { description }
                                ></textarea>
                        </div>
                    </div>
                    
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(groupupdate)) ? 'show': ''}
                        />
                    </form>
                </Fragment>
            ;
            // debugger
            break
        default :
            service = 1;
            break
    }
    
    return ( form );
}
 
export default Groups;