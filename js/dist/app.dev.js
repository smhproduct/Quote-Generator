"use strict";

var btn = document.getElementById("generate-btn");
btn.addEventListener("click", function () {
  fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random/').then(function (res) {
    return res.json();
  }).then(function (details) {
    //console.log(details.data[0]);
    document.getElementById("quote").textContent = details.data[0].quoteText;
    document.querySelector(".author").textContent = "-" + details.data[0].quoteAuthor;
  })["catch"](function (err) {
    return console.log(err);
  });
});
//# sourceMappingURL=app.dev.js.map
