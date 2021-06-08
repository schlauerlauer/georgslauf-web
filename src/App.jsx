import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, fetchUtils } from 'react-admin';

import DescriptionIcon from '@material-ui/icons/Description';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DeckIcon from '@material-ui/icons/Deck';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PolicyIcon from '@material-ui/icons/Policy';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';import ControlPointIcon from '@material-ui/icons/ControlPoint';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PollIcon from '@material-ui/icons/Poll';

import { GroupList, GroupEdit, GroupCreate } from './components/group';
import { StationList, StationEdit, StationCreate } from './components/station';
import { StationPointList, StationPointEdit, StationPointCreate } from './components/stationpoint';
import { GroupPointList, GroupPointEdit, GroupPointCreate } from './components/grouppoint';
import { TribeList, TribeEdit, TribeCreate } from './components/tribe';
import { RuleList, RuleCreate } from './components/rule';
import { LoginList, LoginEdit, LoginCreate } from './components/login';
import { GroupingList, GroupingEdit, GroupingCreate } from './components/grouping';
import { ContentList, ContentEdit, ContentCreate } from './components/content';
import { GroupTopList } from './components/grouptop';
import { StationTopList } from './components/stationtop';
import { RunCreate, RunEdit, RunList } from './components/run';
import { ContentTypeCreate, ContentTypeEdit, ContentTypeList } from './components/contenttype';
import { ConfigCreate, ConfigEdit, ConfigList } from './components/config';

import customRoutes from './components/customRoutes';
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider('http://localhost:8080/v1', httpClient);

const App = () => (
  <Admin authProvider={authProvider} customRoutes={customRoutes} dataProvider={dataProvider}>
    <Resource name="tribes" icon={FavoriteIcon} list={TribeList} edit={TribeEdit} create={TribeCreate}/>
    <Resource name="groups" icon={DirectionsRunIcon} list={GroupList} edit={GroupEdit} create={GroupCreate}/>
    <Resource name="stations" icon={DeckIcon} list={StationList} edit={StationEdit} create={StationCreate}/>
    <Resource name="stationpoints" icon={AssignmentTurnedInIcon} options={{ label: 'Station points' }} list={StationPointList} edit={StationPointEdit} create={StationPointCreate}/>
    <Resource name="grouppoints" icon={ControlPointIcon} options={{ label: 'Group points' }} list={GroupPointList} edit={GroupPointEdit} create={GroupPointCreate}/>
    <Resource name="rules" icon={PolicyIcon} list={RuleList} create={RuleCreate}/>
    <Resource name="logins" icon={FingerprintIcon} list={LoginList} edit={LoginEdit} create={LoginCreate}/>
    <Resource name="groupings" icon={BubbleChartIcon} list={GroupingList} edit={GroupingEdit} create={GroupingCreate}/>
    <Resource name="content" icon={DescriptionIcon} options={{ label: 'Content' }} list={ContentList} edit={ContentEdit} create={ContentCreate}/>
    <Resource name="grouptops" icon={PollIcon} options={{ label: 'Group Chart' }} list={GroupTopList}/>
    <Resource name="stationtops" icon={PollIcon} options={{ label: 'Station Chart' }} list={StationTopList}/>
    <Resource name="runs" list={RunList} edit={RunEdit} create={RunCreate} icon={EventIcon}/>
    <Resource name="contenttypes" options={{ label: 'Content Types' }} list={ContentTypeList} edit={ContentTypeEdit} create={ContentTypeCreate}/>
    <Resource name="config" list={ConfigList} edit={ConfigEdit} create={ConfigCreate}/>
    <Resource icon={ScheduleIcon}/>
  </Admin>
);
export default App;
