function order() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order-1");
      resolve(); //My work is done You can exit!
    }, 2000);
  });
}
function payment() {
  setTimeout(() => {
    console.log("payment");
  }, 2000);
}
function receivedEmail() {
  setTimeout(() => {
    console.log("receivedEmail");
  }, 2000);
}
function trackingStart() {
  setTimeout(() => {
    console.log("trackingStart");
  }, 2000);
}
// This is called callback hell!!!
// order(() => {
//   payment(() => {
//     receivedEmail(() => {
//       trackingStart();
//     });
//   });
// });

order().then(payment);
