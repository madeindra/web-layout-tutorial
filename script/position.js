function toggleDiv(elementName) {
  var item = document.getElementById(elementName);
  
  if(!item.style.display || item.style.display === "none") {
    item.style.display = "flex";
  } else {
    item.style.display = "none";
  }
}