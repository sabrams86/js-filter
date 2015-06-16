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
  dataRequest(sortMore)
});

sortLow.addEventListener('click', function(){
  dataRequest(sortLess);
});

var checkCount1 = 0;
var checkmark = document.getElementsByName('check1')[0];
checkmark.addEventListener('change', function(){
  checkCount1 +=1;
  if (checkCount1 % 2 === 1){
    dataRequest(filterIt);
  } else {
    dataRequest();
}
});



/* state machine

track each toggleable item with a global variable that changesit from false to true, then
on each eventListener fire a function that takes all of those variables as inputs and performs a filter
based on the combination

masterFilter = function(check1 ,check2, check3, check4, check5, low, high)

*/
