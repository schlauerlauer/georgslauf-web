import React from 'react'
import { TextInput, ReferenceInput, SelectInput, Create, SimpleForm, List, Datagrid, TextField, CheckboxGroupInput } from 'react-admin';

import { TopToolbar, SortButton, RefreshButton, CreateButton, ExportButton } from 'react-admin';

const ListActions = () => (
    <TopToolbar>
        <RefreshButton/>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

export const RuleList = props => (
    <List actions={<ListActions/>} {...props}>
        <Datagrid>
            <TextField label="Subject" source="v0"/>
            <TextField label="Object" source="v1"/>
            <TextField label="Action" source="v2"/>
        </Datagrid>
    </List>
);

export const RuleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="LoginID" label="Subject" reference="logins">
                <SelectInput optionText="username"/>
            </ReferenceInput>
            <TextInput label="Object" source="object"/>
            <CheckboxGroupInput source="action" choices={[
                { id: 'GET', name: 'GET' },
                { id: 'POST', name: 'POST' },
                { id: 'PUT', name: 'PUT' },
                { id: 'PATCH', name: 'PATCH' },
                { id: 'DELETE', name: 'DELETE' },
            ]}/>
        </SimpleForm>
    </Create>
);
