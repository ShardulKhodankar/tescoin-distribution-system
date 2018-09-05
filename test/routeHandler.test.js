describe('test', () =>{
  test('test',()=>{

    let helpers = require('../helpers');
    helpers.checkMyWalletBalance = jest.fn(()=>{
      return Promise.resolve(123);
      done();
    })
    const route = require('../routeHandler');
    route()
    .then((results)=>{
      console.warn('results : ', results);
    })
    .catch((err) => {
      console.warn('Error : ', err);
    })
  })
})