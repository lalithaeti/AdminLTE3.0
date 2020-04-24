import React, {Component,Fragment} from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import RoleManagement from './Views/RoleManagement';
import Home from './Views/Home';
import Navbar from './components/Navbar'
import Sidebar2 from './components/Sidebar2'
import Dashboard from './Views/Dashboard';
import SimpleTable from './Views/SimpleTable'
import Case from './Views/Case'
import Datatable from './Views/DataTable'
import ChartJS from './Views/ChartJS'

export default class Content extends Component {

    render() {
    return (
        <Router>
        <Fragment>
            <Navbar />
            <Sidebar2 />
           <Switch>
               <Route path="/rolemanagement" component={RoleManagement}/>
               <Route path="/dashboard" component={Dashboard}/>
               <Route path="/home" component={Home}/>
               <Route path="/simpletable" component={SimpleTable}/>
               <Route path="/datatable" component={Datatable}/>
               <Route path="/createcase" component={Case}/>
               <Route path="/chartjs" component={ChartJS}/>
            </Switch>
            </Fragment>
            </Router>
    );
}}
