$(document).ready(function () {
  
  'use strict';
  
  var slideA = $('.slide-a'),
      slideB = $('.slide-b'),
      slideC = $('.slide-c'),
      slideD = $('.slide-d'),
      slide  = $('.slide'),
      replay = $('button')
  
  slide.hide();
  
  // Slide A
  function showSlideA() {
    slideA.fadeIn().delay(2500).fadeOut();
    $('.slide-a h1').animate({'opacity': '1'});
    $('.slide-a p:first').delay(500).animate({'opacity': '1'});
    $('.slide-a p:last').delay(1000).animate({'opacity': '1'});
  };
  
  // Slide B
  function showSlideB() {
    slideB.fadeIn().delay(6600).queue(function (next) {
      $(this).css({'opacity': '0','transform': 'scaleX(0)'});
      next();
    });
    $('.slide-b h2')
    .delay(3300)
    .queue(function (next) {
      $(this).css({'opacity': '1', 'transform': 'translateY(0)'});
      next();
    });
    $('.slide-b p:first')
    .delay(3600)
    .queue(function (next) {
      $(this).css({'opacity': '1', 'transform': 'translateY(0)'});
      next();
    });$('.slide-b p:last')
    .delay(3800)
    .queue(function (next) {
      $(this).css({'opacity': '1', 'transform': 'translateY(10px)'});
      next();
    });
  };
  
  // Slide C
  function showSlideC() {
    slideC.fadeIn().delay(8800).fadeOut();
    $('.slide-c h2')
    .delay(7000)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
    $('.slide-c p:first')
    .delay(7100)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
    $('.slide-c p:nth-of-type(2)')
    .delay(7200)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
    $('.slide-c p:last')
    .delay(7300)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
  }
  
  // Slide D  
  function showSlideD() {
    slideD.fadeIn();
    $('.slide-d h2')
    .delay(9600)
    .queue(function next() {
      $(this).css({'opacity': '1'});
      next();
    });
    $('.slide-d p:first')
    .delay(9900)
    .queue(function next() {
      $(this).css({'opacity': '1'});
      next();
    });
    $('.slide-d p:last')
    .delay(10100)
    .queue(function next() {
      $(this).css({'opacity': '1'});
      next();
    });
    replay
    .delay(10300)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
  }
  
 $(window).load(function () {
   showSlideA(showSlideB(showSlideC(showSlideD())));
 });
  
  // replay 
  replay.on('click', function () {
    location.reload(true);
  });

  
  
  
});