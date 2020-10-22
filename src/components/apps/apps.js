import React, { Fragment, useState } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';
import { toUpperFirst } from '../../util/to_uppercase_first';
import './apps.scss';

const Apps = ( { service, setroutes } ) => {
    
    
    // var parse = require('html-react-parser');
    // parse(form)
    var arr_titles = [];
    var titles = [];
    var rows = [];
    var form = null;
    var endpoint ="";

    const [app, setappinfo] = useState({
        name:'',
        description:''
    });
    
    const [node, setnodeinfo] = useState({
        nodeid:''
    });
    
    
    const handleChange = (e, op) => {
        switch(op){
            case "node":
                setnodeinfo({
                    ...node,
                    data:{
                        ...node.data,
                        [e.target.name]:e.target.value
                    }
                })
                break;
            case "app":
                setappinfo({
                    ...app,
                    [e.target.name]: e.target.value,
                });
                break;
            case "update":


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
                                />
                            </div>
                            <div className = "input-group">
                                <label>Description</label>
                                <textarea
                                    type = "text"
                                    name = "description"
                                    className = "u-full-width"
                                    onChange = { (e) => {handleChange(e, 'app')} }
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
            var delete_endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/delete";
            var list_endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/list";
            var list = JSON.parse(window.localStorage.getItem("data"));
            arr_titles = Object.keys(list[0]);
            window.localStorage.setItem("listapps","false");
            arr_titles.forEach(e => {
                titles.push(<h5 key = {`t${e}`}>{toUpperFirst(e)}</h5>);
            });
            titles.push(<h5 key = "act">Actions</h5>);

            list.forEach(element => {

                arr_titles.forEach(prop => {
                    rows.push(<div key = {`tc${element[prop]}`} >{element[prop]}</div>);
                 });
                rows.push(
                    <div key = {`act${element["nodeid"]}`} className = "actions">
                        <i className='fas fa-trash-alt' 
                            onClick = {(e) => {
                                sendPostReq(e, {nodeid: element["nodeid"]}, delete_endpoint, list_endpoint); 
                                setroutes({ route: "AppsList", route_title: "List apps"});
                            }}>

                        </i>
                        {/* <i className='fas fa-info-circle'></i> */}
                        <i className='fas fa-pencil-alt'onClick = {(e) => {
                                // sendPostReq(e, {nodeid: element["nodeid"]}, update_endpoint); 
                                setnodeinfo({nodeid: element["nodeid"], data:{ name: element["name"], description: element["description"]}});
                                setroutes({ route: "AppsUpdate", route_title: "Update app"});
                            }}>

                        </i>
                    </div>
                )
            });


            form = 
                <Fragment>
                    <div className = "table" id ="table">
                        <div className = "table_titles" id = "table_titles">
                            {titles}
                        </div>
                        <div className = "table_rows" id = "table_rows">
                            {rows}
                        </div>

                    </div>
                </Fragment>
            ;
            
            setTimeout(() => {
                document.getElementById("table").classList.add("show");
            }, 500);

            break
        case "Update":
                const {name, description} = node.data;
                endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/update";
                form =
                <Fragment>
                    <form id="form" className='form' onSubmit={(e) => {sendPostReq(e, node, endpoint)}}>
                        <div className = "input-row">
                            <div className = "input-group">
                                <label>Name</label>
                                <input
                                    type = "text"
                                    name = "name"
                                    className = "u-full-width input"
                                    onChange = { (e) => {handleChange(e, 'node')} }
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
                                    onChange = { (e) => {handleChange(e, 'node')} }
                                    value = { description }
                                ></textarea>
                            </div>
                        </div>
                        
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(node)) ? 'show': ''}
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