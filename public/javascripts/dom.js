var backgrounds = document.getElementsByClassName('background');
for (var i = 0; i < backgrounds.length; i++){
  backgrounds[i].addEventListener('click', function(){
    document.body.style.backgroundImage = "url('/images/"+this.className.split(' ')[0]+".jpg')";
  });
}
var sortHigh = document.getElementsByClassName('high')[0];
var sortLow = document.getElementsByClassName('low')[0];

var sortValue = 'asc';
sortHigh.addEventListener('click', function(){
  sortValue = 'desc';
  dataRequest(sortValue);
});

sortLow.addEventListener('click', function(){
  sortValue='asc';
  dataRequest(sortValue);
});

var checkmark = document.getElementsByClassName('checkmark');
for(var i = 0; i<checkmark.length; i++){
  checkmark[i].addEventListener('change', function(){
    dataRequest(sortValue);
  });
}
