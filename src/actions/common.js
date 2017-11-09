import {CHANGE_LANGUAGE} from './actionTypes'
import cookie from '../utils/helpers'
import axios from 'axios'

export function changeLanguage(lang) {
  cookie.setCookie('lang', lang)
  return {
    type: CHANGE_LANGUAGE
  }
}


export function saveWdata (wdata) {
    axios.post('/api/wdata/save', {	wdata : wdata}).then(function(res) {
		if (res.status == 200) {
			alert('success')
			history.push('/')
		} else {
			alert('fail')
		}
	})
		.catch(function(err) {
			alert(err)
    })
}