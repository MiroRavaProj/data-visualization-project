/* -- Carousel Navigation -- */


let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

const app = document.getElementById('protocol-toggle-button');

const change_app_text = (text) => app.innerText = text;

var pl = true;
$('#protocol-toggle-button').click(function(){
  if(pl) {
    pl = false;
    $('#slider1').addClass('in');
    $('#slider2').addClass('in');
    $('#slider3').addClass('in');
    $('#slider4').addClass('in');
    $('#slider5').addClass('in');
    change_app_text('CLOSE INFO');
    handleNavToggle();
  }else{
    pl = true;
    $('#slider1').removeClass('in');
    $('#slider2').removeClass('in');
    $('#slider3').removeClass('in');
    $('#slider4').removeClass('in');
    $('#slider5').removeClass('in');
    change_app_text('PROTOCOL INFO');
    handleNavToggle();
  }
});



const myFunction1=()=> {
  var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show")
}

const myFunction2=()=> {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show")
}

const myFunction3=()=> {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show")
}

const myFunction4=()=> {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show")
}

const myFunction5=()=> {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show")
}

const myFunction6=()=> {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show")
}