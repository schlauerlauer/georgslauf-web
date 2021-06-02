import React from 'react'
import { TextInput, NumberField, NumberInput, ReferenceField, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField } from 'react-admin';

export const GroupTopList = props => (
    <List {...props} sort={{ field: 'sum', order: 'DESC' }}>
        <Datagrid>
            <NumberField label="Points" source="sum"/>
            <NumberField label="Average" source="avg"/>
            <ReferenceField source="id" label="Name" reference="groups">
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField source="grouping_id" reference="groupings">
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField source="tribe_id" reference="tribes">
                <TextField source="name"/>
            </ReferenceField>
        </Datagrid>
    </List>
);