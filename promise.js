let cart = ["shoes","pants","kurta"]
let promise = createOrder(cart);
console.log(promise)

promise.then(function(orderId){
    console.log(orderId)
});

function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
         if(!validateid){
        const err = new Error('rejected')
        reject(err)
     }
     const orderId = '11224'
     if(orderId){
        setTimeout(() => {
            resolve(orderId);
        }, 4000);
     }
    })
    return pr;
    
}

function validateid(){
    return true;
}