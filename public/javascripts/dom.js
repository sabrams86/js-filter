//Set Background Buttons
var backgrounds = document.getElementsByClassName('background');
for (var i = 0; i < backgrounds.length; i++){
  backgrounds[i].addEventListener('click', function(){
    document.body.style.backgroundImage = "url('/images/"+this.className.split(' ')[0]+".jpg')";
  });
}

//Set Sort Links
var sortHigh = document.getElementsByClassName('high')[0];
var sortLow = document.getElementsByClassName('low')[0];

// sortValue is outside of Listener in order to remember if 'high' or 'low' was clicked last
var sortValue = 'asc';
sortHigh.addEventListener('click', function(){
  sortValue = 'desc';
  dataRequest(sortValue);
});
sortLow.addEventListener('click', function(){
  sortValue='asc';
  dataRequest(sortValue);
});

//Set checkbox listeners
var checkmark = document.getElementsByClassName('checkmark');
for(var i = 0; i<checkmark.length; i++){
  checkmark[i].addEventListener('change', function(){
    dataRequest(sortValue);
  });
}
