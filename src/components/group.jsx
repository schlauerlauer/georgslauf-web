import React from 'react'
import { Create, ReferenceInput, SelectInput, List, Datagrid, TextField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput} from 'react-admin';

const GroupTitle = ({ record }) => {
    return <span>Group {record ? `"${record.name}"` : ''}</span>;
}

export const GroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name"/>
            <TextField source="short"/>
            <NumberField source="size"/>
            <ReferenceField source="GroupingID" label="Grouping" reference="groupings" sortable={false}>
                <TextField source="short"/>
            </ReferenceField>
            <ReferenceField source="TribeID" label="Tribe" reference="tribes" sortable={false}>
                <TextField source="short"/>
            </ReferenceField>
        </Datagrid>
    </List>
);

export const GroupEdit = props => (
    <Edit title={<GroupTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
            <NumberInput source="size"/>
            <ReferenceInput label="Grouping" source="GroupingID" reference="groupings">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <ReferenceInput label="Tribe" source="TribeID" reference="tribes">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <NumberInput disabled source="id"/>
            <DateTimeInput disabled source="CreatedAt"/>
            <DateTimeInput disabled source="UpdatedAt"/>
        </SimpleForm>
    </Edit>
);

export const GroupCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="short"/>
            <NumberInput source="size"/>
            <ReferenceInput label="Grouping" source="GroupingID" reference="groupings">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <ReferenceInput label="Tribe" source="TribeID" reference="tribes">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
