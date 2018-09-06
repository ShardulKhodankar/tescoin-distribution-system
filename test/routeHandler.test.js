describe('Test routeHandler', () => {
  test('Testing with address null', async (done) => {
    const bitgoJs = require('bitgo');
    const bitgo = new bitgoJs.BitGo({ env: 'test', accessToken: process.env.accessToken });
    const routeHandler = require('../routeHandler');
    const payload = {
      query: {
        address: '',
        amount: 3000
      }
    }
    expect.assertions(1);
    const response = await routeHandler(payload);
    expect(response).toEqual({
      message: "MISSING INPUTS Amount and/or Address!"
    });
    done();
  })
  test('Testing with higher amount', async (done) => {
    const bitgoJs = require('bitgo');
    const bitgo = new bitgoJs.BitGo({ env: 'test', accessToken: process.env.accessToken });
    const routeHandler = require('../routeHandler');
    const payload = {
      query: {
        address: '2N2AZsdKfna6J9pxj91hs7A1jJAqrJiMxir',
        amount: 3000
      }
    }
    expect.assertions(1);
    const response = await routeHandler(payload);
    expect(response).toEqual({
      message: "WALLET DOES NOT HAVE ENOUGH BALANCE!"
    });
    done();
  })
  test('Testing with invalid address', async (done) => {
    const bitgoJs = require('bitgo');
    const bitgo = new bitgoJs.BitGo({ env: 'test', accessToken: process.env.accessToken });
    const routeHandler = require('../routeHandler');
    const payload = {
      query: {
        address: '123',
        amount: 0.001
      }
    }
    expect.assertions(1);
    //process.env.walletPassword = '123';
    const response = await routeHandler(payload);
    expect(response).toEqual({
      message: 'ERROR WHILE SENDING COINS!'
    });
    done();
  })
})