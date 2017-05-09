import * as actions from '../actions/actionTypes'

const initialState = {
	clipList: {
		tag: '',
		clips: []
	},
	presentationURL: '',
	isFetching: false,
}

export default function(state = initialState, action) {
	switch (action.type) {
		// case actions.CONNECTION_LOST:
		// case actions.CONNECTION_ESTABLISHED:
		case actions.GET_CLIP_LIST_REQUEST:
		case actions.GET_PRESENTATION_CLIP_REQUEST:
			return {...state, isFetching: true}

		case actions.REMOVE_CLIP_SUCCESS: {
			let removedClipID = action.payload
			let newClips = state.clipList.clips.filter(clip => {
				return clip.id != removedClipID
			})
			return {...state, clipList: {...state.clipList, clips: newClips}}
		}
		case actions.GET_CLIP_LIST_SUCCESS: {
			return {
				...state,
				clipList: {clips: action.payload.clips, tag: action.payload.tag},
				isFetching: false
			}
		}
		case actions.GET_PRESENTATION_CLIP_SUCCESS: {
			return {...state, presentationURL: action.payload, isFetching: false}
		}

		case actions.GET_PRESENTATION_CLIP_FAILURE:
		case actions.GET_CLIP_LIST_FAILURE:
			return {...state, isFetching: false}

		case actions.ADD_CLIP_FAILURE:
		case actions.REMOVE_CLIP_FAILURE:
		case actions.CHANGE_PRESENTATION_CLIP_FAILURE:
			return {...state}

		case actions.ADD_CLIP_SUCCESS:
		case actions.CHANGE_PRESENTATION_CLIP_SUCCESS:
		case actions.ADD_CLIP_REQUEST:
		case actions.CHANGE_PRESENTATION_CLIP_REQUEST:
		case actions.REMOVE_CLIP_REQUEST: {
			return {...state}
		}
		default:
			return state
	}
}
