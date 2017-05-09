import React from 'react'
import {Provider} from 'react-redux'
import createStoreForPage from '../store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Page from '../containers/Page'
import AdminPage from '../containers/Admin'
// import WeddingQuestionnaire from './WeddingQuestionnaire'
require('Styles/styles.less')

let store = createStoreForPage()
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
						<Switch>
							<Route path="/admin" component={AdminPage} />
							<Route path="/" component={Page} />
						</Switch>
				</Router>
			</Provider>
		)
	}
}
export default App
