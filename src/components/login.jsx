import React from 'react'
import { Create, BooleanField, BooleanInput, List, Datagrid, TextField, NumberField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput, PasswordInput} from 'react-admin';

const LoginTitle = ({ record }) => {
    return <span>Login {record ? `"${record.username}"` : ''}</span>;
}

export const LoginList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="username"/>
            <TextField type="email" source="email"/>
            <BooleanField source="active"/>
            <BooleanField source="confirmed"/>
        </Datagrid>
    </List>
);

export const LoginEdit = props => (
    <Edit title={<LoginTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="username"/>
            <TextInput type="email" source="email"/>
            <PasswordInput source="password"/>
            <BooleanInput label="Update Password" source="updatepw"/>
            <BooleanInput disabled source="reset"/>
            <BooleanInput disabled source="active"/>
            <BooleanInput disabled source="confirmed"/>
            <TextInput label="Contact name" source="contact"/>
            <TextInput label="Phone number" source="phone"/>
            <TextInput label="Avatar URL" type="url" source="avatar"/>
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
            <BooleanInput disabled source="reset"/>
            <BooleanInput disabled source="active"/>
            <BooleanInput disabled source="confirmed"/>
            <TextInput label="Contact name" source="contact"/>
            <TextInput label="Phone number" source="phone"/>
            <TextInput type="url" label="Avatar URL" source="avatar"/>
        </SimpleForm>
    </Create>
);
