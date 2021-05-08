//for the parallax background image
$(document).ready(function(){
  $('.parallax').parallax();
});

//for the drop down menu
$(document).ready(function(){
  $('select').formSelect();
});


//for the modal
$(document).ready(function(){
  $('.modal').modal();
});

//to make the button on modal copy the test
$(function()  {
  $('#copy-btn').click(function(){
      var content = $('#full-information').html();
      var newdiv = $("<div>");
      newdiv.html(content);
      $('#full-information').after(newdiv);
  });
});



//for the drop down menu
$(document).ready(function(){
  $('select').formSelect();
});

const settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "2b1c64edc5msh3cacde3352fe1ebp1fec04jsn6c0584396bd0",
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
  }
};

$.ajax(settings).done(function (response) {
      console.log(response);
  console.log(`drinks??`, response.drinks)
  console.log(`drink name???`, response.drinks[0].strDrink)
  drinkName = response.drinks[0].strDrink
  $('#card-title').text(drinkName);
  $('#card-title2').text(drinkName);
  
      ingredients = [
        response.drinks[0].strIngredient1,
        response.drinks[0].strIngredient2,
        response.drinks[0].strIngredient3,
        response.drinks[0].strIngredient4,
        response.drinks[0].strIngredient5,
        response.drinks[0].strIngredient6,
        response.drinks[0].strIngredient7,
        response.drinks[0].strIngredient8,
        response.drinks[0].strIngredient9,
        response.drinks[0].strIngredient10,
        response.drinks[0].strIngredient11,
        response.drinks[0].strIngredient12,
        response.drinks[0].strIngredient13,
        response.drinks[0].strIngredient14,
        response.drinks[0].strIngredient15,
      ]
      measurements = [
        response.drinks[0].strMeasure1,
        response.drinks[0].strMeasure2,
        response.drinks[0].strMeasure3,
        response.drinks[0].strMeasure4,
        response.drinks[0].strMeasure5,
        response.drinks[0].strMeasure6,
        response.drinks[0].strMeasure7,
        response.drinks[0].strMeasure8,
        response.drinks[0].strMeasure9,
        response.drinks[0].strMeasure10,
        response.drinks[0].strMeasure11,
        response.drinks[0].strMeasure12,
        response.drinks[0].strMeasure13,
        response.drinks[0].strMeasure14,
        response.drinks[0].strMeasure15,
      ]
     console.log(ingredients);
     console.log(measurements);

     for (let i = 0; i < ingredients.length; i++) {
       if (ingredients[i] !== null && measurements[i] !==null) {
         temp = ingredients[i] + ' ' + measurements[i];
         $('#ingredients').append("<li>"+ temp + "</li>");
         console.log(`did this go??`);
       } else if (ingredients[i] !== null && measurements[i] ==null) {
         temp2 = ingredients[i]
         $('#ingredients').append("<li>"+ temp2 + "</li>");
       }
      }

      var translationText = response.drinks[0].strInstructions
      $('#instructions').text(translationText);
      console.log('window ', window)
      fetchTranslation(translationText)
      // call the other api to translate and then put it on the dom

});
    
  


