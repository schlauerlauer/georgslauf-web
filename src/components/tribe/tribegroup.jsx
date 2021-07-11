import React from 'react'
import { Create, ReferenceInput, SelectInput, List, Datagrid, TextField, DateField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput} from 'react-admin';

const TribeStTitle = ({ record }) => {
    return <span>Station {record ? `"${record.name}"` : ''}</span>;
}

export const TribeGroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="short" />
            <TextField source="group" />
            <NumberField source="size" />
            <TextField source="tribe" />
            <NumberField source="tribe_login" />
        </Datagrid>
    </List>
);
