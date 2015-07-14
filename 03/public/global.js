//  ---------------------------------------------------------------------------
var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var req = new XMLHttpRequest();
  
  req.open("get", "/path1");

  req.addEventListener("load", function(){
    alert(this.response);
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

myLink.addEventListener("click", handleTheClick)