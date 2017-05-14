import {AUTH_SUCCESS, AUTH_FAILURE, SIGN_OUT_USER, AUTH_REQUEST} from './actionTypes'
import Firebase from 'firebase'

export function authRequest() {
	return {
		type: AUTH_REQUEST
	}
}

export function authUser() {
	return {
		type: AUTH_SUCCESS
	}
}

export function authError(error) {
	return {
		type: AUTH_FAILURE,
		payload: error
	}
}

export function signOutUser() {
	Firebase.auth().signOut()
	return {
		type: SIGN_OUT_USER
	}
}

export function signOutAndRedirect(push) {
	return function(dispatch) {
		dispatch(signOutUser())
		push('/')
	}
}

export function signInUser(credentials, push) {
	return function(dispatch) {
		dispatch(authRequest())
		Firebase.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch(authUser())
				push('/admin')
			})
			.catch(error => {
				dispatch(authError(error))
			})
	}
}
