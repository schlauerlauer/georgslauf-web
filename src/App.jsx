import jsonServerProvider from 'ra-data-json-server';
import { Admin, defaultTheme, Resource, fetchUtils } from 'react-admin';

/* ICONS  */
import DescriptionIcon from '@material-ui/icons/Description';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DeckIcon from '@material-ui/icons/Deck';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PolicyIcon from '@material-ui/icons/Policy';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';import ControlPointIcon from '@material-ui/icons/ControlPoint';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import EventIcon from '@material-ui/icons/Event';
import PollIcon from '@material-ui/icons/Poll';
/* ICONS  */

/* RESOURCES */
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
import { TribeStationList } from './components/tribe/tribestation';
import { TribeGroupList } from './components/tribe/tribegroup';
import { PublicStationList } from './components/public/publicstation';
import { PublicGroupList } from './components/public/publicgroup';
/* RESOURCES */

import customRoutes from './customRoutes';
import authProvider from './authProvider';
import { MyLayout }  from './Layout';
import NotFound from './NotFound';
//import MyLoginPage from './customLoginPage';
import MyLogoutButton from './customLogoutButton';

const customTheme = {
  ...defaultTheme,
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
},
}

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL, httpClient);

//loginPage={MyLoginPage} 

const App = () => {
  return(
    <Admin theme={customTheme} catchAll={NotFound} logoutButton={MyLogoutButton} layout={MyLayout} authProvider={authProvider} customRoutes={customRoutes} dataProvider={dataProvider} disableTelemetry>
      {permissions => [
        permissions.role === "admin"
        ? [
          <Resource name="rules" icon={PolicyIcon} options={{ label: 'Rules', header: "Admin" }} list={RuleList} create={RuleCreate}/>,
          <Resource name="logins" icon={FingerprintIcon} options={{ label: 'Accounts', divider: true }} list={LoginList} edit={LoginEdit} create={LoginCreate}/>,
        ]
        : null,
        permissions.role === "host" || permissions.role === "admin"
        ? [
          <Resource name="tribes" icon={FavoriteIcon} options={{ label: 'Stämme', header: "Gastgeber" }} list={TribeList} edit={TribeEdit} create={TribeCreate}/>,
          <Resource name="stationpoints" icon={AssignmentTurnedInIcon} options={{ label: 'Posten Punkte' }} list={StationPointList} edit={StationPointEdit} create={StationPointCreate}/>,
          <Resource name="grouppoints" icon={ControlPointIcon} options={{ label: 'Gruppen Punkte' }} list={GroupPointList} edit={GroupPointEdit} create={GroupPointCreate}/>,
          <Resource name="grouptops" icon={PollIcon} options={{ label: 'Gruppen Plazierung' }} list={GroupTopList}/>,
          <Resource name="stationtops" icon={PollIcon} options={{ label: 'Posten Plazierung' }} list={StationTopList}/>,
          <Resource name="groupings" icon={BubbleChartIcon} options={{ label: 'Stufen' }} list={GroupingList} edit={GroupingEdit} create={GroupingCreate}/>,
          <Resource name="content" icon={DescriptionIcon} options={{ label: 'Inhalt' }} list={ContentList} edit={ContentEdit} create={ContentCreate}/>,
          <Resource name="runs" options={{ label: 'Läufe' }} list={RunList} edit={RunEdit} create={RunCreate} icon={EventIcon}/>,
          <Resource name="contenttypes" options={{ label: 'Content Types' }} list={ContentTypeList} edit={ContentTypeEdit} create={ContentTypeCreate}/>,
          <Resource name="config" list={ConfigList} options={{ label: 'Config' }} edit={ConfigEdit} create={ConfigCreate}/>,
          <Resource name="groups" icon={DirectionsRunIcon} options={{ label: 'Gruppen' }} list={GroupList} edit={GroupEdit} create={GroupCreate}/>,
          <Resource name="stations" icon={DeckIcon} options={{ label: 'Posten', divider: true  }} list={StationList} edit={StationEdit} create={StationCreate}/>,
        ]
        : null,
        permissions.role === "tribe" || permissions.role === "host"
        ? [
          <Resource name="tribes/stations" icon={DeckIcon} options={{ label: 'Posten', header: "Stamm" }} list={TribeStationList}/>,
          <Resource name="tribes/groups" icon={DirectionsRunIcon} options={{ label: 'Gruppen', divider: true }} list={TribeGroupList}/>,
        ]
        : null,
        permissions.role === "public" || permissions.role === "tribe" || permissions.role === "host" || permissions.role === "admin"
        ? [
          <Resource name="public/stations" icon={DeckIcon} options={{ label: 'Alle Posten', header: "Öffentlich" }} list={PublicStationList}/>,
          <Resource name="public/groups" icon={DirectionsRunIcon} options={{ label: 'Alle Gruppen' }} list={PublicGroupList}/>,
        ]
        : null,
      ]
      }
    </Admin>
  );
};
export default App;
