import React from 'react'
import { Show, SimpleShowLayout, DateField, RichTextField, List, Datagrid, TopToolbar, TextField } from 'react-admin';
import { NoListActions } from '../../customListActions';

export const PublicStationList = props => (
    <List {...props} bulkActionButtons={false} actions={<NoListActions/>}>
        <Datagrid rowClick="expand" expand={<PublicStationShow/>}>
            <TextField source="name" label="Posten"/>
            <TextField source="tribe" label="Stamm"/>
        </Datagrid>
    </List>
);

const PublicStationShow = (props) => (
    <Show {...props} title=" ">
        <SimpleShowLayout>
            <TextField source="name" label="Posten"/>
            <TextField source="short"/>
            <TextField source="tribe" label="Stamm"/>
        </SimpleShowLayout>
    </Show>
);
