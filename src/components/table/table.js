import React, { Fragment } from 'react';
import { sendPostReq } from '../../util/send_req';
import { sleep } from '../../util/sleep';
import { toUpperFirst } from '../../util/to_uppercase_first';


const Table = ({data, node, setroutes, func, refresh, refreshname, ttitle, ttitles, extradata}) => {
    // debugger
    // var table = {};
    
    var endpointpri = window.localStorage.getItem("endpointpri");
    var titles  = [];
    var rows = [];
    var arr_titles = [];
    var propid = "";
    var title = null;
    var cell = null;
    var width = 0;
    var delete_endpoint = "";
    // var update_endpoint = "";
    var singular_table_name = "";
    var plural_table_name = "";
    var table = null;
    var info = null;

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

    setTimeout(() => {
        console.log('exe');
        if (parseInt(window.localStorage.getItem("timesexecuted")) === 0){
            setroutes({ route: "Settings", route_title: "App Settings" });
            window.localStorage.setItem("timesexecuted", "1");
        }
    }, 2000);


    if(data.includes("group")){
        propid = "groupid";
        delete_endpoint = endpointpri +"/api/node/rights/group/delete"; 
        // update_endpoint = endpointpri +"/api/node/rights/group/update"; 
    }else if(data.includes("role")){
        propid = "roleid";
        delete_endpoint = endpointpri +"/api/node/rights/role/delete"; 
        // update_endpoint = endpointpri +"/api/node/rights/role/update"; 
    }else if(data.includes("permission")){
        propid = "permissionid";
        delete_endpoint = endpointpri +"/api/node/rights/permission/delete"; 
        // update_endpoint = endpointpri +"/api/node/rights/permission/update"; 
    }else if(data.includes("usersfromrl")){
        debugger
        propid = "ruserid";
        delete_endpoint = endpointpri +"/api/node/rights/role/removefromouser"; 
        // update_endpoint = endpointpri +"/api/node/rights/permission/update"; 
    }else if(data.includes("user")){
        debugger
        propid = "userid";
        delete_endpoint = endpointpri +"/api/node/rights/role/addtouser"; 
        // update_endpoint = endpointpri +"/api/node/rights/permission/update"; 
    }
    singular_table_name = toUpperFirst(propid.substr(0, propid.length-2));
    plural_table_name = toUpperFirst(propid.substr(0, propid.length-2))+ "s";
    // sleep(1000);
    info = JSON.parse(window.localStorage.getItem(data));
    if(info !== null && info !== undefined && info.length > 0){

        arr_titles = Object.keys(info[0]);
        arr_titles.splice(arr_titles.indexOf(propid),1)
        arr_titles.forEach(e => {
            titles.push(<h5 key = {`${propid}t${e}`}>{toUpperFirst(e)}</h5>);
        });
        titles.push(<h5 key = {`${propid}act`}>Actions</h5>);
    // }
    
        info.forEach(element => {

            arr_titles.forEach(prop => {
                rows.push(<div key = {`${propid}tc${element[prop]}`} >{element[prop]}</div>);
            });

            switch (propid) {
                case "groupid":
                    rows.push(
                        <div key = {`${propid}act${element["name"]}`} className = "actions">
                            <i className='fas fa-trash-alt' 
                                onClick = {(e) => {
                                    sendPostReq(e, {nodeid: node, [propid]:element[propid]}, delete_endpoint); 
                                    setTimeout(() => {
                                        setroutes({ route: "Settings", route_title: "App Settings"});
                                    }, 500);
                                }}>
        
                            </i>
                            <i className='fas fa-pencil-alt'onClick = {(e) => {
                                debugger
                                func({nodeid: node, [propid]: element[propid], name: element["name"], description: element["description"], roles: element["roles"]});
                                      
                                // sendPostReq(e, {nodeid: element["nodeid"]}, update_endpoint); 
                                // setnodeinfo({nodeid: element["nodeid"], data:{ name: element["name"], description: element["description"]}});
                                setroutes({ route: plural_table_name+"Update", route_title: "Update"+singular_table_name});
                            }}>
        
                            </i>
                                <i className="fas fa-users" onClick={ () => {
                                    func({nodeid: node, [propid]: element[propid]});
                                    // func({nodeid: node, [propid]: element[propid]});
                                    setroutes({ route: "UsersList", route_title: "List Users"}); 
                                }}>
                            </i>
        
                        </div>
                    )
                    break;
                case "permissionid":
                    rows.push(
                        <div key = {`${propid}act${element["permissiondata"]}`} className = "actions">
                            <i className='fas fa-trash-alt' 
                                onClick = {(e) => {
                                    sendPostReq(e, {nodeid: node, [propid]:[element[propid]]}, delete_endpoint);
                                    setTimeout(() => {
                                        setroutes({ route: "Settings", route_title: "App Settings"});
                                    }, 500);
                                }}>
        
                            </i>
                            <i className='fas fa-pencil-alt'onClick = {(e) => {
                                debugger
                                func({nodeid: node, [propid]: element[propid], permissiondata: element["permissiondata"], description: element["description"]});
                                // sendPostReq(e, {nodeid: element["nodeid"]}, update_endpoint); 
                                // setnodeinfo({nodeid: element["nodeid"], data:{ name: element["name"], description: element["description"]}});
                                setroutes({ route: plural_table_name+"Update", route_title: "Update"+singular_table_name});
                            }}>
        
                            </i>
                                <i className="fas fa-user-plus" onClick={ () => {
                                    setroutes({ route: "UsersList", route_title: "List Users"}); 
                                }}>
                            </i>
        
                        </div>
                    )
                    break;
                case "roleid":
                    rows.push(
                        <div key = {`${propid}act${element["name"]}`} className = "actions">
                            <i className='fas fa-trash-alt' 
                                onClick = {(e) => {
                                    sendPostReq(e, {nodeid: node, [propid]:element[propid]}, delete_endpoint);
                                    setTimeout(() => {
                                        setroutes({ route: "Settings", route_title: "App Settings"});
                                    }, 500);
                                }}>
        
                            </i>
                            <i className='fas fa-pencil-alt'onClick = {(e) => {
                                debugger
                                func({nodeid: node, [propid]: element[propid], name: element["name"], description: element["description"]});
                                // sendPostReq(e, {nodeid: element["nodeid"]}, update_endpoint); 
                                // setnodeinfo({nodeid: element["nodeid"], data:{ name: element["name"], description: element["description"]}});
                                setroutes({ route: plural_table_name+"Update", route_title: "Update"+singular_table_name});
                            }}>
        
                            </i>
                            <i className="fas fa-tools" onClick={ () => {
                                window.localStorage.setItem("roleid", element[propid]);
                                window.localStorage.setItem("timesexecuted", "0");
                                sendGetReq(endpointpri+"/api/node/rights/role/listuser", "usersfromrl", {nodeid:node, data:{roleid:element[propid]}});
                                sendGetReq(endpointpri+"/api/node/user/list", "users",{});
                                sleep(500);
                                setroutes({ route: "RolesSettings", route_title: "Role Settings"}); 
                            }}>
                            </i>
        
                        </div>
                    )
                    break;
                case "userid":
                    rows.push(
                        <div key = {`${propid}act${element["id"]}`} className = "actions">
                             <i className='fas fa-user-plus' 
                                onClick = {(e) => {
                                    window.localStorage.setItem("timesexecuted", "0");
                                    sendPostReq(e, {nodeid: node, roleid:[extradata], userid:[element["userid"]]}, delete_endpoint); 
                                    setroutes({ route: "Settings", route_title: "App Settings"});
                                    // setTimeout(() => {
                                    // }, 500);
                                }}>
        
                            </i>
        
                        </div>
                    )
                    break;
                case "ruserid":
                    rows.push(
                        <div key = {`${propid}act${element["id"]}`} className = "actions">
                            <i className='fas fa-user-minus' 
                                onClick = {(e) => {
                                     sendPostReq(e, {nodeid: node, roleid:[extradata], userid:[element["id"]]}, delete_endpoint); 
                                    setTimeout(() => {
                                        setroutes({ route: "Settings", route_title: "App Settings"});
                                    }, 500);
                                }}>
        
                            </i>
        
                        </div>
                    )
                    break;
                
                    default:
                    break;
            }



        });

        
        
        table = 
            <Fragment>
                <div className = "table" id = {`${propid}table`}>
                    <div className = "table_header">
                        <h4 className = "ttitle">{ ttitle }</h4>
                        <div className = "tabactions">
                            <i 
                                className="fas fa-sync"
                                onClick={ () => {
                                    
                                    window.localStorage.setItem("timesexecuted", "0");
                                    while(rows.length >0 ){
                                        rows.pop(); 
                                    }
                                    rows.pop(); 
                                    setroutes({ route: refresh, route_title: refreshname })}
                                }
                            ></i>

                            <i 
                                className="fas fa-plus-circle" 
                                onClick={ () => setroutes({ route: plural_table_name+"Create", route_title: "Create "+ singular_table_name})}
                            ></i>
                        </div>
                    </div>
                    <div className = "table_titles" id = {`${propid}table_titles`}>
                        {titles}
                    </div>
                    <div className = "table_rows" id = {`${propid}table_rows`}>
                        {rows}
                    </div>

                </div>
            </Fragment>
        ;
    }else{
        arr_titles = ttitles;
        arr_titles.forEach(e => {
            titles.push(<h5 key = {`${propid}t${e}`}>{toUpperFirst(e)}</h5>);
        });
        titles.push(<h5 key = {`${propid}act`}>Actions</h5>);

        table = 
            <Fragment>
                <div className = "table" id = {`${propid}table`}>
                    <div className = "table_header">
                        <h4 className = "ttitle">{ ttitle }</h4>
                        <div className = "tabactions">
                            <i 
                                className="fas fa-sync"
                                onClick={ () => {
                                    window.localStorage.setItem("timesexecuted", "0");
                                    while(rows.length >0 ){
                                        rows.pop(); 
                                    }
                                    rows.pop(); 
                                    setroutes({ route: refresh, route_title: refreshname })}
                                }
                            ></i>

                            <i 
                                className="fas fa-plus-circle" 
                                onClick={ () => setroutes({ route: plural_table_name+"Create", route_title: "Create "+ singular_table_name})}
                            ></i>
                        </div>
                    </div>
                    <div className = "table_titles" id = {`${propid}table_titles`}>
                        {titles}
                    </div>
                    <div className = "table_rows" id = {`${propid}table_rows`}>
                    </div>

                </div>
            </Fragment>
        ;

    }
    setTimeout(() => {
        document.getElementById(propid+"table").classList.add("show");
        title = document.getElementById(propid+"table_titles").children;
        cell = document.getElementById(propid+"table_rows").children;
        if (title.length !== 4){
            switch(title.length){
                case 1:
                    width = 500;
                    break
                case 2:
                    width = 400;
                    break
                case 3:
                    width = 300;
                    break
                case 5:
                    width = 200;
                    break
                default:
                    width = 250;
                    break
            }
            for (let i = 0; i < title.length; i++) {
                const element = title[i];
                element.style.width = width + "px";
            }
            for (let i = 0; i < cell.length; i++) {
                const element = cell[i];
                element.style.width = width + "px";
            }
        }
    }, 500);
    
    return (
        <Fragment>
            {table}
        </Fragment>
    )
}
 
export default Table;