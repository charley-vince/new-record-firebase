import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-bootstrap'

//field validation
const required = value => (value ? undefined : 'Required')

const renderField = ({input, label, id, isDisabled, type, meta: {touched, error, warning}}) => {
  return (
    <div>
      <label>{label}</label>
      <div className="input-wrapper">
        <input className="p-2 mb-2 w-100" {...input} type={type} disabled={isDisabled} id={id} /><label htmlFor={id} />
        {touched &&
          ((error && <span className="edit-error">{error}</span>) ||
            (warning && <span className="edit-error">{warning}</span>))}
      </div>
    </div>
  )
}

class EditClipForm extends React.Component {
  renderSuccessOrErr = (error, success) => {
    if (error !== null) {
      return <div className="alert alert-danger">{error}</div>
    } else if (success == true) {
      return <div className="alert alert-success">Success</div>
    }
    ;<div />
  }

  editClipWrapper = values => {
    this.props.editClip({
      title: values.title,
      tag: values.tag,
      id: this.props.clip.id,
      url: this.props.clip.url,
      setAsPresentation: values.isPresentation && this.props.clip.url != this.props.presentationURL
    })
  }
  render() {
    let {clip, presentationURL} = this.props
    return (clip?
      <div className="nr-admin-video-edit-container">
        <form onSubmit={this.props.handleSubmit(this.editClipWrapper)}>

          {this.renderSuccessOrErr(this.props.clipError, this.props.successOnEdit)}
          <div className="url text-center">
            <span>{clip.url}</span>
          </div>
          <label>TAG</label>
          <Field className="mb-3" name="tag" component="select" label="Tag">
            <option value="weddings">weddings</option>
            <option value="voice">voice</option>
            <option value="other">other</option>
          </Field>

          <Field
            name="title"
            component={renderField}
            validate={[required]}
            type="text"
            placeholder="Title"
            label="TITLE"
          />

          <Field
            name="isPresentation"
            component={renderField}
            type="checkbox"
            label="Set on Home page"
            id="presentation-checkbox"
            isDisabled={clip.url === presentationURL}
          />

          <div className="d-flex justify-content-between edit-buttons">
            <button
              className="btn btn-danger"
              onClick={() => this.props.removeClip(clip.id)}
            >
              Delete
            </button>
            <button  className="btn btn-success" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>:null
    )
  }
}
EditClipForm.PropTypes = {
  clip: PropTypes.object.isRequired,
  editClip: PropTypes.func.isRequired,
  removeClip: PropTypes.func.isRequired,
  clipError: PropTypes.object,
  successOnEdit: PropTypes.object,
  presentationURL: PropTypes.string.isRequired
}
export default reduxForm({
  form: 'editClipForm'
})(EditClipForm)
