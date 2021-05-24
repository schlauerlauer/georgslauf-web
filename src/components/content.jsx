import React from 'react'
import { DateField, TextInput, NumberField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const ContentTitle = ({ record }) => {
    return <span>Content {record ? `"${record.title}"` : ''}</span>;
}

export const ContentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <DateField showTime source="UpdatedAt"/>
            <TextField source="title"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const ContentEdit = props => (
    <Edit title={<ContentTitle />} {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="body"/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const ContentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Create>
);