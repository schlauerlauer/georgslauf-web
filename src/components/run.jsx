import React from 'react'
import { TextInput, ReferenceField, ReferenceInput, SelectInput, ShowButton, NumberField, NumberInput, DateTimeInput, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

const RunTitle = ({ record }) => {
    return <span>Run {record ? `"${record.year}"` : ''}</span>;
}

export const RunList = props => (
    <List bulkActionButtons={false} {...props} sort={{ field: 'year', order: 'DESC' }}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <NumberField source="year"/>
            <ReferenceField source="TribeID" label="Tribe" reference="tribes" sortable={false}>
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="note"/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const RunEdit = props => (
    <Edit title={<RunTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="year"/>
            <TextInput source="note"/>
            <NumberInput disabled source="id"/>
            <ReferenceInput source="TribeID" label="Tribe" reference="tribes">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const RunCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="year"/>
            <TextInput source="note"/>
            <ReferenceInput source="TribeID" label="Tribe" reference="tribes">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
