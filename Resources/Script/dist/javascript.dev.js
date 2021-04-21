"use strict";

function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav_links");
  var navLinks = document.querySelectorAll(".nav_links li");
  var body = document.querySelector(".darkened_body");
  var bodyBlock = document.querySelector("body");
  burger.addEventListener("click", function () {
    //Toggle Nav
    nav.classList.toggle("nav_active"); //Animate Links

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 5, "s");
      }
    }); //Burger Animation

    burger.classList.toggle("toggle"); //Body Darken

    body.classList.toggle("darken"); //Block Scroll

    bodyBlock.classList.toggle("no_scroll");
  });
  body.addEventListener("click", function () {
    //Toggle Nav
    nav.classList.toggle("nav_active"); //Burger Animation

    burger.classList.toggle("toggle"); //Body Darken

    body.classList.toggle("darken"); //Animate Links

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 5, "s");
      }
    }); //Block Scroll

    bodyBlock.classList.toggle("no_scroll");
  });
}

navSlide();
window.addEventListener("scroll", function () {
  var height = document.querySelector("#ind_cover_bg_image").offsetHeight;
  var nav = document.querySelector("nav");
  nav.classList.toggle("scroll_nav", window.scrollY > height);
  nav.classList.toggle("nav_hide", window.scrollY > 400);
});
textFit(document.querySelectorAll(".contacts"));

function gotoNoivoWpp() {
  window.open("https://api.whatsapp.com/send?phone=5554999041506", "_blank");
}

function gotoNoivoMail() {
  location.href = "mailto:vitorbeuren@gmail.com";
}

function gotoNoivoTelegram() {
  window.open("https://t.me/VitorBeuren", "_blank");
}

function gotoNoivaWpp() {
  window.open("https://api.whatsapp.com/send?phone=556199260911", "_blank");
}

function gotoNoivaMail() {
  location.href = "mailto:naiza.lacerda@gmail.com";
}

function gotoNoivaTelegram() {
  window.open("https://t.me/naizamart", "_blank");
}