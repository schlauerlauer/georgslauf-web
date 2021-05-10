import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { GroupList, GroupEdit, GroupCreate } from "./components/groups";
import { TribeList } from "./components/tribes";

const dataProvider = jsonServerProvider('http://localhost:8080/v1');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tribes" list={TribeList} />
    <Resource name="groups" list={GroupList} edit={GroupEdit} create={GroupCreate} />
  </Admin>
);
export default App;
