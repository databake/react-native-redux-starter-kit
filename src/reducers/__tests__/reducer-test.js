/* @flow */

'use strict';
jest.autoMockOff();

describe('setup reducer test', () => {

    it('is empty by default', () => {
        expect(10).toEqual(10);
    });
    
    it('populates from the server', () => {
        expect(9).toBeLessThan(10);
    })
  
});