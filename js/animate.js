// FadeLeft

function revealLeft() {
    var reveals = document.querySelectorAll(".fade-left");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-fadeLeft");
      } else {
        reveals[i].classList.remove("reveal-fadeLeft");
      }
    }
  }

  window.addEventListener("scroll", revealLeft);
  
  //fadeRight
  function revealRight() {
    var reveals = document.querySelectorAll(".fade-right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-fadeRight");
      } else {
        reveals[i].classList.remove("reveal-fadeRight");
      }
    }
  }
  
  window.addEventListener("scroll", revealRight);
  
  //fadeUp
  function revealUp() {
    var reveals = document.querySelectorAll(".fade-up");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-fadeUp");
      } else {
        reveals[i].classList.remove("reveal-fadeUp");
      }
    }
  }
  
  window.addEventListener("scroll", revealUp);
  
  
  //fadeDown
  function revealDown() {
    var reveals = document.querySelectorAll(".fade-down");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-fadeDown");
      } else {
        reveals[i].classList.remove("reveal-fadeDown");
      }
    }
  }
  
  window.addEventListener("scroll", revealDown);
  
  //bounceInLeft
  function revealbounceLeft() {
    var reveals = document.querySelectorAll(".bounce-left");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-bounceInLeft");
      } else {
        reveals[i].classList.remove("reveal-bounceInLeft");
      }
    }
  }
  
  window.addEventListener("scroll", revealbounceLeft);
  
  //bounceInRight
  function revealbounceRight() {
    var reveals = document.querySelectorAll(".bounce-right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-bounceInRight");
      } else {
        reveals[i].classList.remove("reveal-bounceInRight");
      }
    }
  }
  
  window.addEventListener("scroll", revealbounceRight);
  
  // aos library
  AOS.init(); 

  // bounce
  function revealbounce() {
    var reveals = document.querySelectorAll(".bounce");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-bounce");
      } else {
        reveals[i].classList.remove("reveal-bounce");
      }
    }
  }
  
  window.addEventListener("scroll", revealbounce);