'use strict';
let mainNav = Document.getElementById('js-menu');
let navBarToggle = Document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

