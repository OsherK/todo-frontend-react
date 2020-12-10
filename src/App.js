import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/global.scss';

import {TodoApp} from './views/TodoApp.jsx';

function App() {
  return (
    <div className="app main-container">
      <Router>
      <Switch>
        <Route path="/" component={TodoApp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;