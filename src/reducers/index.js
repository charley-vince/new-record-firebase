import {combineReducers} from 'redux'
import clipPageReducer from './clipReducer'
import commonReducer from './commonReducer'
import authReducer from './authReducer'
import clipError from './clipErrorReducer'
import clipEditSuccess from './clipEditReducer'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  clipPage: clipPageReducer,
  common: commonReducer,
  auth: authReducer,
  form: formReducer,
  clipError: clipError,
  clipEdit: clipEditSuccess
})

export default reducers
