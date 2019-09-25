 var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active2");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  jQuery('#portfolio-demo').slippry({
    // general elements & wrapper
    slippryWrapper: '<div class="sy-box portfolio-slider" />', // wrapper to wrap everything, including pager

    // options
    adaptiveHeight: false, // height of the sliders adapts to current slide
    start: 'random', // num (starting from 1), random
    loop: false, // first -> last & last -> first arrows
    captionsSrc: 'li',
    captions: 'custom', // Position: overlay, below, custom, false
    captionsEl: '.external-captions',

    // transitions
    transition: 'fade', // fade, horizontal, kenburns, false
    easing: 'linear', // easing to use in the animation [(see... [jquery www])]
    continuous: false,

    // slideshow
    auto: false
  });