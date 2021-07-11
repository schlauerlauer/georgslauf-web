import React from 'react'
import { BooleanField, TextInput, ShowButton, ReferenceInput, SelectInput, NumberField, ReferenceField, NumberInput, DateTimeInput, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const ContentTitle = ({ record }) => {
    return <span>Content {record ? `"${record.title}"` : ''}</span>;
}

export const ContentList = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="sort" label="Sort order"/>
            <ReferenceField source="ContenttypeID" label="Content Type" reference="contenttypes">
                <NumberField source="name"/>
            </ReferenceField>
            <ReferenceField source="ContenttypeID" label="Public" reference="contenttypes">
                <BooleanField source="public"/>
            </ReferenceField>
            <TextField source="value" label="Text"/>
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
            <NumberInput source="sort" label="Sort order"/>
            <TextInput source="value" inputProps={{ maxLength: 1000 }}/>
            <ReferenceInput label="Run" source="RunID" reference="runs">
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
            <NumberInput source="sort" label="Sort order"/>
            <TextInput source="value" inputProps={{ maxLength: 1000 }}/>
            <TextField label="Run ID 33 is 2021"/>
            <NumberInput label="Run ID" source="RunID"/>
        </SimpleForm>
    </Create>
);
