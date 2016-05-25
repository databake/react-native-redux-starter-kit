/* @flow */

'use strict';

jest.autoMockOff();

const mockStore = require('../mocks/Store');
const sut = require('../index').data;
const actions = require('../index');

describe('reducer', () => {

    describe('request data type', () => {
        let next = sut(undefined, { type: 'REQUEST_DATA' });

        it('message is empty by default', () => {
            expect(next.message).toEqual('');
        });
        it('isFetching is true', () => {
            expect(next.isFetching).toBe(true);
        });

    })

    describe('receive data type', () => {
        let next = sut(undefined, { type: 'RECEIVE_DATA', data: { message: 'hi' } })

        it('isFetching is false', () => {
            expect(next.isFetching).toBe(false);
        })

        it('should receive a message', () => {
            expect(next.message).toEqual('hi');
        })

        it('should fetchData', () => {
            const expectedActions = [
                { type: 'REQUEST_DATA' },
                { type: 'RECEIVE_DATA' }
            ];

            const store = mockStore({}, expectedActions);
            return store.dispatch(actions.fetchData);
        })
    })



});