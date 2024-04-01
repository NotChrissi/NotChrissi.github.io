function hide(){
  // Get all elements with class name "input"
  var inputs = document.getElementsByClassName('input');

// Loop through each element and set its readonly attribute to true
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].readOnly = true;
  }

  document.getElementById('hideButton').remove();

}
