import React from 'react'
import PropTypes from 'prop-types'
import Clip from './Clip'
require('Styles/clipslist.less')

class ClipList extends React.Component {
  renderClipWrapper = clipButtons => {
    if (clipButtons) {
      return function(clip) {
        return (
          <div key={clip.id} className="mb-3">
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

  render() {
    const {clips, clipButtons} = this.props
    const renderClip = this.renderClipWrapper(clipButtons)
    if (clips.length == 0) {
      return <div className="default-height-container" />
    }

    return (
      <div
        className={
          clipButtons ? 'container-fluid admin-clips-wrapper' : 'container-fluid text-center'
        }
      >
        <div className="row flex-wrap justify-content-center">
            {clips.map(clip => renderClip(clip))}
        </div>
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
