import * as actions from '../actions/actionTypes'

const initialState = {
  contentList: {
    tag: '',
    data: []
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
      let newClips = state.contentList.data.filter(item => {
        return item.id != removedClipID
      })
      return {...state, contentList: {...state.contentList, data: newClips}}
    }
    case actions.GET_CLIP_LIST_SUCCESS: {
      return {
        ...state,
        contentList: {data: action.payload.data, tag: action.payload.tag},
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
      state.contentList.data.forEach(item => {
        if (item.id == editedClip.id) {
          item = editedClip
        }
        newClips.push(item)
      })
      return {...state, contentList: {...state.contentList, data: newClips}}
    }

    default:
      return state
  }
}
