import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import './menu.scss';

const Menu = ({route, setroute}) => {

const handleToggle = e =>{
    if(!e.target.nextElementSibling.classList.contains('show')){
        e.target.nextElementSibling.classList.add('show');
    }else{
        e.target.nextElementSibling.classList.remove('show');
    }
}

    return ( 
        <Fragment>
            <ul className="primary_li">
                <li>
                    <h3 onClick={ handleToggle } >Apps <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroute("AppsCreate") }><h4>Create</h4></li>
                        <li onClick={ () => setroute("AppsList") }><h4>List</h4></li>
                        <li onClick={ () => setroute("AppsDetails") }><h4>Details</h4></li>
                        <li onClick={ () => setroute("AppsDelete") }><h4>Delete</h4></li>
                        <li onClick={ () => setroute("AppsUpdate") }><h4>Update</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } >Groups <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroute("GroupsCreate") }><h4>Create</h4></li>
                        <li onClick={ () => setroute("GroupsList") }><h4>List</h4></li>
                        <li onClick={ () => setroute("GroupsDetails") }><h4>Details</h4></li>
                        <li onClick={ () => setroute("GroupsDelete") }><h4>Delete</h4></li>
                        <li onClick={ () => setroute("GroupsUpdate") }><h4>Update</h4></li>
                        <li onClick={ () => setroute("GroupsAdd") }><h4>Add user</h4></li>
                        <li onClick={ () => setroute("GroupsRemove") }><h4>Remove user</h4></li>
                        <li onClick={ () => setroute("GroupsList") }><h4>List users</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } >Roles <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroute("RolesCreate") }><h4>Create</h4></li>
                        <li onClick={ () => setroute("RolesList") }><h4>List</h4></li>
                        <li onClick={ () => setroute("RolesDetails") }><h4>Details</h4></li>
                        <li onClick={ () => setroute("RolesDelete") }><h4>Delete</h4></li>
                        <li onClick={ () => setroute("RolesAddRole") }><h4>Add role to group</h4></li>
                        <li onClick={ () => setroute("RolesRemoveRole") }><h4>Remove role to group</h4></li>
                        <li onClick={ () => setroute("RolesGivePermission") }><h4>Give permission to role</h4></li>
                        <li onClick={ () => setroute("RolesRemovePermission") }><h4>Remove permission to role</h4></li>
                        <li onClick={ () => setroute("RolesList") }><h4>List permissions from role</h4></li>
                        <li onClick={ () => setroute("RolesAddUser") }><h4>Add role to user</h4></li>
                        <li onClick={ () => setroute("RolesRemoveUser") }><h4>Remove role to user</h4></li>
                        <li onClick={ () => setroute("RolesListUser") }><h4>List users associated to role</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } > Permissions <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroute("PermissionsCreate") }><h4>Create</h4></li>
                        <li onClick={ () => setroute("PermissionsList") }><h4>List</h4></li>
                        <li onClick={ () => setroute("PermissionsDetails") }><h4>Details</h4></li>
                        <li onClick={ () => setroute("PermissionsDelete") }><h4>Delete</h4></li>
                        <li onClick={ () => setroute("PermissionsUpdate") }><h4>Update</h4></li>
                        <li onClick={ () => setroute("PermissionsGive") }><h4>Give permission to user</h4></li>
                        <li onClick={ () => setroute("PermissionsRemove") }><h4>Remove permission to user</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } > Users <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroute("UsersCreate") }><h4>Create</h4></li>
                        <li onClick={ () => setroute("UsersList") }><h4>List</h4></li>
                        <li onClick={ () => setroute("UsersDetails") }><h4>Details</h4></li>
                        <li onClick={ () => setroute("UsersDelete") }><h4>Delete</h4></li>
                        <li onClick={ () => setroute("UsersUpdate") }><h4>Update</h4></li>
                        <li onClick={ () => setroute("UsersRese") }><h4>Reset password</h4></li>
                        <li onClick={ () => setroute("UsersAuthenticate") }><h4>Authenticate</h4></li>
                    </ul>
                </li>
                               
            </ul>
        </Fragment>
     );
}
 
export default Menu;