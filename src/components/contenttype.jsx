import React from 'react'
import { TextInput, NumberField, BooleanInput, BooleanField, NumberInput, DateTimeInput, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const ContentTypeTitle = ({ record }) => {
    return <span>ContentType {record ? `"${record.name}"` : ''}</span>;
}

export const ContentTypeList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name"/>
            <BooleanField source="public"/>
        </Datagrid>
    </List>
);

export const ContentTypeEdit = props => (
    <Edit title={<ContentTypeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" inputProps={{ maxLength: 100 }}/>
            <BooleanInput source="public"/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const ContentTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput required source="name" inputProps={{ maxLength: 100 }}/>
            <BooleanInput source="public"/>
        </SimpleForm>
    </Create>
);
