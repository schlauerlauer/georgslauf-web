import React from 'react'
import { Create, ReferenceInput, SelectInput, List, EditButton, Datagrid, TextField, NumberField, ReferenceField, SimpleForm, Edit, DateTimeInput, NumberInput} from 'react-admin';

export const GroupPointList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField source="StationID" label="From Station" reference="stations">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="GroupID" label="To Group" reference="groups">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="value"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const GroupPointEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput label="From Station" source="StationID" reference="stations">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="To Group" source="GroupID" reference="groups">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="value" />
            <NumberInput disabled source="id" />
            <DateTimeInput disabled source="CreatedAt" />
            <DateTimeInput disabled source="UpdatedAt" />
        </SimpleForm>
    </Edit>
);

export const GroupPointCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="From Station" source="StationID" reference="stations">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="To Group" source="GroupID" reference="groups">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="value" />
        </SimpleForm>
    </Create>
);
