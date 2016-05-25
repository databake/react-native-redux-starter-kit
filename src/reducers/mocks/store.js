/**
 * # Store.js
 * 
 * This mocks the Redux store
 */
'use strict';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

module.exports = mockStore;