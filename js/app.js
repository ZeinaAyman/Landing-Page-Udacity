/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const color = ["#051440","#27445c","#3a5e6b","#588884"];
//element returns the root element of the document (<html>).
const element = document.documentElement;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navigationBar(){

  for(let i = 0; i < sections.length; i++){
    //adding section links to the navigation bar
    var list = document.createElement('li');
    list.classList.add("menu__link");
    var sectionNumber = sections[i].dataset.nav;
    list.innerHTML = sectionNumber;
    fragment.appendChild(list);

    //Scroll to section on link click
    list.addEventListener("click", function() {
      sections[i].scrollIntoView({behavior: "smooth"});
    });
  }

  nav.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function addActive(){
  window.addEventListener("scroll", function() {
    const lists = document.getElementsByClassName('menu__link');
    for(let i=0; i< sections.length; i++){
      //getBoundingClientRect returns the size of the element and its position relative to the viewport.
      boundRect = sections[i].getBoundingClientRect();
      //if condition to assure that the top position is within the section size and hasn't gone to another section.
      if(boundRect.top <= 300 && boundRect.top >= 0){
        //change background color of section container.
        sections[i].style.background=color[i];
        //change background color of section link.
        lists[i].style.background = color[i];
        sections[i].classList.add("your-active-class");
        lists[i].classList.add("active");
      }
      else{
        //inherit the same gradient background color of the parent (body).
        sections[i].style.background="inherit";
        lists[i].style.background = "inherit";
        sections[i].classList.remove("your-active-class");
        lists[i].classList.remove("active");
      }
    }
  });
}

//function to scroll to the top of the document.
function scrollToTop(){
  var scrollButton = document.getElementById("scrollToTopButton");
    window.addEventListener("scroll", function() {
      //when user scrolls down 40px from the document, show the button (viewed tutorial from w3schools)
      if (element.scrollTop > 40) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });

    scrollButton.addEventListener("click", function() {
      element.scrollTo({top: 0, behavior:"smooth"});
    });

}
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
navigationBar();

// Set sections as active
addActive();

//scroll to top
scrollToTop();
