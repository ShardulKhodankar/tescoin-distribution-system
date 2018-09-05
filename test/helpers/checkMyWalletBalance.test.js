describe('../helpers/checkMyWalletBalance.js', () =>{
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });
  test('Testing checkMy balance', (done)=>{
    const bitgoJs = require('bitgo');
    let bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
    process.env.walletAddress =  '12344';
    const getWalletPayload = {
      type: 'bitcoin',
      id: '1234',
    }
    console.warn('==========', bitgo.coin('tbtc').wallets());
    bitgo = {
      coin: () => {
        wallets: () => {
          get: () =>{
            return Promise.resolve({
              maximumSpendable : () => {
                return Promise.resolve({ maximumSpendable: 123123})
              }
            })
          }
        }
      }
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