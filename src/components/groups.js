import React from 'react'
import { Create, ReferenceInput, SelectInput, List, EditButton, Datagrid, TextField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput} from 'react-admin';

const GroupTitle = ({ record }) => {
    return <span>Group {record ? `"${record.name}"` : ''}</span>;
}

export const GroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="short" />
            <TextField source="name" />
            <NumberField source="size" />
            <NumberField source="roleid" />
            <ReferenceField source="tribeid" label="Tribe" reference="tribes">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const GroupEdit = props => (
    <Edit title={<GroupTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateTimeInput disabled source="createdat" />
            <DateTimeInput disabled source="updatedat" />
            <TextInput source="short" />
            <TextInput source="name" />
            <NumberInput source="size" />
            <TextInput source="roleid" />
            <ReferenceInput label="Tribe" source="tribeid" reference="tribes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput multiline source="details" />
            <TextInput source="contact" />
        </SimpleForm>
    </Edit>
);

export const GroupCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="short" />
            <TextInput source="name" />
            <NumberInput source="size" />
            <TextInput source="roleid" />
            <ReferenceInput label="Tribe" source="tribeid" reference="tribes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput multiline source="details" />
            <TextInput source="contact" />
        </SimpleForm>
    </Create>
);