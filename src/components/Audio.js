import React from 'react'
import PropTypes from 'prop-types'
require('Styles/player.less')


var players = [];
class Audio extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillUnmount () {
		players.forEach((player) => {
			player.destroy();
		})
	}

	componentDidMount() {
		players.push(new APlayer({
			element: document.getElementById(this.props.audio.title),
			mutex: true,
			mode: 'order',
			music: {
				title: this.props.audio.title,
				author: this.props.audio.author,
				url: this.props.audio.url,
				pic: this.props.audio.cover,
			}
		}));
	}

	render() {
		return (
			<div className="w-100 d-flex justify-content-center">
				<div id={this.props.audio.title} className="aplayer">
				</div>
			</div>
		)
	}
}

Audio.propTypes = {
    audio: PropTypes.object.isRequired
};

export default Audio