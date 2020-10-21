import React, { Fragment, useState } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendPostReq } from '../../util/send_req';


const Groups = ( { service } ) => {
    // var parse = require('html-react-parser');
    // parse(form)
    var form = null;
    var endpoint = "";
    var arrayOfOptionValues = null;

    const [group, setgroupinfo] = useState({
        name:'',
        description:'',
        roles:[],
        nodeid: ''
    });

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
        setgroupinfo({
            ...group,
            [e.target.name]: value,
        })
    }
    
    const { name, description, roles, nodeid } = group;

    // var groups = {
    //     "name": "groupname",
    //     "description": "Grupo de usuarios que se utilizan en el nodo.",
    //     "roles": [
    //       "id1",
    //       "id2"
    //     ],
    //     "nodeid": "123"
    //   };
    

    switch (service){
        case "Create":
            endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/rights/group/create";
            form =
                <Fragment>
                    <form id = "form" className='form' onSubmit={(e) => {sendPostReq(e, group, endpoint)}}>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Name</label>
                            <input
                                type = "text"
                                name = "name"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "Group name"
                                value = { name }
                            />
                        </div>
                        <div className = "input-group">
                            <label>Node ID</label>
                            <input
                                type = "text"
                                name = "nodeid"
                                className = "u-full-width"
                                onChange = { handleChange }
                                placeholder = "232400"
                                value = { nodeid }
                            />
                        </div>
                    </div>
                    <div className = "input-row">
                        <div className = "input-group">
                            <label>Roles</label>
                            <select name = "roles" multiple={true} value = { roles } onChange={handleChange}>
                                <option value={'f'}>First option</option>
                                <option value={'s'}>Second option</option>
                                <option value={'t'}>Third option</option>
                            </select>
                        </div>
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
        default :
            service = 1;
            break
    }
    
    return ( form );
}
 
export default Groups;