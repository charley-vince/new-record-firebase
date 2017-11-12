import React from 'react'
import PropTypes from 'prop-types'

const Clip = ({clipURL}) => {
  return (
      <iframe src={clipURL} frameBorder="0" allowFullScreen className="nr-portfolio-clip m-3"/>
  )
}

Clip.propTypes = {
  clipURL: PropTypes.string.isRequired
}

export default Clip
