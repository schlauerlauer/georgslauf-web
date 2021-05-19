import React from 'react'
import { TextInput, NumberField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const TribeTitle = ({ record }) => {
    return <span>Tribe {record ? `"${record.name}"` : ''}</span>;
}

export const TribeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="short" />
            <TextField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TribeEdit = props => (
    <Edit title={<TribeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short" />
            <TextInput source="email" />
            <NumberInput disabled source="id" />
            <DateTimeInput disabled source="CreatedAt" />
            <DateTimeInput disabled source="UpdatedAt" />
        </SimpleForm>
    </Edit>
);

export const TribeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);