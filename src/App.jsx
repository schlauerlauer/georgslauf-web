import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, EditGuesser } from 'react-admin';

import DescriptionIcon from '@material-ui/icons/Description';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DeckIcon from '@material-ui/icons/Deck';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PolicyIcon from '@material-ui/icons/Policy';
import EditIcon from '@material-ui/icons/Edit';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import { GroupList, GroupEdit, GroupCreate } from './components/groups';
import { StationList, StationEdit, StationCreate } from './components/stations';
import { StationPointList, StationPointEdit, StationPointCreate } from './components/stationpoints';
import { GroupPointList, GroupPointEdit, GroupPointCreate } from './components/grouppoints';
import { TribeList, TribeEdit, TribeCreate } from './components/tribes';
import { RoleList, RoleEdit, RoleCreate } from './components/roles';
import { LoginList, LoginEdit, LoginCreate } from './components/logins';
import { GroupingList, GroupingEdit, GroupingCreate } from './components/grouping';
import { ContentList, ContentEdit, ContentCreate } from './components/content';


const dataProvider = jsonServerProvider('http://localhost:8080/v1');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tribes" icon={FavoriteIcon} list={TribeList} edit={TribeEdit} create={TribeCreate}/>
    <Resource name="groups" icon={DirectionsRunIcon} list={GroupList} edit={GroupEdit} create={GroupCreate}/>
    <Resource name="stations" icon={DeckIcon} list={StationList} edit={StationEdit} create={StationCreate}/>
    <Resource name="stationpoints" icon={EditIcon} options={{ label: 'Station points' }} list={StationPointList} edit={StationPointEdit} create={StationPointCreate}/>
    <Resource name="grouppoints" icon={ControlPointIcon} options={{ label: 'Group points' }} list={GroupPointList} edit={GroupPointEdit} create={GroupPointCreate}/>
    <Resource name="roles" icon={PolicyIcon} list={RoleList} edit={RoleEdit} create={RoleCreate}/>
    <Resource name="logins" icon={FingerprintIcon} list={LoginList} edit={LoginEdit} create={LoginCreate}/>
    <Resource name="groupings" icon={BubbleChartIcon} list={GroupingList} edit={GroupingEdit} create={GroupingCreate}/>
    <Resource name="content" icon={DescriptionIcon} options={{ label: 'Content' }} list={ContentList} edit={ContentEdit} create={ContentCreate} />
  </Admin>
);

export default App;
