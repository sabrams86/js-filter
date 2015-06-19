//********************************
//****   Main XHR Request ********
//********************************
var dataRequest = function(order){
  event.preventDefault();
  //create new XMLHTTP Request
  var xhr = new XMLHttpRequest;
  //Build a querystring based on which checkboxes are checked and which sort was clicked last
  var queryArray = [];
  var checkmarks = document.getElementsByClassName('checkmark');
  for ( var i = 0; i < checkmarks.length; i++){
    if (checkmarks[i].checked === true){
      queryArray.push(checkmarks[i].name+'=true');
    }
  }
  if (order) {
    queryArray.push('order='+order);
  }
  var queryString = queryArray.join('&');

  xhr.open('get', '/cabins.json?'+queryString);
  xhr.addEventListener('load', function(){
    event.preventDefault();
    var results = JSON.parse(xhr.response);
    var listings = document.getElementsByClassName('listings')[0];
    //clear all listings from the page
    listings.innerHTML = null;
    //build new listings from the returned JSON data
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
}
