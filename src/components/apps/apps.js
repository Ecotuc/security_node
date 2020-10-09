import React, { Fragment, useState } from 'react'

import Button from '../button/button';
import { showsubmitbutton } from '../../util/show_submit_button';
import { sendApp } from '../../util/send_app';


const Apps = ( { service } ) => {
    // var parse = require('html-react-parser');
    // parse(form)
    var form = null;
    var endpoint ="";

    const [app, setappinfo] = useState({
        name:'',
        description:''
    });

    const handleChange = e => {
        setappinfo({
            ...app,
            [e.target.name]: e.target.value,
        })
    }

    

    switch (service){
        case "Create":
            endpoint = "https://private-aa280a-igsoftwaremoduloseguridad.apiary-mock.com/api/node/create";
            form =
                <Fragment>
                    <form className='form' onSubmit={(e) => {sendApp(e, JSON.stringify(app), endpoint)}}>
                        <label>Name</label>
                        <input
                            type = "text"
                            name = "name"
                            className = "u-full-width"
                            onChange = { handleChange }
                            placeholder = "App name"
                        />
                        <label>Description</label>
                        <textarea
                            type = "text"
                            name = "description"
                            className = "u-full-width"
                            onChange = { handleChange }
                        ></textarea>
                        <Button 
                            text = { service }
                            className= {showsubmitbutton(Object.values(app)) ? 'show': ''}
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