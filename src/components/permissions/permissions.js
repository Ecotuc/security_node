import React, { Fragment, useState } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';


const Permissions = ( { service, node, permission, setpermission, setroutes } ) => {
    // var parse = require('html-react-parser');
    // parse(form)
    const endpointpri = window.localStorage.getItem("endpointpri");
    var form = null;
    var endpoint = "";
    const [permission2, setpermission2] = useState({
        nodeid:node,
        data:{
            permissionid:permission.id,
            permissiondata:permission.permissiondata,
            description:permission.description
        }
    })

    const handleChange = e => {
        setpermission({
            ...permission,
            nodeid:node,
            [e.target.name]: e.target.value,
        })
    }
    const handleChange2 = e => {
        // setpermission({})
        setpermission2({
            ...permission2,
            nodeid:node,
            data:{
                ...permission2.data,
                [e.target.name]: e.target.value,
            }
        })
    }
    
    const { permissiondata, description } = permission2.data;

    

    switch (service){
        case "Create":
            endpoint = endpointpri+"/api/node/rights/permission/create";
            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {sendPostReq(e, permission, endpoint);setroutes({ route: "SettingsList", route_title: "App Settings"})}}>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Permissiondata</label>
                            <input
                                type = "text"
                                name = "permissiondata"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "permission name"
                                // value = { permissiondata }
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
                            text = {service}
                            className= {showsubmitbutton(Object.values(permission)) ? 'show': ''}
                        />
                    </form>
                </Fragment>
            break
        case "Update":
            endpoint = endpointpri+"/api/node/rights/permission/update";
            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {sendPostReq(e, permission2, endpoint);setroutes({ route: "SettingsList", route_title: "App Settings"})}}>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Permissiondata</label>
                            <input
                                type = "text"
                                name = "permissiondata"
                                className = "u-full-width"
                                onChange = { handleChange2 }
                                placeholder = "permission name"
                                value = { permissiondata }
                            />
                        </div>
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
                            className= {showsubmitbutton(Object.values(permission)) ? 'show': ''}
                        />
                    </form>
                </Fragment>
            break
        default :
            service = 1;
            break
    }
    
    return ( form );
}
 
export default Permissions;