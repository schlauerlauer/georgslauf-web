import React from 'react'
import { TextInput, NumberField, SelectInput, ReferenceInput, ReferenceField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField, PasswordInput } from 'react-admin';

const TribeTitle = ({ record }) => {
    return <span>Tribe {record ? `"${record.name}"` : ''}</span>;
}

export const TribeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name"/>
            <TextField source="short"/>
            <ReferenceField label="Role" source="RoleID" reference="roles">
                <TextField optionText="name" />
            </ReferenceField>
            <EditButton/>
        </Datagrid>
    </List>
);

export const TribeEdit = props => (
    <Edit title={<TribeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
            <TextInput label="DPSG ID" source="dpsg"/>
            <TextInput source="address"/>
            <ReferenceInput label="Role" source="RoleID" reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const TribeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
            <TextInput label="DPSG ID" source="dpsg"/>
            <TextInput source="address"/>
            <NumberField source="LoginID"/>
        </SimpleForm>
    </Create>
);