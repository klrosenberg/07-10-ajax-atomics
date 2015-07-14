//  ---------------------------------------------------------------------------
var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var thisLink = this;
  
  var req = new XMLHttpRequest();
  
  // 'this' refers to the link being clicked
  req.open("get", thisLink.getAttribute("href"));

  // 'this' refers to the XHR object 'req'
  req.addEventListener("load", function(){
    thisLink.innerText = "Response received!"
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

myLink.addEventListener("click", handleTheClick)