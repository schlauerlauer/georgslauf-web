import React from 'react'
import { TopToolBar, Show, SimpleList, SimpleShowLayout, Create, ReferenceInput, SelectInput, List, Datagrid, TextField, DateField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput, Responsive} from 'react-admin';
import { NoListActions } from '../../customListActions';

export const PublicGroupList = props => (
    <List {...props} bulkActionButtons={false} actions={<NoListActions/>}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `Laufgruppe ${record.short} der ${record.grouping}stufe`}
                    tertiaryText={record => record.tribe}
                />
            }
            medium={
                <Datagrid rowClick="expand" expand={<PublicGroupShow/>}>
                    <TextField source="name" label="Gruppe"/>
                    <TextField source="grouping" label="Stufe"/>
                    <TextField source="tribe" label="Stamm"/>
                </Datagrid>
            }
        />
    </List>
);

const PublicGroupShow = props => (
    <Show {...props} title=" ">
        <SimpleShowLayout>
            <TextField source="name" label="Gruppe"/>
            <TextField source="short" label="Laufgruppe"/>
            <TextField source="grouping" label="Stufe"/>
            <TextField source="tribe" label="Stamm"/>
        </SimpleShowLayout>
    </Show>
);
