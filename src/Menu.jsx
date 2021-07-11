import * as React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';
import { Divider } from '@material-ui/core';

export const Menu = ({ onMenuClick, open }) => {
    const resources = useSelector(getResources);
    return (
        <div>
            <MenuItemLink to="/home" primaryText="Home" leftIcon={<HomeIcon/>}/>
            <Divider/>
            {resources.map(resource => (
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
            ))}
        </div>
    );
};
