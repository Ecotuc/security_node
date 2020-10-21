import React, { Fragment, useState } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendGetReq, sendPostReq } from '../../util/send_req';
import './apps.scss';

const Apps = ( { service } ) => {
    // var parse = require('html-react-parser');
    // parse(form)
    var form = null;
    var endpoint ="";
    var data = {};

    const [app, setappinfo] = useState({
        name:'',
        description:''
    });
    const { name, description } = app;
    
    const [node, setnodeinfo] = useState({
        nodeid:''
    });
    const { nodeid } = node;

    const [update, setupdateinfo] = useState({
        nodeid:'',
        data:{
            name:'',
            description:''
        }
    });
    
    const handleAction = e =>{
        debugger
    }

    const handleChange = (e, op) => {
        switch(op){
            case "node":
                setnodeinfo({
                    ...node,
                    [e.target.name]: e.target.value,
                });
                break;
            case "app":
                setappinfo({
                    ...app,
                    [e.target.name]: e.target.value,
                });
                break;
            case "update":

            if( e.target.name !== "nodeid"){
                data = {
                    ...data,
                    [e.target.name]: e.target.value
                }

                setupdateinfo({
                    ...update,
                    data: data
                });
            }
                

            setupdateinfo({
                    ...update,
                    [e.target.name]: e.target.value,
                });
                break;
            default:
            break;
        }
        
    }

    

    switch (service){
        case "Create":
            endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/create";
            form =
                <Fragment>
                    <form id="form" className='form' onSubmit={(e) => {sendPostReq(e, app, endpoint)}}>
                        <div className = "input-row">
                            <div className = "input-group">
                                <label>Name</label>
                                <input
                                    type = "text"
                                    name = "name"
                                    className = "u-full-width input"
                                    onChange = { (e) => {handleChange(e, 'app')} }
                                    placeholder = "App name"
                                    value = { name }
                                />
                            </div>
                            <div className = "input-group">
                                <label>Description</label>
                                <textarea
                                    type = "text"
                                    name = "description"
                                    className = "u-full-width"
                                    onChange = { (e) => {handleChange(e, 'app')} }
                                    value = { description }
                                ></textarea>
                            </div>
                        </div>
                        
                        <Button 
                            text = { service }
                            className = {showsubmitbutton(Object.values(app)) ? 'show': ''}
                        />
                    </form>
                </Fragment>
            break
        case "List":
                endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/list";
                sendGetReq(endpoint, "table_titles", "table_rows", "table");
                form = 
                    <Fragment>
                        <div className = "table" id ="table">
                            <div className = "table_titles" id = "table_titles">
                                
                            </div>
                            <div className = "table_rows" id = "table_rows">
                                 
                            </div>

                        </div>
                    </Fragment>
                ;
                
            break
        case "Delete":
                endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/delete";
                form =
                <Fragment>
                    <form id="form" className='form' onSubmit={(e) => {sendPostReq(e, node, endpoint)}}>
                        <div className = "input-row">
                            <div className = "input-group">
                                <label>Node ID</label>
                                <input
                                    type = "text"
                                    name = "nodeid"
                                    className = "u-full-width input"
                                    onChange = { (e) => {handleChange(e, 'node')} }
                                    placeholder = "123"
                                    value = { nodeid }
                                />
                            </div>
                        </div>
                        
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(node)) ? 'show': ''}
                        />
                    </form>
                </Fragment> 
            break
            case "Update":
                endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/update";
                form =
                <Fragment>
                    <form id="form" className='form' onSubmit={(e) => {sendPostReq(e, node, endpoint)}}>
                        <div className = "input-row">
                            <div className = "input-group">
                                <label>Node ID</label>
                                <input
                                    type = "text"
                                    name = "nodeid"
                                    className = "u-full-width input"
                                    onChange = { (e) => {handleChange(e, 'update')} }
                                    placeholder = "123"
                                    // value = { nodeid }
                                />
                            </div>
                        </div>
                        <div className = "input-row">
                            <div className = "input-group">
                                <label>Name</label>
                                <input
                                    type = "text"
                                    name = "name"
                                    className = "u-full-width input"
                                    onChange = { (e) => {handleChange(e, 'update')} }
                                    placeholder = "App name"
                                    // value = { name }
                                />
                            </div>
                            <div className = "input-group">
                                <label>Description</label>
                                <textarea
                                    type = "text"
                                    name = "description"
                                    className = "u-full-width"
                                    onChange = { (e) => {handleChange(e, 'update')} }
                                    // value = { description }
                                ></textarea>
                            </div>
                        </div>
                        
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(update)) ? 'show': ''}
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
 
export default Apps;