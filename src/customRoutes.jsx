import { Route } from 'react-router-dom';
import Home from './Home';

const routes = [
    <Route exact path="/home" component={Home}/>,
    // <Route exact path="/test"/>,
];

export default routes;