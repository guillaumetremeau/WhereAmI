import { combineReducers } from 'redux'

import gameState from './gameState'
import score from './score'
import setScore from './setScore'

import {gameState as gameStateI} from './gameState'
import {score as scoreI} from './score'
import { setScore as setScoreI } from './setScore'

export interface RootState {
  gameState: gameStateI,
  score: scoreI,
  setScore: setScoreI
}

export default combineReducers({
  gameState,
  score,
  setScore
})