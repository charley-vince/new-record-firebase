import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Notification from './Notification'
import Clip from './Clip'
import Audio from './Audio'

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
		if (this.props.contentList.tag != this.props.tag) {
			this.props.getClipList(this.props.tag)
		}
	}

	renderClipWrapper = () => {
		return function (clip) {
			return <Clip clipURL={clip.url} key={clip.id}/>
		}
	}

	renderAudioWrapper = () => {
		return function (audio) {
			return <Audio audio={audio} key={audio.id}/>
		}
	}

	render() {
		let renderContent;
		let className = "d-flex flex-wrap justify-content-center default-height-container nr-portfolio-container p-5";
		const {isFetching, contentList, tag, clipError} = this.props;
		if(tag === 'voice') {
			renderContent = this.renderAudioWrapper();
		} else {
			renderContent = this.renderClipWrapper();
			className += " align-items-center";
		}
		//Consider empty if clips for current tag weren't fetched, or fetched empty list

		const isEmpty = contentList.tag != tag || contentList.data.length === 0
		if (clipError && isEmpty) {
			return
				;
			<Notification error={clipError}/>
		}
		if (isFetching) {
			return (
				<div className="default-height-container">
					<Loading/>
				</div>
			)
		}
		return (
			<div
				className={className}>
				{!isEmpty
					?  contentList.data.map(content => renderContent(content))
					: <div />
				}
			</div>
		)
	}
}

Portfolio.propTypes = {
	tag: PropTypes.string.isRequired,
	getClipList: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	contentList: PropTypes.object.isRequired
}

export default Portfolio
