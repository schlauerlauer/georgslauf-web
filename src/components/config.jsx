import React from 'react'
import { Create, List, BooleanField, BooleanInput, Datagrid, TextField, NumberField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput} from 'react-admin';

const ConfigTitle = ({ record }) => {
    return <span>Config {record ? `"${record.name}"` : ''}</span>;
}

export const ConfigList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name"/>
            <BooleanField label="Value Boolean" source="valueb"/>
        </Datagrid>
    </List>
);

export const ConfigEdit = props => (
    <Edit title={<ConfigTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <BooleanInput label="Value Boolean" source="valueb"/>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const ConfigCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <BooleanInput label="Value Boolean" source="valueb"/>
        </SimpleForm>
    </Create>
);
