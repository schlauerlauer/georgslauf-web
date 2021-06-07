import React from 'react'
import { TextInput, NumberField, ReferenceInput, SelectInput, NumberInput, DateTimeInput, EditButton, Create, Edit, SimpleForm, List, Datagrid, TextField, CheckboxGroupInput } from 'react-admin';

// const RuleTitle = ({ record }) => {
//     return <span>Rule {record ? `"${record.name}"` : ''}</span>;
// }

export const RuleList = props => (
    <List {...props}>
        <Datagrid>
            <TextField label="Subject" source="v0"/>
            <TextField label="Object" source="v1"/>
            <TextField label="Action" source="v2"/>
        </Datagrid>
    </List>
);

// export const RuleEdit = props => (
//     <Edit title={<RuleTitle />} {...props}>
//         <SimpleForm>
//             <ReferenceInput source="v0" label="Subject" reference="logins">
//                 <SelectInput optionText="username"/>
//             </ReferenceInput>
//             <TextInput label="Object" source="v1"/>
//             <TextInput label="Action" source="v2"/>
//             <TextInput disabled source="ptype"/>
//             <NumberInput disabled source="id"/>
//         </SimpleForm>
//     </Edit>
// );

export const RuleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="LoginID" label="Subject" reference="logins">
                <SelectInput optionText="username"/>
            </ReferenceInput>
            <TextInput label="Object" source="object"/>
            <TextInput label="Action" source="action"/>
            <CheckboxGroupInput source="test" choices={[
                { id: 'GET', name: 'GET' },
                { id: 'POST', name: 'POST' },
                { id: 'PUT', name: 'PUT' },
                { id: 'PATCH', name: 'PATCH' },
                { id: 'DELETE', name: 'DELETE' },
            ]}/>
        </SimpleForm>
    </Create>
);
