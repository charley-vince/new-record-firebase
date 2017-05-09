import React from 'react'
import PropTypes from 'prop-types'
import Clip from './Clip'
import {Pagination} from 'react-bootstrap'
require('Styles/clipslist.less')

class ClipList extends React.Component {

	renderClipWrapper = clipButtons => {
		if (clipButtons) {
			return function(clip) {
				return (
				<div key={clip.id} className="admin-clip-wrapper">
					<Clip clipURL={clip.url} />
					{clipButtons(clip)}
				</div>
			)
			}
		} else {
			return function(clip) {
				return (
				<Clip clipURL={clip.url} key={clip.id} />
			)
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
		const {clips, activePage, changePage,perPage,clipButtons} = this.props
		const pages = Math.ceil(clips.length / perPage)
		const renderClip = this.renderClipWrapper(clipButtons)
		if (clips.length==0) {
			return <div className="default-height-container" />
		}

		return (
			<div className={clipButtons ? 'container-fluid admin-clips-wrapper' : 'container-fluid text-center'}>
				<div className="row">
				<Pagination
					className={clips.length === 0 ? 'hidden' : 'shown pagination-color'}
					prev
					next
					bsClass="custom-pagination"
					bsSize="medium"
					items={pages}
					activePage={activePage}
					onSelect={changePage}
				/>

				<div className='clips-wrapper'>
					{this.clipsPerPage(clips, perPage, activePage).map(clip => renderClip(clip))}
				</div>

				<Pagination
					className={clips.length === 0 ? 'hidden' : 'shown pagination-color'}
					prev
					next
					bsClass="custom-pagination"
					bsSize="medium"
					items={pages}
					activePage={activePage}
					onSelect={changePage}
				/>
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
	activePage: PropTypes.number.isRequired,
	clipButtons: PropTypes.func
}

export default ClipList
