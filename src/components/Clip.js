import React from 'react'
import PropTypes from 'prop-types'

const Clip = ({clipURL}) => {
  return (
    <div className="center-block clip-wrapper">
      <iframe src={clipURL} frameBorder="0" allowFullScreen className="clip" />
    </div>
  )
}

Clip.propTypes = {
  clipURL: PropTypes.string.isRequired
}

export default Clip
