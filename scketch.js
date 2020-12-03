var requestURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var recette = request.response;
    console.log(recette[0].strMeal)
  }