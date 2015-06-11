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
