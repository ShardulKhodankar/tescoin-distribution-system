describe('../helpers/checkMyWalletBalance.js', () =>{
  test('Testing checkMy balance', async (done)=>{
    const bitgoJs = require('bitgo');
    const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
    const checkMyWalletBalance = require('../../helpers/checkMyWalletBalance');
    expect.assertions(1);
    const response = await checkMyWalletBalance();
    expect(response).toBeGreaterThan(1);
    done();
  })
})