const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
const checkMyWalletBalance = require('./helpers/checkMyWalletBalance');
const sendBitcoin = require('./helpers/sendBitcoin');

module.exports = async (req) => {
  try{
    const amount = Number(req.query.amount) * 1E8;
    const address = req.query.address;
    console.log('Amount Requested: ',amount * 1E8)
    if(!amount || !address){
      return {
        message: "MISSING INPUTS Amount and/or Address!"
      }
    }

    const mywalletBalance = await checkMyWalletBalance();
    if(mywalletBalance instanceof Error){
      return {
        message: "ERROR WHILE CHECKING WALLET BALANCE!"
      }
    }

    if(amount<mywalletBalance){
      const finalResponse = await (sendBitcoin(amount,address));
      if(finalResponse instanceof Error){
        return {
          message: 'ERROR WHILE SENDING COINS!'
        }
      }
      else{
        return {
          message: "COINS SENT TO ADDRESS "+address
        }
      }
    }
    else{
      return {
        message: "WALLET DOES NOT HAVE ENOUGH BALANCE!"
      }
    }
  }
  catch(error){
    console.log('ERROR Inside routeHandler: ',error);
    return error;
  }

  // return checkMyWalletBalance()
  //   .then(response =>{
  //     console.warn('mock response : ', response);
  //     if(req.query.amount<response){
  //       return sendBitcoin(req)
  //       .then(response => response)
  //       .catch(err =>{
  //         console.error('ERROR FROM SENDCOIN: ',err);
  //         return {
  //           error: "ERROR FROM SEND COIN!"
  //         }
  //       })
  //     }
  //     else{
  //       return {
  //         error: "WALLET DOES NOT HAVE THIS MUCH AMOUNT!"
  //       }
  //     }
  //   })
  //   .catch(err => {
  //     console.error('ERROR IS: ',err);
  //     return err;
  //   })
}