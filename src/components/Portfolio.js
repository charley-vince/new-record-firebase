import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Notification from './Notification'
import Clip from './Clip'
require('Styles/clipslist.less')

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.tag != nextProps.tag) {
      this.props.getClipList(nextProps.tag)
    }
  }
  componentDidMount() {
    if (this.props.clipList.tag != this.props.tag) {
      this.props.getClipList(this.props.tag)
    }
  }
	renderClipWrapper = () => {
          return function(clip) {
              return <Clip clipURL={clip.url} key={clip.id} />
		}
	}
  render() {
    const renderClip = this.renderClipWrapper()
    const {isFetching, clipList, tag, clipError} = this.props
    //Consider empty if clips for current tag weren't fetched, or fetched empty list
    const isEmpty = clipList.tag != tag || clipList.clips.length === 0
    if (clipError && isEmpty) {
      return
      ;<Notification error={clipError} />
    }
    if (isFetching) {
      return (
        <div className="default-height-container">
          <Loading />
        </div>
      )
    }
    return (
      <div className="d-flex flex-wrap justify-content-center align-items-center default-height-container nr-portfolio-container p-5">
        {!isEmpty
          ?  clipList.clips.map(clip => renderClip(clip))
          : <div />}
      </div>
    )
  }
}

Portfolio.propTypes = {
  tag: PropTypes.string.isRequired,
  getClipList: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  clipList: PropTypes.object.isRequired
}

export default Portfolio
