import React from 'react'
import { TextInput, NumberInput, DateTimeInput, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const GroupingTitle = ({ record }) => {
    return <span>Grouping {record ? `"${record.name}"` : ''}</span>;
}

export const GroupingList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="short"/>
        </Datagrid>
    </List>
);

export const GroupingEdit = props => (
    <Edit title={<GroupingTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const GroupingCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
        </SimpleForm>
    </Create>
);
