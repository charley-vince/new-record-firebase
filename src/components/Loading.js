import React from 'react'
import {ChasingDots} from 'better-react-spinkit'
import {default as Fade} from 'react-fade'
require('Styles/loading.less')

const Loading = () => {
  return (
    <div className="text-center loading-wrapper default-height-container">
      <Fade>
        <ChasingDots size={50} color="#AD1318" className="loading" />
      </Fade>
    </div>
  )
}
export default Loading
