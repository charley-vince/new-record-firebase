import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Page from '../containers/Page'
import AdminPage from '../containers/Admin'
require('Styles/styles.less')

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/" component={Page} />
        </Switch>
      </Router>
    )
  }
}
export default App
