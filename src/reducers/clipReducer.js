import * as actions from '../actions/actionTypes'

const initialState = {
  clipList: {
    tag: '',
    clips: []
  },
  editedClip: {},
  presentationURL: '',
  isFetching: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.SET_EDITED_CLIP:
      return {...state, editedClip: action.payload}
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
    case actions.CHANGED_PRESENTATION_CLIP:
      return {...state, presentationURL: action.payload}

    case actions.GET_PRESENTATION_CLIP_FAILURE:
    case actions.GET_CLIP_LIST_FAILURE:
      return {...state, isFetching: false}

    case actions.EDIT_CLIP_SUCCESS: {
      let editedClip = action.payload
      var newClips = []
      state.clipList.clips.forEach(clip => {
        if (clip.id == editedClip.id) {
          clip = editedClip
        }
        newClips.push(clip)
      })
      return {...state, clipList: {...state.clipList, clips: newClips}}
    }

    default:
      return state
  }
}
