import React from 'react'
import PropTypes from 'prop-types'
import ToolBar from './AdminToolBar'
import {Button} from 'react-bootstrap'
import ClipList from './ClipList'
import Notification from './Notification'
import Loading from './Loading'
require('Styles/admin.less')

class AdminPage extends React.Component {
	constructor(props) {
		super(props)
		this.changePage = this.changePage.bind(this)
	}
	componentWillMount() {
		if (!this.props.authenticated) {
			this.props.history.push('/login')
		}
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
	changePage(newPage) {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: '?tag=' + this.props.tag + '&page=' + newPage + ''
		})
	}

	switchTag = e => {
		if (this.props.tag != e.target.value) {
			window.scrollTo(0, 0)
			this.props.history.push({
				pathname: this.props.location.pathname,
				search: '?tag=' + e.target.value + '&page=1'
			})
		}
	}

	clipButtons = clip => {
		return (
			<div className="under-clip-buttons">
				<Button bsSize="small" onClick={() => this.props.removeClip(clip.id)} bsStyle="danger">
					delete
				</Button>
				<Button
					bsSize="small"
					onClick={() => this.props.setPresentationClip(clip.url)}
					bsStyle="warning"
				>
					set as presentation
				</Button>
			</div>
		)
	}

	render() {
		const {
			isFetching,
			clipList,
			activePage,
			tag,
			getClipList,
			signOutAndRedirect,
			history,
			clipError
		} = this.props
		const isEmpty = clipList.tag != tag || clipList.clips.length === 0
		return (
			<div className="admin-page">
				<ToolBar signOutAndRedirect={signOutAndRedirect} history={history} />
				<div className="choose-by-tag">
					<p>Выбрать видео по тегу:</p>
					<select name="tag" onChange={e => this.switchTag(e)} value={tag}>
						<option value="weddings">weddings</option>
						<option value="voice">voice</option>
						<option value="other">other</option>
					</select>
					<Button
						bsStyle="success"
						onClick={() => getClipList(tag)}
						className="refresh-by-tag"
						type="button"
						value="Обновить"
					>
						Обновить
					</Button>
				</div>
				{isEmpty
					? isFetching ? <Loading /> : clipError ? <Notification error={clipError} /> : <div />
					: <ClipList
							clips={clipList.clips}
							activePage={activePage}
							changePage={this.changePage}
							perPage={3}
							clipButtons={this.clipButtons}
						/>}
			</div>
		)
	}
}

AdminPage.PropTypes = {
	clips: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	tag: PropTypes.string.isRequired,
	getClipList: PropTypes.func.isRequired,
	removeClip: PropTypes.func.isRequired,
	setPresentationClip: PropTypes.func.isRequired,
	signOutAndRedirect: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired
}

export default AdminPage
