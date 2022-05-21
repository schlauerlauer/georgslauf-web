import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Divider, Typography } from '@material-ui/core';
import authProvider from './authProvider';

export const Menu = ({ onMenuClick, open }) => {
    const resources = useSelector(getResources);

    const [tmpRole, setTmpRole] = useState();

    authProvider.getPermissions().then(
        ({role}) => {
            setTmpRole(role);
        }
    );
    return (
        <div>
            <MenuItemLink to="/home" primaryText="Home" leftIcon={<HomeIcon/>}/>

            {[
                // tmpRole === "admin"
                // ? [
                //     <MenuItemLink to="/test" primaryText="Test" leftIcon={<HomeIcon/>}/>,
                // ]
                // : null,
                tmpRole === "public"
                ? [
                    // <MenuItemLink to="/test" primaryText="Public" leftIcon={<HomeIcon/>}/>,
                    <MenuItemLink to="/login" primaryText="Login" leftIcon={<ExitToAppIcon/>}/>,
                ]
                : null,
            ]}
            <Divider style={{ marginTop: "0.5rem" }}/>
            {resources.map(resource => (
                <>
                    {!!resource.options.header && (
                        <Typography style={{ marginTop: "0.75rem", marginBottom: "0.5rem", marginLeft: "0.5rem" }} paragraph>{resource.options.header}</Typography>
                    )}
                    <MenuItemLink
                        key={resource.name}
                        to={`/${resource.name}`}
                        primaryText={
                            (resource.options && resource.options.label) ||
                            resource.name
                        }
                        leftIcon={
                            resource.icon ? <resource.icon /> : <DefaultIcon />
                        }
                        onClick={onMenuClick}
                        sidebarIsOpen={open}
                    />
                    {!!resource.options.divider && (
                        <Divider style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}/>
                    )}
                </>
            ))}
        </div>
    );
};
