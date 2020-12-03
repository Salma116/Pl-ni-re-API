var requestURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var recette = request.response;
    console.log(recette)
    console.log(recette.meals[0].strMeal)
     populateHeader(recette);
  }

var header = document.querySelector('header');
console.log(header)

  function populateHeader(recette) {
    var myH1 = document.createElement('h1');
    myH1.textContent = recette.meals[0].strMeal;
    header.appendChild(myH1);

  
  }
