// in src/customRoutes.js
import * as React from "react";
import { Route } from 'react-router-dom';
import { Test } from './test';

export default [
    <Route exact path="/foo" component={Test}/>,
];
