import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-bootstrap'
require('Styles/login.less')

//field validation
const required = value => (value ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div className="input-login-form">
    <input {...input} placeholder={label} type={type} />
    {touched &&
      ((error && <span className="login-error">{error}</span>) ||
        (warning && <span className="login-error">{warning}</span>))}
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
    // let strings = this.props.strings

    return (
      <div className="default-height-container login-wrapper">
        <div className="login-window">

          {this.renderAuthenticationError(this.props.authenticationError)}

          <form onSubmit={this.props.handleSubmit(this.wrapperSignInUser)}>
            <div className="login-layout">
              <Field
                name="email"
                component={renderField}
                validate={[required, email]}
                type="text"
                label="Email"
              />

              <Field
                name="password"
                component={renderField}
                validate={[required]}
                type="text"
                label="Password"
              />
              <Button type="submit" bsStyle="danger">Submit</Button>
            </div>
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
