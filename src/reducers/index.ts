import { combineReducers } from 'redux'
import gameState from './gameState'
import score from './score'

export default combineReducers({
  gameState,
  score
})