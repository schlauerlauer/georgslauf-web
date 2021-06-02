import React from 'react'
import { TextInput, NumberField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const RoleTitle = ({ record }) => {
    return <span>Role {record ? `"${record.name}"` : ''}</span>;
}

export const RoleList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name"/>
            <TextField source="short"/>
        </Datagrid>
    </List>
);

export const RoleEdit = props => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short"/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const RoleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
        </SimpleForm>
    </Create>
);
