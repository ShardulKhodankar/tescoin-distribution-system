const bitgoJs = require('bitgo');
const bitgo = new bitgoJs.BitGo({env: 'test', accessToken: process.env.accessToken});

const createWalletPayload = {
  label: 'APIWallet2',
  passphrase: process.env.walletPassword2
}

return bitgo.wallets().createWalletWithKeychains(createWalletPayload)
.then(response=>{
  console.log(response);
})
.catch(err=>{
  console.error(err);
})