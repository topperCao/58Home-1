import React from 'react';
import { BrowserRouter,HashRouter } from 'react-router-dom';

import {renderRoutes} from 'react-router-config';
import routes from './routes/index.js';
// import My from './pages/my/my';
// import Server from './pages/server/Server';
// import Tabbuttom from './components/tabbuttom/Tabbuttom';
// import Main from './pages/Main/Main'
// import Info from './pages/Info/Info'

import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
      {/* <Route  path='/main' component={Main} /> */}

        {/* <Switch>
          <Route  path='/server' component={Server} />
          <Route  path='/info' component={Info} />
          <Route  path='/my' component={My} />
          <Redirect to='/main' />
        </Switch> */}
        {renderRoutes(routes)}
        {/* <Tabbuttom /> */}
      </HashRouter>
    </div>
  );
}

export default App;
