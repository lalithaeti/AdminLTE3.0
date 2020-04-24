import React from 'react'
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from './components/Login'
import Routes from './Routes'
class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Routes />
        </Switch>
      </Router>
    )
  }
}

export default App