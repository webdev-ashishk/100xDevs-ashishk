//fetch function is commonly used in JavaScript to make HTTP requests.

function responseBody(jsonBody) {
  console.log("json result " + jsonBody);
}

function callback(result) {
  result.json().then(responseBody);
}
let sendObj = {
  method: "GET",
};
fetch("http://localhost:5000/count/20", sendObj).then(callback);
