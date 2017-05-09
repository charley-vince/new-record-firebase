import {bindActionCreators} from 'redux'
import {signInUser} from '../actions/auth'
import {connect} from 'react-redux'
import translate from './translate'
import Login from '../components/Login'
import flow from 'lodash/flow'

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated,
		authenticationError: state.auth.error
	}
}

function mapDispatchToProps(dispatch) {
	return {
		signInUser: bindActionCreators(signInUser, dispatch)
	}
}

const decorators = flow([connect(mapStateToProps, mapDispatchToProps), translate('Login')])
export default decorators(Login)
