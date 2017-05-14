import {combineReducers} from 'redux'
import clipPageReducer from './clipReducer'
import commonReducer from './commonReducer'
import authReducer from './authReducer'
import clipErrorReducer from './clipErrorReducer'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  clipPage: clipPageReducer,
  common: commonReducer,
  auth: authReducer,
  form: formReducer,
  clipError: clipErrorReducer
})

export default reducers
