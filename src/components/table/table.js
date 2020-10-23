import React, { Fragment } from 'react';
import { sendPostReq } from '../../util/send_req';
import { toUpperFirst } from '../../util/to_uppercase_first';


const Table = ({data, node, setroutes, func}) => {
    // var table = {};
    var endpointpri = window.localStorage.getItem("endpointpri")+ "/api/node/rights/";
    var titles  = [];
    var rows = [];
    var arr_titles = [];
    var propid = "";
    var title = null;
    var cell = null;
    var width = 0;
    var delete_endpoint = "";
    var update_endpoint = "";
    var singular_table_name = "";
    var plural_table_name = "";

    if(data.includes("group")){
        propid = "groupid";
        delete_endpoint = endpointpri +"group/delete"; 
        update_endpoint = endpointpri +"group/update"; 
    }else if(data.includes("role")){
        propid = "roleid";
        delete_endpoint = endpointpri +"role/delete"; 
        update_endpoint = endpointpri +"role/update"; 
    }else if(data.includes("permission")){
        propid = "permissionid";
        delete_endpoint = endpointpri +"permission/delete"; 
        update_endpoint = endpointpri +"permission/update"; 
    }
    singular_table_name = toUpperFirst(propid.substr(0, propid.length-2));
    plural_table_name = toUpperFirst(propid.substr(0, propid.length-2))+ "s";
    data = JSON.parse(window.localStorage.getItem(data));
    arr_titles = Object.keys(data[0]);
    arr_titles.splice(arr_titles.indexOf(propid),1)
    arr_titles.forEach(e => {
        titles.push(<h5 key = {`${propid}t${e}`}>{toUpperFirst(e)}</h5>);
    });
    titles.push(<h5 key = {`${propid}act`}>Actions</h5>);
    
    data.forEach(element => {

        arr_titles.forEach(prop => {
            rows.push(<div key = {`${propid}tc${element[prop]}`} >{element[prop]}</div>);
        });
        rows.push(
            <div key = {`${propid}act${element[propid]}`} className = "actions">
                <i className='fas fa-trash-alt' 
                    onClick = {(e) => {
                        if(propid.includes("permission")){
                            sendPostReq(e, {nodeid: node, [propid]:[element[propid]]}, delete_endpoint);
                        }else{
                            sendPostReq(e, {nodeid: node, [propid]:element[propid]}, delete_endpoint); 
                        }
                        setroutes({ route: "Settings", route_title: "App Settings"});
                    }}>

                </i>
                <i className='fas fa-pencil-alt'onClick = {(e) => {
                    // sendPostReq(e, {nodeid: element["nodeid"]}, update_endpoint); 
                    func({nodeid: node, [propid]: element[propid], data:{ name: element["name"], description: element["description"], roles: element["roles"]}});
                    // setnodeinfo({nodeid: element["nodeid"], data:{ name: element["name"], description: element["description"]}});
                    setroutes({ route: "AppsUpdate", route_title: "Update app"});
                }}>

                </i>
                <i className="fas fa-tools" onClick={ () => {
                    // setnode(element["nodeid"]);
                    setroutes({ route: "Settings", route_title: "Settings"}); 
                }}>

                </i>
            </div>
        )
    });

    setTimeout(() => {
        document.getElementById(propid+"table").classList.add("show");
        title = document.getElementById(propid+"table_titles").children;
        cell = document.getElementById(propid+"table_rows").children;
        if (title.length !== 4){
            switch(title.length){
                case 2:
                    width = 350;
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
             <div className = "table" id = {`${propid}table`}>
                 <div className = "table_header">
                    <h4 className = "ttitle">{ plural_table_name }</h4>
                    <i 
                        class="fas fa-plus-circle" 
                        onClick={ () => setroutes({ route: plural_table_name+"Create", route_title: "Create "+ singular_table_name})}
                    ></i>
                 </div>
                <div className = "table_titles" id = {`${propid}table_titles`}>
                    {titles}
                </div>
                <div className = "table_rows" id = {`${propid}table_rows`}>
                    {rows}
                </div>

            </div>
        </Fragment>

    )
}
 
export default Table;