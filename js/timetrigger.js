//short runninf function
function treesec() {
  var ms=5000+new Date().getTime();
  while (new Date() < ms){}
    console.log('enVa end function');
 
}

function clickHandler(){
  console.log('click evEn');
}

// bodi pozoren na klick dogodek
document.addEventListener('click', clickHandler);

treesec();
console.log('enva end end')



// First Object then Function Order
///java Script vključuje tretjega === triple equals=real equal
///a === undefined