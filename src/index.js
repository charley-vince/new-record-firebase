import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './components/App.js'
import createStoreForPage from './store'
import {Provider} from 'react-redux'

let store = createStoreForPage()
const render = App => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)
}

render(App)

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App.js', () => {
		render(App)
	})
}
