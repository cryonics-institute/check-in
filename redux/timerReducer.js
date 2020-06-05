/**
 * Redux reducer for the project, Check-In, that stores in state all
 * JavaScript timers used throughout the app.
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

import * as ActionTypes from './ActionTypes'

export const Timer = (
  state = {
    errMess: null,
    interval: null,
    timers: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_TIMER_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.SET_TIMER_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.SET_TIMER_FULFILLED:
      return {
        ...state,
        errMess: null,
        timers: action.payload
          ? state.timers.concat(action.payload)
          : state.timers
      }

    case ActionTypes.SET_TIMER_INTERVAL_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.SET_TIMER_INTERVAL_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.SET_TIMER_INTERVAL_FULFILLED:
      return {
        ...state,
        interval: action.payload
      }

    case ActionTypes.REMOVE_TIMERS_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.REMOVE_TIMERS_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.REMOVE_TIMERS_FULFILLED:
      return {
        ...state,
        timers: []
      }

    default:
      return state
  }
}
