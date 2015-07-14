var addClass = function(elem,className){
  if(elem.className.match(className) === null){
    elem.className += ' ';
    elem.className += className;
    elem.className = elem.className.trim();
  }
}
var removeClass = function(elem,className){
    elem.className = elem.className.replace(className,'');
    elem.className = elem.className.trim();
}

var isMember = function(element, array) {
  return array.indexOf(element) != -1;
}

var htmlCollection2Array = function(htmlCollection) {
  return Array.prototype.slice.call(htmlCollection);
}

var randomAppendClass = function (elementSet, classTextSet) {
  elementSet = Array.prototype.slice.call(elementSet);
  elementSet.forEach(function(member,index){ 
      var indexRandomSelected = (Math.random() * (classTextSet.length - 1)).toFixed();
      member.setAttribute("class", member.getAttribute("class") + " " + classTextSet[indexRandomSelected])
    });
}
