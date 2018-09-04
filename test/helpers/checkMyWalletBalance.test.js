describe('../helpers/checkMyWalletBalance.js', () =>{
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });
  test('Testing checkMy balance', (done)=>{
    const bitgoJs = require('bitgo');
    let bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
   process.env.walletAddress =  '12344';
    bitgo = {
      wallets : jest.fn(() => {
        get: jest.fn(()=>{
          console.warn('mocking get data : ');
          return Promise.resolve({
            balance: ()=>{
              return 123;
            }
          })
        })
      })
    }
    const checkMyWalletBalance = require('../../helpers/checkMyWalletBalance');
    checkMyWalletBalance()
    .then(results=>{
      console.log('-------',results);
      done();
    })
    .catch(err=>{
      console.log(err);
      done();
    })
  })
})