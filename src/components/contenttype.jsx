import React from 'react'
import { DateField, TextInput, ShowButton, ReferenceInput, SelectInput, NumberField, ReferenceField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';
import { ListButton } from 'react-admin';

const ContentTypeTitle = ({ record }) => {
    return <span>ContentType {record ? `"${record.name}"` : ''}</span>;
}

export const ContentTypeList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <DateField showTime source="CreatedAt"/>
            <TextField source="name"/>
        </Datagrid>
    </List>
);

export const ContentTypeEdit = props => (
    <Edit title={<ContentTypeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" inputProps={{ maxLength: 100 }}/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const ContentTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" inputProps={{ maxLength: 100 }}/>
        </SimpleForm>
    </Create>
);
