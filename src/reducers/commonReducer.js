import {CHANGE_LANGUAGE} from '../actions/actionTypes'
import cookie from '../utils/helpers'

const initialState = {
  currentLang: cookie.getCookie('lang') || 'us'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {...state}
    }
    default:
      return state
  }
}
