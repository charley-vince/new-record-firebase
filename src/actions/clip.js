import * as actions from '../actions/actionTypes'
import {hex_md5} from '../utils/md5.js'
import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyB7TSW6LIxtB0skK6ODXs4BT4jmOwFlXP4",
	authDomain: "test-593db.firebaseapp.com",
	databaseURL: "https://test-593db.firebaseio.com",
	projectId: "test-593db",
	storageBucket: "test-593db.appspot.com",
	messagingSenderId: "1008426012262"
}
firebase.initializeApp(config)

export function addClip(clip) {
	return dispatch => {
		dispatch({
			type: actions.ADD_CLIP_REQUEST
		})

		let urlHash = hex_md5(clip.url)
		firebase
			.database()
			.ref('clips')
			.child(urlHash)
			.set({
				title: clip.title,
				url: clip.url,
				urlMD5: urlHash,
				tag: clip.tag
			})
			.then(() => {
				dispatch({
					type: actions.ADD_CLIP_SUCCESS
				})
			})
			.catch(error => {
				dispatch({
					type: actions.ADD_CLIP_FAILURE,
					payload: error.message
				})
			})
	}
}

export function getClipList(tag) {
	return dispatch => {
		dispatch({
			type: actions.GET_CLIP_LIST_REQUEST
		})

		firebase
			.database()
			.ref()
			.child('clips')
			.orderByChild('tag')
			.equalTo(tag)
			.once('value')
			.then(snapshot => {
				let data = []
				snapshot.forEach(function (item) {
					data.push({
						url: item.val().url,
						id: item.val().urlMD5,
						tag: item.val().tag,
						title: item.val().title,
						cover: item.val().cover,
						author: item.val().author
					})
				})
				dispatch({
					type: actions.GET_CLIP_LIST_SUCCESS,
					payload: {
						tag: tag,
						data: data
					}
				})
			})
			.catch(error => {
				dispatch({
					type: actions.GET_CLIP_LIST_FAILURE,
					payload: error.message
				})
			})
	}
}

export function getPresentationClip() {
	return dispatch => {
		dispatch({
			type: actions.GET_PRESENTATION_CLIP_REQUEST
		})

		firebase
			.database()
			.ref('clips/presentation')
			.once('value')
			.then(response => {
				dispatch({
					type: actions.GET_PRESENTATION_CLIP_SUCCESS,
					payload: response.val()
				})
			})
			.catch(error => {
				dispatch({
					type: actions.GET_PRESENTATION_CLIP_FAILURE,
					payload: error.message
				})
			})
	}
}

export function removeClip(id) {
	return dispatch => {
		dispatch({
			type: actions.REMOVE_CLIP_REQUEST
		})

		firebase
			.database()
			.ref('clips')
			.child(id)
			.remove()
			.then(() => {
				dispatch({
					type: actions.REMOVE_CLIP_SUCCESS,
					payload: id
				})
			})
			.catch(error => {
				dispatch({
					type: actions.REMOVE_CLIP_FAILURE,
					payload: error.message
				})
			})
	}
}

export function editClip(clip) {
	return dispatch => {
		dispatch({
			type: actions.EDIT_CLIP_REQUEST
		})
		let updates = {}
		updates['/clips/' + clip.id + '/tag'] = clip.tag
		updates['/clips/' + clip.id + '/title'] = clip.title
		if (clip.setAsPresentation) {
			updates['/clips/presentation'] = clip.url
		}
		firebase
			.database()
			.ref()
			.update(updates)
			.then(() => {
				if (clip.setAsPresentation) {
					dispatch({
						type: actions.CHANGED_PRESENTATION_CLIP,
						payload: clip.url
					})
				}
				dispatch({
					type: actions.EDIT_CLIP_SUCCESS,
					payload: clip
				})
			})
			.catch(error => {
				dispatch({
					type: actions.EDIT_CLIP_FAILURE,
					payload: error.message
				})
			})
	}
}

export function setEditedClip(clip) {
	return {
		type: actions.SET_EDITED_CLIP,
		payload: clip
	}
}

export function resetErrorAndSuccess() {
	return {
		type: actions.RESET_ERROR_AND_SUCCESSONEDIT
	}
}

// export function checkConnection() {
// 	return dispatch => {
// 		var connectedRef = firebase.database().ref('.info/connected')
// 		connectedRef.on('value', function(snap) {
// 			if (snap.val() === true) {
// 				dispatch({
// 					type: CONNECTION_ESTABLISHED
// 				})
// 			} else {
// 				dispatch({
// 					type: CONNECTION_LOST
// 				})
// 			}
// 		})
// 	}
// }
