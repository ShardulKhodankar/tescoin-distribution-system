const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({ env: 'test', accessToken: process.env.accessToken });

const sendBitcoin = async (amount, address) => {
  try {
    const getWalletPayload = {
      id: process.env.walletId
    }
    const getWalletResponse = await bitgo.coin('tbtc').wallets().get(getWalletPayload);
    const sendCoinsPayload = {
      address: address,
      amount: amount,
      walletPassphrase: process.env.walletPassword
    }
    const sendCoinsResponse = await getWalletResponse.send(sendCoinsPayload);
    console.log('Response from sendCoins: ', sendCoinsResponse);
    return sendCoinsResponse;
  }
  catch (error) {
    // console.error('ERROR INSIDE sendBitcoin: ',error);
    return error;
  }

  // return bitgo.coin('tbtc').wallets().list({})
  // .then(response=> {
  //   console.log(response.wallets);
  // })
  // return bitgo.coin('tbtc').wallets().get({ id: process.env.walletId })
  // //return bitgo.wallets().get(getWalletPayload)
  // .then(response => {
  //     const sendCoinsPayload = {
  //       address: address,
  //       amount: amount,
  //       // maxFeeRate: 240,
  //       // minConfirms: 0,
  //       walletPassphrase: process.env.walletPassword
  //     }
  //     return response.send(sendCoinsPayload)
  //     .then(response => response)
  //     .catch(err => {
  //       return err;
  //     })
  // })
}

// sendBitcoin({
//   query:{
//     address:'2N7amLLJuq7U7hpqHujy6faD2uu4p7Acw57',
//     amount: 3000
//   }
// });
module.exports = sendBitcoin;