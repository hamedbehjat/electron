console.log("from index.js");

let axios = require("axios");

function getQuota() {
  axios
    .get("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
    .then(res => {
      res = res.data;
      //console.log("res: ", res);

      //let number = Math.floor(Math.random() * res.length);
      //console.log("number: ", number);

      let randomQuote = res[0]["content"]["rendered"];
      console.log("randomQuote: ", randomQuote);

      document.getElementById("quote-holder").innerHTML = randomQuote;
    })
    .catch(err => {
      console.log(err.response);
    });
}

getQuota();

setInterval(getQuota(), 5000);
