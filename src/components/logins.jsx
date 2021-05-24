import React from 'react'
import { Create, ReferenceInput, BooleanField, BooleanInput, SelectInput, List, EditButton, Datagrid, TextField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput, PasswordInput} from 'react-admin';

const LoginTitle = ({ record }) => {
    return <span>Login {record ? `"${record.username}"` : ''}</span>;
}

export const LoginList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="username"/>
            <TextField type="email" source="email"/>
            <ReferenceField source="RoleID" label="Role" reference="roles">
                <TextField source="name" />
            </ReferenceField>
            <BooleanField source="active"/>
            <BooleanField source="confirmed"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const LoginEdit = props => (
    <Edit title={<LoginTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="username"/>
            <TextInput type="email" source="email"/>
            <PasswordInput source="password"/>
            <BooleanInput initialValue="True" source="reset"/>
            <BooleanInput initialValue="True" source="active"/>
            <BooleanInput source="confirmed"/>
            <ReferenceInput source="RoleID" label="Role" reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Contact name" source="contact"/>
            <TextInput label="Phone number" source="phone"/>
            <PasswordInput disabled source="salt"/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const LoginCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username"/>
            <TextInput type="email" source="email"/>
            <PasswordInput source="password"/>
            <BooleanInput initialValue="True" source="reset"/>
            <BooleanInput initialValue="True" source="active"/>
            <BooleanInput source="confirmed"/>
            <ReferenceInput source="RoleID" label="Role" reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Contact name" source="contact"/>
            <TextInput label="Phone number" source="phone"/>
        </SimpleForm>
    </Create>
);