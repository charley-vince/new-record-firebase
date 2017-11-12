import React from 'react'
import PropTypes from 'prop-types'
import Notification from './Notification'
import Loading from './Loading'

class Home extends React.Component {
  componentDidMount() {
    if (this.props.presentationURL == '') {
      this.props.getPresentationClip()
    }
  }

  render() {
    const {presentationURL, isFetching, clipError} = this.props
    const isEmpty = presentationURL.length === 0
    if (clipError && isEmpty) {
      return (
        <div className="default-height-container">
          <Notification error={clipError} />
        </div>
      )
    }
    return (
      <div className="nr-home-container default-height-container">
        {isEmpty
          ? isFetching ? <Loading /> : <div className="default-height-container" />
          : <iframe className="home-clip" src={presentationURL} frameBorder="0" allowFullScreen />}
      </div>
    )
  }
}

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPresentationClip: PropTypes.func.isRequired,
  presentationURL: PropTypes.string.isRequired
}

export default Home
