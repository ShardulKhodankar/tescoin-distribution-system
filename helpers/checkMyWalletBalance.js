const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
const checkMyWalletBalance = () =>{
  console.warn('caling function')
  let address = process.env.walletAddress;

  const getWalletPayload = {
    type: 'bitcoin',
    id: address,
  }

  return bitgo.wallets().get(getWalletPayload)
  .then(response =>{
    console.warn('====response ', response);
    // console.log('Wallet Details: ',response.balance());
    // const amount = response.balance();
    // return amount;
  })
}

// checkMyWalletBalance();

module.exports = checkMyWalletBalance;