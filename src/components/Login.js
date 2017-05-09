import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
require('Styles/login.less')

//field validation
const required = value => (value ? undefined : 'Required')
const email = value =>
	(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined)

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} />
			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
)

class Login extends React.Component {
	componentWillMount() {
		if (this.props.authenticated) {
			this.props.history.push('/admin')
		}
	}

	renderAuthenticationError = authenticationError => {
		if (authenticationError !== null) {
			return <div className="alert alert-danger">{authenticationError}</div>
		}
		;<div />
	}
	wrapperSignInUser = values => {
		this.props.signInUser(values, this.props.history.push)
	}

	render() {
		let strings = this.props.strings

		return (
			<div className="default-height-container" style={{paddingTop: 100}}>
				<div className="login-window">
					<div className="panel-heading">
						<h3 className="panel-title">{strings.authorization}</h3>
					</div>

					{this.renderAuthenticationError(this.props.authenticationError)}

					<form onSubmit={this.props.handleSubmit(this.wrapperSignInUser)}>
						<Field
							name="email"
							component={renderField}
							validate={[required, email]}
							type="text"
							label={strings.login}
							className="input-login-form"
						/>

						<Field
							name="password"
							component={renderField}
							validate={[required]}
							type="text"
							label={strings.password}
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

Login.propTypes = {
	strings: PropTypes.object.isRequired,
	authenticated: PropTypes.bool.isRequired,
	signInUser: PropTypes.func.isRequired,
	authenticationError: PropTypes.string
}

export default reduxForm({
	form: 'login'
})(Login)
