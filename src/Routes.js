import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import JunLogin from './pages/junchoi/Login/Login';
import JunMain from './pages/junchoi/Main/Main';
import ChanLogin from './pages/dongchanseo/Login/Login';
import ChanMain from './pages/dongchanseo/Main/Main';
import YeongLogin from './pages/shinyeongkim/Login/Login';
import YeongMain from './pages/shinyeongkim/Main/Main';
import HoLogin from './pages/hogeunoh/Login/Login';
import HoMain from './pages/hogeunoh/Main/Main';
import YoonLogin from './pages/yoonsiklee/Login/Login';
import YoonMain from './pages/yoonsiklee/Main/Main';

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/login-junchoi' component={JunLogin} />
          <Route exact path='/main-junchoi' component={JunMain} />
          <Route exact path='/login-dongchanseo' component={ChanLogin} />
          <Route exact path='/main-dongchanseo' component={ChanMain} />
          <Route exact path='/login-shinyeongkim' component={YeongLogin} />
          <Route exact path='/main-shinyeongkim' component={YeongMain} />
          <Route exact path='/login-hogeunoh' component={HoLogin} />
          <Route exact path='/main-hogeunoh' component={HoMain} />
          <Route exact path='/login-yoonsiklee' component={YoonLogin} />
          <Route exact path='/main-yoonsiklee' component={YoonMain} />
        </Switch>
      </Router>
    );
  }
} 

export default Routes;