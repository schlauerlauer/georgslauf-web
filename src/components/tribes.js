import React from 'react'
import { TextInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, DateField, Datagrid, TextField } from 'react-admin';

const TribeTitle = ({ record }) => {
    return <span>Tribe {record ? `"${record.name}"` : ''}</span>;
}

export const TribeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField showTime source="CreatedAt" />
            <DateField showTime source="UpdatedAt" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TribeEdit = props => (
    <Edit title={<TribeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput disabled source="id" />
            <DateTimeInput disabled source="CreatedAt" />
            <DateTimeInput disabled source="UpdatedAt" />
        </SimpleForm>
    </Edit>
);

export const TribeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);