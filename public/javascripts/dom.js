//Set Background Buttons
var changer = document.getElementsByClassName('background-changer')[0];
changer.addEventListener('click', function(e){
  if (e.target && e.target.nodeName == 'DIV'){
    document.body.style.backgroundImage = "url('/images/"+e.target.className.split(' ')[0]+".jpg')";
  }
});

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
var checklist = document.getElementsByClassName('price-list')[0];
checklist.addEventListener('change', function(e){
  if(e.target && e.target.nodeName == 'INPUT'){
    dataRequest(sortValue);
  }
});
