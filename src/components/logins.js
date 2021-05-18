import React from 'react'
import { TextInput, ReferenceField, ReferenceInput, SelectInput, NumberField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const LoginTitle = ({ record }) => {
    return <span>Login {record ? `"${record.name}"` : ''}</span>;
}

export const LoginList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="password" />
            <ReferenceField source="RoleID" label="Role" reference="roles">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const LoginEdit = props => (
    <Edit title={<LoginTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="password" />
            <ReferenceInput label="Role" source="RoleID" reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput disabled source="id" />
            <DateTimeInput disabled source="CreatedAt" />
            <DateTimeInput disabled source="UpdatedAt" />
        </SimpleForm>
    </Edit>
);

export const LoginCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="password" />
            <ReferenceInput label="Role" source="RoleID" reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);