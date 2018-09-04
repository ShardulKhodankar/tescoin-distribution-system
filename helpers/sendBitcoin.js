const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});

const sendBitcoin = (req) =>{
  let address = req.query.address;
  let amount = Number(req.query.amount);

  const getWalletPayload = {
    type: 'bitcoin',
    id: process.env.walletAddress,
  }

  return bitgo.wallets().get(getWalletPayload)
  .then(response => {
      const amountSent = amount * 1e8;
      
      const sendCoinsPayload = {
        address: address,
        amount: 15,
        maxFeeRate: 100,
        minConfirms: 0,
        walletPassphrase: process.env.walletPassword
      }
      return response.sendCoins(sendCoinsPayload)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      })
  })
}

module.exports = sendBitcoin;