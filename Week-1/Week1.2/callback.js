//Order>>>"payment">>>recivedEmail>>>tracking

// function order() {
//   setTimeout(() => {
//     console.log("order");
//   }, 2000);
// }
// function payment() {
//   setTimeout(() => {
//     console.log("payment");
//   }, 2000);
// }
// function recivedEmail() {
//   setTimeout(() => {
//     console.log("recivedEmail");
//   }, 2000);
// }
// function trackingStart() {
//   setTimeout(() => {
//     console.log("trackingStart");
//   }, 2000);
// }
// This will no fix's the Problem
// order();
// payment();
// recivedEmail();
// trackingStart();

//Order>>>"payment">>>recivedEmail>>>tracking
function order(cb) {
  setTimeout(() => {
    console.log("order");
    cb();
  }, 2000);
}
function payment(cb) {
  setTimeout(() => {
    console.log("payment");
    cb();
  }, 2000);
}
function recivedEmail(cb) {
  setTimeout(() => {
    console.log("recivedEmail");
    cb();
  }, 2000);
}
function trackingStart() {
  setTimeout(() => {
    console.log("trackingStart");
  }, 2000);
}
// This is called callback hell!!!
order(() => {
  payment(() => {
    recivedEmail(() => {
      trackingStart();
    });
  });
});
