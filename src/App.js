import React from 'react'
import Content from './MainNavbar/Content'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login';

class App extends React.Component {
  
  render() {
    return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Content/>
      </Switch>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;