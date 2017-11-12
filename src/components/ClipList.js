import React from 'react'
import PropTypes from 'prop-types'
import Clip from './Clip'
require('Styles/clipslist.less')

class ClipList extends React.Component {
  renderClipWrapper = clipButtons => {
    if (clipButtons) {
      return function(clip) {
        return (
          <div key={clip.id} className="col-lg-4 col-md-4">
            <Clip clipURL={clip.url} />
            {clipButtons(clip)}
          </div>
        )
      }
    } else {
      return function(clip) {
        return <Clip clipURL={clip.url} key={clip.id} />
      }
    }
  }

  clipsPerPage(clips, perPage, activePage) {
    const start_offset = (activePage - 1) * perPage
    let start_count = 0

    let clipsToDisplay = []
    clips.map((clip, index) => {
      if (index >= start_offset && start_count < perPage) {
        start_count++
        clipsToDisplay.push(clip)
      }
    })
    return clipsToDisplay
  }

  render() {
    const {clips, clipButtons} = this.props
    const pages = Math.ceil(clips.length / perPage)
    const renderClip = this.renderClipWrapper(clipButtons)
    if (clips.length === 0) {
      return <div className="default-height-container" />
    }

    return (
        <div className="d-flex container-fluid default-height-container justify-content-around align-items-center px-5">
            {clips.map(clip => renderClip(clip))}
        </div>
    )
  }
}

ClipList.propTypes = {
  clips: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  clipButtons: PropTypes.func
}

export default ClipList
