import React from 'react'
import { List, DateField, Datagrid, TextField } from 'react-admin';

export const TribeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="createdat" />
            <DateField source="updatedat" />
            <TextField source="name" />
        </Datagrid>
    </List>
);