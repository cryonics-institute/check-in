/**
 * Tests for Redux action-creators for the project, Cryonics Check-In.
 *
 * @author Michael David Gill <michaelgill1969@gmail.com>
 * @license
 * Copyright 2019 Cryonics Institute
 *
 * This file is part of Cryonics Check-In.
 *
 * Cryonics Check-In is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * Cryonics Check-In is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Cryonics Check-In.  If not, see <https://www.gnu.org/licenses/>.
 */

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import * as Actions from './ActionCreators'
import * as ActionTypes from './ActionTypes'

const middlewares = [thunk, logger]
const mockStore = configureStore(middlewares)

/**
 * Getting a random integer between two values, inclusive.  Both, the maximum
 * and the minimum are inclusive.
 * @param {Integer}   min Minimum end of range.
 * @param {Integer}   max Maximum end of range.
 * @return {Integer}      Random integer.
 * @see Mozilla. (2019). Math.random() [Software documentation]. Retrieved from {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 */
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
}

describe(
  'setListener',
  () => {
    beforeEach(
      () => { // Runs before each test in the suite
        store.clearActions()
      }
    )

    const store = mockStore(
      {
        patient: {
          alertTimes: [
            {
              id: 'RiK-fQFj',
              time: '1970-01-01T06:00:00.000Z',
              validity: true
            },
            {
              id: 'vgsRueN0',
              time: '1970-01-01T12:00:00.000Z',
              validity: true
            },
            {
              id: 'IUIPqCHx',
              time: '1970-01-01T18:00:00.000Z',
              validity: true
            },
            {
              id: 'SakR1lCV',
              time: '1970-01-02T00:00:00.000Z',
              validity: true
            }
          ],
          checkinInterval: 5000,
          checkinTime: '2019-10-31T22:47:02.340Z',
          email: 'a@a.aa',
          errMess: null,
          isSignedIn: true,
          listeners: [],
          signinTime: '2019-10-31T22:45:35.794Z',
          snooze: 9
        }
      }
    )

    for (var i = 0; i < 100; i++) {
      const today = (new Date())
      const now = (
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          getRandomIntInclusive(0, 23),
          getRandomIntInclusive(0, 59)
        )
      ).toISOString()

      test(
        'fulfills',
        async () => {
          await store.dispatch(
            Actions.setListener(
              store.getState().patient.alertTimes,
              store.getState().patient.checkinTime,
              store.getState().patient.email,
              store.getState().patient.isSignedIn,
              now,
              true
            )
          )

          // console.log(store.getActions())
          const actionTypes = store.getActions().map(action => action.type)
          // console.log(actionTypes)
          await expect(actionTypes).toContain(ActionTypes.SET_LISTENER_FULFILLED)
        }
      )

      test(
        'is defined',
        async () => {
          await store.dispatch(
            Actions.setListener(
              store.getState().patient.alertTimes,
              store.getState().patient.checkinTime,
              store.getState().patient.email,
              store.getState().patient.isSignedIn,
              now,
              true
            )
          )

          const actionPayload = store.getActions().find(
            action => action.payload !== undefined
          ).payload
          // console.log(actionPayload)
          await expect(actionPayload).toBeDefined()
        }
      )

      test(
        'returns integer',
        async () => {
          await store.dispatch(
            Actions.setListener(
              store.getState().patient.alertTimes,
              store.getState().patient.checkinTime,
              store.getState().patient.email,
              store.getState().patient.isSignedIn,
              now,
              true
            )
          )

          const actionPayload = store.getActions().find(
            action => action.payload !== undefined
          ).payload
          // console.log(actionPayload)
          await expect(Number.isInteger(actionPayload)).toBe(true)
        }
      )

      test(
        'is positive',
        async () => {
          await store.dispatch(
            Actions.setListener(
              store.getState().patient.alertTimes,
              store.getState().patient.checkinTime,
              store.getState().patient.email,
              store.getState().patient.isSignedIn,
              now,
              true
            )
          )

          const actionPayload = store.getActions().find(
            action => action.payload !== undefined
          ).payload
          // console.log(actionPayload)
          await expect(actionPayload).toBeGreaterThanOrEqual(0)
        }
      )
    }
  }
)
