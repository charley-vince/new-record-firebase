import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'

//field validation
const required = value => (value ? undefined : 'Required')
const link = value => (value && !/^(f|ht)tps?:\/\//i.test(value) ? 'Invalid link' : undefined)

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class AddClipForm extends React.Component {
  renderError = error => {
    if (error !== null) {
      return <div className="alert alert-danger">{error}</div>
    }
    ;<div />
  }

  addClipWrapper = values => {
    this.props.addClip({title: values.title, url: values.url, tag: values.tag})
  }
  render() {
    return (
      <div className="addClip">
        <form onSubmit={this.props.handleSubmit(this.addClipWrapper)}>
          <div>
            <span>*Все поля обязательны</span>
          </div>

          {this.renderError(this.props.clipError)}

          <Field
            name="tag"
            component={renderField}
            validate={[required]}
            type="text"
            label="Tag*"
          />

          <Field
            name="title"
            component={renderField}
            validate={[required]}
            type="text"
            label="Title*"
          />

          <Field
            name="url"
            component={renderField}
            validate={[required, link]}
            type="text"
            label="URL*"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
AddClipForm.PropTypes = {
  addClip: PropTypes.func.isRequired,
  clipError: PropTypes.object
}
export default reduxForm({
  form: 'addClipForm'
})(AddClipForm)
