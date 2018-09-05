const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
const checkMyWalletBalance = async () =>{
  try{
    const address = process.env.walletAddress;

    const getWalletPayload = {
      id: process.env.walletId
    }

    const params = {
      address: address,
      walletPassphrase: process.env.walletPassword
    }

    const getWalletResponse = await bitgo.coin('tbtc').wallets().get(getWalletPayload);
    const maximumSpendableResponse = await getWalletResponse.maximumSpendable(params);
    console.log('Response from maximumSpendable: ',maximumSpendableResponse.maximumSpendable)
    return Number(maximumSpendableResponse.maximumSpendable);
  }
  catch(error){
    console.log('ERROR INSIDE checkMyWalletBalance: ',error);
    return error;
  }
 
  // return bitgo.coin('tbtc').wallets().get(getWalletPayload)
  // .then(wallet=>{
  //   return wallet.maximumSpendable(params)
  //   .then(response=>{
  //     console.warn(response);
  //     const spendableAmount = response.maximumSpendable;
  //     return spendableAmount;
  //   })
  // })
}

module.exports = checkMyWalletBalance;