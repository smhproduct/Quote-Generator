const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random/')
    .then(res=>res.json())
    .then(details => {
      //console.log(details.data[0]);
      document.getElementById("quote").textContent = details.data[0].quoteText;
    document.querySelector(".author").textContent ="-"+ details.data[0].quoteAuthor;
    })
    .catch(err=>console.log(err))
  });

