import React from 'react'
import { NumberField, ReferenceField, List, Datagrid, TextField } from 'react-admin';

export const StationTopList = props => (
    <List bulkActionButtons={false} {...props} sort={{ field: 'sum', order: 'DESC' }}>
        <Datagrid>
            <NumberField label="Points" source="sum"/>
            <NumberField label="Average" source="avg"/>
            <ReferenceField source="id" label="Station Name" reference="stations" sortable={false}>
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField source="tribe_id" reference="tribes" sortable={false}>
                <TextField source="name"/>
            </ReferenceField>
        </Datagrid>
    </List>
);
