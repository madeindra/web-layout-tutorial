function toggleDiv(elementName) {
  var item = document.getElementById(elementName);
  
  if(!item.style.display || item.style.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}