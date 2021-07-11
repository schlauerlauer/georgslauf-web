import React from 'react'
import { Create, ReferenceInput, SelectInput, List, Datagrid, TextField, DateField, NumberField, ReferenceField, SimpleForm, Edit, TextInput, DateTimeInput, NumberInput} from 'react-admin';

const TribeStationTitle = ({ record }) => {
    return <span>Station {record ? `"${record.name}"` : ''}</span>;
}

export const TribeStationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="short" />
            <TextField source="station" />
            <NumberField source="size" />
            <TextField source="tribe" />
            <TextField source="login" />
        </Datagrid>
    </List>
);

// export const TribeStationEdit = props => (
//     <Edit title={<TribeStationTitle />} {...props}>
//         <Datagrid rowClick="edit">
//             <TextField source="id" />
//             <DateField source="created_at" />
//             <DateField source="updated_at" />
//             <TextField source="short" />
//             <TextField source="station" />
//             <NumberField source="size" />
//             <TextField source="tribe" />
//             <TextField source="login" />
//         </Datagrid>
//     </Edit>
// );
