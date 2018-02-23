import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

// Templates
import Homepage from './pages/Homepage/';
import HealthEMS from './pages/HealthEMS/';
import Lifenet from './pages/Lifenet/';
import Codestat from './pages/Codestat/';
import Homesolutions from './pages/Homesolutions/';
import ProfessionalServices from './pages/ProfessionalServices/';
import ContactUs from './pages/ContactUs/';
import ErrorPage from './pages/ErrorPage/';

const Routes = withRouter(({ location }) => (
  <TransitionGroup className="page-transition">
    <CSSTransition appear timeout={{ appear: 250, enter: 500, exit: 250 }} key={location.key} classNames="pagefade">
      <Switch location={location}>
        <Route exact path="/" component={Homepage} />
        <Route path="/health-ems" component={HealthEMS} />
        <Route path="/lifenet-system" component={Lifenet} />
        <Route path="/code-stat" component={Codestat} />
        <Route path="/homesolutions-net" component={Homesolutions} />
        <Route path="/professional-services" component={ProfessionalServices} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={ErrorPage} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default Routes;
