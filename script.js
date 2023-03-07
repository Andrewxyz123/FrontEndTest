$(document).ready(function () {

  $('.items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,

    responsive: [

      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

var elm = document.querySelector('.img-array-wrp-2');
var elm2 = document.querySelector('.img-array-wrp-2-1');

var onScroll = (function () {
  var startPos;

  function run() {
    var fromTop = window.pageYOffset,
      rect = elm.getBoundingClientRect(),
      scrollDelta;

    // check if element is in viewport
    if ((rect.top - window.innerHeight) <= 0 && rect.bottom > 0)
      startPos = startPos === undefined ? fromTop : startPos;
    else {
      return;
    }

    scrollDelta = (fromTop - startPos) * 0.1; // "speed" per scrolled frame
    elm.style.transform = `translateY(${scrollDelta}px)`;

    console.clear();
    console.log(scrollDelta);
  }

  run();

  return run;
})()

window.addEventListener('scroll', onScroll);

var onScroll2 = (function () {
  var startPos;

  function run() {
    var fromTop = window.pageYOffset,
      rect = elm2.getBoundingClientRect(),
      scrollDelta;

    // check if element is in viewport
    if ((rect.top - window.innerHeight) <= 0 && rect.bottom > 0)
      startPos = startPos === undefined ? fromTop : startPos;
    else {
      return;
    }

    console.log(rect.top);
    console.log(rect.bottom);

    scrollDelta = (fromTop - startPos) * 0.1; // "speed" per scrolled frame
    elm2.style.transform = `translateY(${scrollDelta}px)`;

    console.clear();
    console.log(scrollDelta);
    console.log(rect.top);
    console.log(window.innerHeight);
  }

  run();

  return run;
})()

window.addEventListener('scroll', onScroll2);


var elm3 = document.querySelectorAll('.img-array-wrp-1');

var onScroll2 = (function () {
  var startPos;

  function run() {
    for (var i = 0, len = elm3.length; i < len; i++) {
      var fromTop = window.pageYOffset,
        rect = elm3[i].getBoundingClientRect(),
        scrollDelta;

      // check if element is in viewport
      if ((rect.top - window.innerHeight) <= 0 && rect.bottom > 0)
        startPos = startPos === undefined ? fromTop : startPos;
      else {
        return;
      }

      scrollDelta = (fromTop - startPos) * -0.1; // "speed" per scrolled frame
      elm3[i].style.transform = `translateY(${scrollDelta}px)`;

      console.clear();
      console.log(scrollDelta);
      console.log(rect.top);
      console.log(window.innerHeight);
    }
  }

  run();

  return run;
})()

window.addEventListener('scroll', onScroll2);