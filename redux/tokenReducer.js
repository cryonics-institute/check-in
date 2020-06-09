/**
 * Redux reducer for the project, Check-In, that securely persists
 * signin information for auto-signin when the app is closed.
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
  +errMess: string,
  +username: string,
  +password: string
}

type Action = {
  type: 'REGISTRATION_REQUESTED',
  errMess: string
} | {
  type: 'REGISTRATION_REJECTED',
  errMess: string
} | {
  type: 'REGISTRATION_FULFILLED',
  errMess: string,
  username: string,
  password: string
} | {
  type: 'SIGNIN_REQUESTED',
  errMess: string
} | {
  type: 'SIGNIN_REJECTED',
  errMess: string
} | {
  type: 'SIGNIN_FULFILLED',
  errMess: string,
  username: string,
  password: string
} | {
  type: 'SIGNOUT_REQUESTED',
  errMess: string
} | {
  type: 'SIGNOUT_REJECTED',
  errMess: string
} | {
  type: 'SIGNOUT_FULFILLED',
  errMess: string,
  username: string,
  password: string
}

export const Token = (
  state: State = {
    errMess: null,
    username: null,
    password: null
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.REGISTRATION_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.REGISTRATION_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.REGISTRATION_FULFILLED:
      return {
        ...state,
        errMess: null,
        username: action.payload.creds.username,
        password: action.payload.creds.password
      }

    case ActionTypes.SIGNIN_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.SIGNIN_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.SIGNIN_FULFILLED:
      return {
        ...state,
        errMess: null,
        username: action.payload.creds.username,
        password: action.payload.creds.password
      }

    case ActionTypes.SIGNOUT_REQUESTED:
      return {
        ...state,
        errMess: null
      }

    case ActionTypes.SIGNOUT_REJECTED:
      return {
        ...state,
        errMess: action.payload
      }

    case ActionTypes.SIGNOUT_FULFILLED:
      return {
        ...state,
        errMess: null,
        username: null,
        password: null
      }

    default:
      return state
  }
}
