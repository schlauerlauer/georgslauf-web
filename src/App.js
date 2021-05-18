import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { GroupList, GroupEdit, GroupCreate } from "./components/groups";
import { StationList, StationEdit, StationCreate } from "./components/stations";
import { StationPointList, StationPointEdit, StationPointCreate } from "./components/stationpoints";
import { GroupPointList, GroupPointEdit, GroupPointCreate } from "./components/grouppoints";
import { TribeList, TribeEdit, TribeCreate } from "./components/tribes";
import { RoleList, RoleEdit, RoleCreate } from "./components/roles";
import { LoginList, LoginEdit, LoginCreate } from "./components/logins";

const dataProvider = jsonServerProvider('http://localhost:8080/v1');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tribes" list={TribeList} edit={TribeEdit} create={TribeCreate} />
    <Resource name="groups" list={GroupList} edit={GroupEdit} create={GroupCreate} />
    <Resource name="stations" list={StationList} edit={StationEdit} create={StationCreate} />
    <Resource name="stationpoints" list={StationPointList} edit={StationPointEdit} create={StationPointCreate} />
    <Resource name="grouppoints" list={GroupPointList} edit={GroupPointEdit} create={GroupPointCreate} />
    <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} />
    <Resource name="logins" list={LoginList} edit={LoginEdit} create={LoginCreate} />
  </Admin>
);

export default App;
