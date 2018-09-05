$(document).ready(function() {
  var yearInput = $("#new-car-year-input");
  var bodystyleInput = $("#new-car-body-style");
  var autoTypeInput = $("#new-car-auto-type");
  var makeInput = $("#new-car-make-input");
  var modelInput = $("#new-car-model-input");
  var colorInput = $("#new-car-color-input");
  var mileageInput = $("#new-car-mileage-input");
  var newCarForm = $("#new-car-form");

  $(newCarForm).on("submit", handleFormSubmit);

  var url = window.location.search;
  var userId;
  var carId;

  var updating = false;

  if(url.indexOf("?car_id=") !== -1) {
    carId = url.split("=")[1];
    getCarData(carId, "car");
  }
  else if(url.indexOf("?user_id=") !== -1) {
      userID = url.split("=")[1];
  }
  
});