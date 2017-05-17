import * as actions from '../actions/actionTypes'

const initialState = {
  successOnEdit: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_CLIP_SUCCESS:
    case actions.EDIT_CLIP_SUCCESS:
      return {successOnEdit: true}
    case actions.RESET_ERROR_AND_SUCCESSONEDIT:
      return {successOnEdit: null}

    default:
      return state
  }
}
