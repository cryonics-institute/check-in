/**
 * Redux reducer for the project, Check-In, that stores information for
 * time inputs on the users home screen.
 *
 * @author Michael David Gill <michaelgill1969@gmail.com>
 * @license
 * Copyright 2019 Cryonics Institute
 *
 * This file is part of Check-In.
 *
 * Check-In is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * Check-In is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Check-In.  If not, see <https://www.gnu.org/licenses/>.
 */

// @flow
import * as ActionTypes from './ActionTypes'

type State = {
  errMess: string,
  height: number,
  showTip: boolean
}

export const Inputs = (
  state: State = {
    errMess: null,
    height: null,
    showTip: true
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.HIDE_TIP_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.HIDE_TIP_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.HIDE_TIP_FULFILLED:
      return {
        ...state,
        showTip: false
      }

    case ActionTypes.MUTATE_INPUTS_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.SET_INPUT_PARAMETERS_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.SET_INPUT_PARAMETERS_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.SET_INPUT_PARAMETERS_FULFILLED:
      return {
        ...state,
        errMess: null,
        height: action.payload
      }

    default:
      return state
  }
}
