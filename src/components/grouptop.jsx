import React from 'react'
import { NumberField, ReferenceField, List, Datagrid, TextField } from 'react-admin';

export const GroupTopList = props => (
    <List bulkActionButtons={false} {...props} sort={{ field: 'sum', order: 'DESC' }}>
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
