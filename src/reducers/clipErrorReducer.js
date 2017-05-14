import * as actions from '../actions/actionTypes'

const initialState = {
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CLIP_LIST_REQUEST:
    case actions.GET_PRESENTATION_CLIP_REQUEST:
    case actions.ADD_CLIP_REQUEST:
    case actions.CHANGE_PRESENTATION_CLIP_REQUEST:
    case actions.REMOVE_CLIP_REQUEST:
    case actions.ADD_CLIP_SUCCESS:
    case actions.CHANGE_PRESENTATION_CLIP_SUCCESS:
      return {error: null}

    case actions.GET_PRESENTATION_CLIP_FAILURE:
		case actions.GET_CLIP_LIST_FAILURE:
    case actions.ADD_CLIP_FAILURE:
    case actions.REMOVE_CLIP_FAILURE:
    case actions.CHANGE_PRESENTATION_CLIP_FAILURE:
      return {error: action.payload}

    default:
      return state
  }
}
