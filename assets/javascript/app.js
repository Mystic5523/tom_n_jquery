$(document).ready(function(){
    
    
    
    
  $("#submit").on("click", function(){  
    var food = document.getElementById("num1").value;
    var apikey = "637cf9cc5a93de2763c8c4a918f292a1";
    var queryURL = "http://food2fork.com/api/search?key=" + apikey + "&q=" + food;
    console.log(food);



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;

    })
  });  

})