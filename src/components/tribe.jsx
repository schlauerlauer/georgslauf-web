import React from 'react'
import { TextInput, NumberField, SelectInput, ReferenceInput, ReferenceField, NumberInput, DateTimeInput, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const TribeTitle = ({ record }) => {
    return <span>Tribe {record ? `"${record.name}"` : ''}</span>;
}

export const TribeList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name"/>
            <TextField source="short"/>
            <ReferenceField label="Login" source="LoginID" reference="logins">
                <TextField optionText="username"/>
            </ReferenceField>
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
            <ReferenceInput label="Login" source="LoginID" reference="logins">
                <SelectInput optionText="username"/>
            </ReferenceInput>
            <TextInput type="url" label="Website" source="url"/>
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
            <TextInput type="url" label="Website" source="url"/>
            <ReferenceInput label="Login" source="LoginID" reference="logins">
                <SelectInput optionText="username"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
