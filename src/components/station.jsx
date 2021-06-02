import React from 'react'
import { Create, ReferenceInput, SelectInput, List, EditButton, Datagrid, TextField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput} from 'react-admin';

const StationTitle = ({ record }) => {
    return <span>Station {record ? `"${record.name}"` : ''}</span>;
}

export const StationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="short" />
            <NumberField source="size" />
            <ReferenceField source="TribeID" label="Tribe" reference="tribes">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="LoginID" label="Login" reference="logins">
                <TextField source="username" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const StationEdit = props => (
    <Edit title={<StationTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short" />
            <NumberInput source="size" />
            <ReferenceInput label="Tribe" source="TribeID" reference="tribes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Login" source="LoginID" reference="logins">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput disabled source="id" />
            <DateTimeInput disabled source="CreatedAt" />
            <DateTimeInput disabled source="UpdatedAt" />
        </SimpleForm>
    </Edit>
);

export const StationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short" />
            <NumberInput source="size" />
            <ReferenceInput label="Tribe" source="TribeID" reference="tribes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Login" source="LoginID" reference="logins">
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
