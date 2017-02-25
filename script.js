const listItems = document.querySelectorAll('li');
const images = document.querySelectorAll('#gallery img');

listItems.forEach(listItem => listItem.addEventListener('click', active));
                                            
function active(e) {                                           
  listItems.forEach(listItem => listItem.classList.remove('selected-li'));
//  e.preventDefault();   // prevent other css effects too; page can't be redirected
  this.classList.add('selected-li');
  console.log(this.nodeName)
}

//
//const h2 = document.querySelector('#red');
//const topOfNav = h2.offsetTop;
//
//function fixNav() {
//    console.log(topOfNav);
//}
//
//window.addEventListener('scroll', fixNav);
//
