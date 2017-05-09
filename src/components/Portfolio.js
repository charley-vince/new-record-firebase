import React from 'react'
import PropTypes from 'prop-types'
import ClipList from './ClipList'
import Loading from './Loading'
import Notification from './Notification'

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.changePage = this.changePage.bind(this)
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
	changePage = newPage => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: '?tag=' + this.props.tag + '&page=' + newPage + ''
		})
	}
	render() {
		const {isFetching, clipList, activePage, tag, clipError} = this.props
		//Consider empty if clips for current tag weren't fetched, or fetched empty list
		const isEmpty = clipList.tag!=tag || clipList.clips.length === 0
		if (clipError && isEmpty) {
			return <Notification error={clipError} />
		}
		if (isFetching) {
			return <Loading />
		}
		return (
			<div>
				{!isEmpty
					? <ClipList
							perPage={3}
							clips={clipList.clips}
							activePage={activePage}
							changePage={this.changePage}
						/>
					: <div className="default-height-container" />}
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
