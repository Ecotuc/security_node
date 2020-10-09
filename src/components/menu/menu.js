import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import './menu.scss';

const Menu = ({routes, setroutes}) => {

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
                        <li onClick={ () => setroutes({ route: "AppsCreate", route_title: "Create app"}) }><h4>Create</h4></li>
                        <li onClick={ () => setroutes({ route: "AppsList", route_title: "List apps"}) }><h4>List</h4></li>
                        <li onClick={ () => setroutes({ route: "AppsDetails", route_title: "App details"}) }><h4>Details</h4></li>
                        <li onClick={ () => setroutes({ route: "AppsDelete", route_title: "Delete app"}) }><h4>Delete</h4></li>
                        <li onClick={ () => setroutes({ route: "AppsUpdate", route_title: "Update app"}) }><h4>Update</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } >Groups <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroutes({ route: "GroupsCreate", route_title: "Create group"}) }><h4>Create</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsList", route_title: "List groups"}) }><h4>List</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsDetails", route_title: "Group details"}) }><h4>Details</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsDelete", route_title: "Delete group"}) }><h4>Delete</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsUpdate", route_title: "Update group"}) }><h4>Update</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsAdd", route_title: "Add user to group"}) }><h4>Add user</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsRemove", route_title: "Remove user from group"}) }><h4>Remove user</h4></li>
                        <li onClick={ () => setroutes({ route: "GroupsList", route_title: "List users of group"}) }><h4>List users</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } >Roles <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroutes({ route: "RolesCreate", route_title: "Create role"}) }><h4>Create</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesList", route_title: "List roles"}) }><h4>List</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesDetails", route_title: "Role details"}) }><h4>Details</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesDelete", route_title: "Delete role"}) }><h4>Delete</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesAddRole", route_title: "Add role to group"}) }><h4>Add role to group</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesRemoveRole", route_title: "Remove role from group"}) }><h4>Remove role to group</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesGivePermission", route_title: "Give permission to role"}) }><h4>Give permission to role</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesRemovePermission", route_title: "Remove permission to role"}) }><h4>Remove permission to role</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesList", route_title: "List permissions from role"}) }><h4>List permissions from role</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesAddUser", route_title: "Add role to user"}) }><h4>Add role to user</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesRemoveUser", route_title: "Remove role to user"}) }><h4>Remove role to user</h4></li>
                        <li onClick={ () => setroutes({ route: "RolesListUser", route_title: "List users associated to role"}) }><h4>List users associated to role</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } > Permissions <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroutes({ route: "PermissionsCreate", route_title: "Create permission"}) }><h4>Create</h4></li>
                        <li onClick={ () => setroutes({ route: "PermissionsList", route_title: "List permissions"}) }><h4>List</h4></li>
                        <li onClick={ () => setroutes({ route: "PermissionsDetails", route_title: "permission details"}) }><h4>Details</h4></li>
                        <li onClick={ () => setroutes({ route: "PermissionsDelete", route_title: "Delete permission"}) }><h4>Delete</h4></li>
                        <li onClick={ () => setroutes({ route: "PermissionsUpdate", route_title: "Update permission"}) }><h4>Update</h4></li>
                        <li onClick={ () => setroutes({ route: "PermissionsGive", route_title: "Give permission to user"}) }><h4>Give permission to user</h4></li>
                        <li onClick={ () => setroutes({ route: "PermissionsRemove", route_title: "Remove permission to user"}) }><h4>Remove permission to user</h4></li>
                    </ul>
                </li>
                <li>
                    <h3 onClick={ handleToggle } > Users <FontAwesomeIcon icon={faAngleRight}/></h3> 
                    <ul className="second_li">
                        <li onClick={ () => setroutes({ route: "UsersCreate", route_title: "Create user"}) }><h4>Create</h4></li>
                        <li onClick={ () => setroutes({ route: "UsersList", route_title: "List users"}) }><h4>List</h4></li>
                        <li onClick={ () => setroutes({ route: "UsersDetails", route_title: "User details"}) }><h4>Details</h4></li>
                        <li onClick={ () => setroutes({ route: "UsersDelete", route_title: "Delete user"}) }><h4>Delete</h4></li>
                        <li onClick={ () => setroutes({ route: "UsersUpdate", route_title: "Update user"}) }><h4>Update</h4></li>
                        <li onClick={ () => setroutes({ route: "UsersRese", route_title: "Reset password"}) }><h4>Reset password</h4></li>
                        <li onClick={ () => setroutes({ route: "UsersAuthenticate", route_title: "Authenticate user"}) }><h4>Authenticate</h4></li>
                    </ul>
                </li>
                               
            </ul>
        </Fragment>
     );
}
 
export default Menu;