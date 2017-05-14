import {CHANGE_LANGUAGE} from './actionTypes'
import cookie from '../utils/helpers'

export function changeLanguage(lang) {
  cookie.setCookie('lang', lang)
  return {
    type: CHANGE_LANGUAGE
  }
}
