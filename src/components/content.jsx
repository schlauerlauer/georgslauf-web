import React from 'react'
import { DateField, TextInput, ShowButton, ReferenceInput, SelectInput, NumberField, ReferenceField, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';
import { ListButton } from 'react-admin';

const ContentTitle = ({ record }) => {
    return <span>Content {record ? `"${record.title}"` : ''}</span>;
}

export const ContentList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <DateField showTime source="CreatedAt"/>
            <TextField source="title"/>
            <ReferenceField source="ContenttypeID" label="Content Type" reference="contenttypes">
                <NumberField source="name"/>
            </ReferenceField>
            <ReferenceField source="RunID" label="Run" reference="runs">
                <TextField source="year"/>
            </ReferenceField>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const ContentEdit = props => (
    <Edit title={<ContentTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput label="Content Type" source="ContenttypeID" reference="contenttypes">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title" inputProps={{ maxLength: 100 }}/>
            <TextInput source="body" inputProps={{ maxLength: 30 }}/>
            <ReferenceInput source="RunID" label="Run" reference="runs">
                <SelectInput optionText="year"/>
            </ReferenceInput>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const ContentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Content Type" source="ContenttypeID" reference="contenttypes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="RunID" label="Run" reference="runs">
                <SelectInput optionText="year"/>
            </ReferenceInput>
            <TextInput source="title" inputProps={{ maxLength: 100 }}/>
            <TextInput source="body" inputProps={{ maxLength: 1000 }}/>
        </SimpleForm>
    </Create>
);
