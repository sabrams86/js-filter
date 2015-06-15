var dataRequest = function(callback){
  event.preventDefault();
  var xhr = new XMLHttpRequest;
  xhr.open('get', '/cabins.json');
  xhr.addEventListener('load', function(){
    event.preventDefault();
    var results = JSON.parse(xhr.response).cabins;
    if(callback){
      results = callback(results);
    }
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
  xhr.send(queryString);
}

var buildQuery = function(){

}

var priceFilter = function(item){
  if (item.price < 100000)
  return item;
}

var filterIt = function(input){
  return input.filter(priceFilter);
}

var sortLess = function(input){
  return input.sort(compareLess);
}

var sortMore = function(input){
  return input.sort(compareMore);
}

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
