import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

// Templates
import Homepage from './components/templates/Homepage/';
import HealthEMS from './components/templates/HealthEMS/';
import Lifenet from './components/templates/Lifenet/';
import Codestat from './components/templates/Codestat/';
import Homesolutions from './components/templates/Homesolutions/';
import ProfessionalServices from './components/templates/ProfessionalServices/';
import ContactUs from './components/templates/ContactUs/';
import ErrorPage from './components/templates/ErrorPage/';

const Routes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={500}>
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
