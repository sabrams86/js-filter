// var backgrounds = document.getElementsByClassName('background');
// for (var i = 0; i < backgrounds.length; i++){
//   backgrounds[i].addEventListener('click', function(){
//     document.body.style.backgroundImage = "url('/images/"+backgrounds[i].className.split(' ')[0]+".jpg')";
//   });
// }
var background1 = document.getElementsByClassName('background1')[0];
background1.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('/images/background1.jpg')";
});
var background2 = document.getElementsByClassName('background2')[0];
background2.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('/images/background2.jpg')";
});
var background3 = document.getElementsByClassName('background3')[0];
background3.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('/images/background3.jpg')";
});

var sortHigh = document.getElementsByClassName('high')[0];
var sortLow = document.getElementsByClassName('low')[0];
sortHigh.addEventListener('click', function(){

  var xhr = new XMLHttpRequest;
  xhr.open('get', '/cabins.json');
  xhr.addEventListener('load', function(){
    event.preventDefault();
    var results = JSON.parse(xhr.response).cabins;
    results = results.sort(compareMore)
    var listings = document.getElementsByClassName('listings')[0];
    listings.innerHTML = null;
    results.forEach(function(e,i){
      var a = document.createElement('a');
      var div = document.createElement('div');
      var p = document.createElement('p');
      var img = document.createElement('img');
      a.href='#';
      div.className = 'listing';
      div.name = e.price;
      img.src = e.imgUrl;
      img.alt = 'cabin';
      img.className = 'thumbnail';
      p.innerHTML = '$'+e.price
      a.appendChild(div);
      div.appendChild(img);
      div.appendChild(p);
      listings.appendChild(a);
    });
  });
  xhr.send();
});


sortLow.addEventListener('click', function(){
  var xhr = new XMLHttpRequest;
  xhr.open('get', '/cabins.json');
  xhr.addEventListener('load', function(){
    event.preventDefault();
    var results = JSON.parse(xhr.response).cabins;
    results = results.sort(compareLess)
    var listings = document.getElementsByClassName('listings')[0];
    listings.innerHTML = null;
    results.forEach(function(e,i){
      var a = document.createElement('a');
      var div = document.createElement('div');
      var p = document.createElement('p');
      var img = document.createElement('img');
      a.href='#';
      div.className = 'listing';
      div.name = e.price;
      img.src = e.imgUrl;
      img.alt = 'cabin';
      img.className = 'thumbnail';
      p.innerHTML = '$'+e.price
      a.appendChild(div);
      div.appendChild(img);
      div.appendChild(p);
      listings.appendChild(a);
    });
  });
  xhr.send();
});

var compareMore = function(a,b){
  aPrice = a.price;
  bPrice = b.price;
  if (aPrice < bPrice){
    return 1;
  } else if (aPrice > bPrice){
    return -1;
  } else {
    return 0;
  }
}

var compareLess = function(a,b){
  aPrice = a.price;
  bPrice = b.price;
  if (aPrice > bPrice){
    return 1;
  } else if (aPrice < bPrice){
    return -1;
  } else {
    return 0;
  }
}
