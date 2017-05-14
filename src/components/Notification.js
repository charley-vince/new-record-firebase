import React from 'react'

const Notification = ({error}) => {
  let result = null
  if (error != null) {
    result = (
      <div className="default-height-container">
        <div className="alert alert-danger text-center" style={{borderRadius: 0}}>
          <span>ERROR: {error}</span>
        </div>
      </div>
    )
  }
  return result
}

export default Notification
