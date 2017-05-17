import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removeClip, editClip} from '../actions/clip'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-bootstrap'

//field validation
const required = value => (value ? undefined : 'Required')

const renderField = ({input, label, id, isDisabled, type, meta: {touched, error, warning}}) => {
  return (
    <div>
      <label>{label}</label>
      <div className="input-wrapper">
        <input {...input} type={type} disabled={isDisabled} id={id} /><label htmlFor={id} />
        {touched &&
          ((error && <span className="form-warn">{error}</span>) ||
            (warning && <span className="form-warn">{warning}</span>))}
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
    return (
      <div className="edit-clip">
        <form onSubmit={this.props.handleSubmit(this.editClipWrapper)}>

          {this.renderSuccessOrErr(this.props.clipError, this.props.successOnEdit)}
          <div className="url">
            <label>URL</label>
            <span>{clip.url}</span>
          </div>
          <label>TAG</label>
          <Field name="tag" component="select" label="TAG">
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

          <div className="edit-buttons">
            <Button bsSize="lg" bsStyle="success" className="edit-btn" type="submit">
              Save
            </Button>
            <Button
              bsStyle="danger"
              bsSize="lg"
              className="delete-btn"
              onClick={() => this.props.removeClip(clip.id)}
            >
              Delete
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
EditClipForm.PropTypes = {
  clip: PropTypes.object.isRequired,
  editClip: PropTypes.func.isRequired,
  removeClip: PropTypes.func.isRequired,
  clipError: PropTypes.object,
  editSuccess: PropTypes.object,
  presentationURL: PropTypes.string.isRequired
}
EditClipForm = reduxForm({
  form: 'editClipForm'
})(EditClipForm)

function mapStateToProps(state) {
  let clip = state.clipPage.editedClip
  let presentationURL = state.clipPage.presentationURL
  return {
    presentationURL: state.clipPage.presentationURL,
    clipError: state.clipError.error,
    successOnEdit: state.clipEdit.successOnEdit,
    initialValues: {
      tag: clip.tag,
      title: clip.title,
      isPresentation: clip.url == presentationURL ? true : false
    },
    clip: clip
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editClip, removeClip}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditClipForm)
