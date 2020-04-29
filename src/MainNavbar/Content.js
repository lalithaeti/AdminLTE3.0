import React, {Component, Fragment} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './Dashboard';
import Widgets from './Widgets';
import ChartJS from '../Components/Charts/ChartJS';
import Flot from '../Components/Charts/Flot';
import Inline from '../Components/Charts/Inline';
import Modals from '../Components/UI/Modals';
import Icons from '../Components/UI/icons';
import General from '../Components/UI/general';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard2 from './Dashboard2';
import Rolemanagement from '../Components/RoleManagement/rolemanagement';
import Dashboard3 from './Dashboard3';
import SimpleTable from '../Components/Tables/SimpleTable';
import DataTable from '../Components/Tables/DataTable';
import JsGrid from '../Components/Tables/JsGrid';
import Buttons from '../Components/UI/Buttons';
import Sliders from '../Components/UI/Sliders';
import NavTab from '../Components/UI/NavTab';
import Timeline from '../Components/UI/Timeline';
import Ribbons from '../Components/UI/Ribbons';
import Generalform from '../Components/Forms/Generalform';
import AdvancedElements from '../Components/Forms/AdvancedElements';
import Editors from '../Components/Forms/Editors';
import ValidationForm from '../Components/Forms/ValidationForm';
import MUI from '../Components/Tables/MUI';
import MDBdatatable from '../Components/Tables/MDB';
import ReactTabulator from '../Components/Tables/ReactTabulator';
import Calender from '../Components/Examples/Calender';
import Projects from '../Components/Pages/Projects';
import ProjectAdd from '../Components/Pages/ProjectAdd';
import ProjectEdit from '../Components/Pages/ProjectEdit';
import ProjectDetails from '../Components/Pages/ProjectDetails';
import Contacts from '../Components/Pages/Contacts';
import Search from '../Components/Search/Search';
import Form from '../Components/Validations/Form';
import Alerts from '../Components/UI/Alerts';

  class Content extends Component {

    render() {
    return (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Sidebar/>
            <Switch>
               <Route path="/dashboard" component={Dashboard}/>
               <Route path="/dashboard2" component={Dashboard2}/>
               <Route path="/dashboard3" component={Dashboard3}/>
               <Route path="/rolemanagement" component={Rolemanagement}/>
               <Route path="/widgets" component={Widgets}/>
               {/* UI Components */}
               <Route path="/modals" component={Modals}/>
               <Route path="/buttons" component={Buttons}/>
               <Route path="/icons" component={Icons}/>
               <Route path="/sliders" component={Sliders}/>
               <Route path="/navtab" component={NavTab}/>
               <Route path="/timeline" component={Timeline}/>
               <Route path="/ribbons" component={Ribbons}/>
               <Route path="/search" component={Search}/>
               <Route path="/general" component={General}/>
               {/* Form components */}
               <Route path="/generalform" component={Generalform}/>
               <Route path="/advancedelements" component={AdvancedElements}/>
               <Route path="/editors" component={Editors}/>
               <Route path="/form" component={Form}/>
               {/* ChartJS Components */}
               <Route path="/chartjs" component={ChartJS}/>
               <Route path="/flot" component={Flot}/>
               <Route path="/inline" component={Inline}/>
               {/* Tables */}
               <Route path="/simpletable" component={SimpleTable}/>
               <Route path="/datatable" component={DataTable}/>
               <Route path="/jsgrid" component={JsGrid}/>
               <Route path="/mui" component={MUI}/>
               <Route path="/mdb" component={MDBdatatable}/>
               <Route path="/reactTabulator" component={ReactTabulator}/>    
               {/*Examples */}
               <Route path="/calendar" component={Calender}/>
               <Route path="/projects" component={Projects}/>
               <Route path="/projectadd" component={ProjectAdd}/>
               <Route path="/projectedit" component={ProjectEdit}/>
               <Route path="/projectdetails" component={ProjectDetails}/>
               <Route path="/contacts" component={Contacts}/>
               <Route path="/reactToaster" component={Alerts}/>
            </Switch>
        </Fragment>
    </BrowserRouter>
    );
}}

export default Content;