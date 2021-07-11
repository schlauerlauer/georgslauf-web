import React from 'react';
import { sanitizeButtonRestProps } from 'ra-ui-materialui/lib/button/Button';
import { connect } from 'react-redux';
import { Responsive, userLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const MyLogoutButton = ({ userLogout, ...rest }) => (
    <Responsive
        xsmall={
            <MenuItem
                onClick={userLogout}
                {...sanitizeButtonRestProps(rest)}
            >
                <ExitIcon /> Logout
            </MenuItem>
        }
        medium={
            <Button
                onClick={userLogout}
                size="small"
                {...sanitizeButtonRestProps(rest)}
            >
                <ExitIcon /> Logout
            </Button>
        }
    />
);
const redirectTo = '/login';
const myCustomUserLogout = () => userLogout(redirectTo);
export default connect(undefined, { userLogout: myCustomUserLogout })(MyLogoutButton);
