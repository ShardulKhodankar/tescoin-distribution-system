const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});
const checkMyWalletBalance = require('./helpers/checkMyWalletBalance');
const sendBitcoin = require('./helpers/sendBitcoin');

module.exports = (req) => {
  return checkMyWalletBalance()
    .then(response =>{
      console.warn('=======response=====', response);
      if(req.query.amount<response){
        return sendBitcoin(req)
        .then(response => {
          console.warn('send bitcoin response : ', response);
          return response
        })
        .catch(err =>{
          console.error('ERROR FROM SENDCOIN: ',err);
          return {
            error: "ERROR FROM SEND COIN!"
          }
        })
      }
      else{
        return {
          error: "WALLET DOES NOT HAVE THIS MUCH AMOUNT!"
        }
      }
    })
    .catch(err => {
      console.error('ERROR IS: ',err);
      return err;
    })
}