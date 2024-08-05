document.addEventListener("DOMContentLoaded", function() {
  var sectionI = document.querySelectorAll('.sectionI');
  var sectionII = document.querySelectorAll('.sectionII');
  var sectionIII = document.querySelectorAll('.sectionIII');
  var sectionIV = document.querySelectorAll('.sectionIV');
  var sectionV = document.querySelectorAll('.sectionV');
  sectionI.forEach(function(title) {
    title.addEventListener('click', function() {
      title.parentNode.classList.toggle('collapsedI');
    });
  });
  sectionII.forEach(function(title) {
    title.addEventListener('click', function() {
      title.parentNode.classList.toggle('collapsedII');
    });
  });
  sectionIII.forEach(function(title) {
    title.addEventListener('click', function() {
      title.parentNode.classList.toggle('collapsedIII');
    });
  });
  sectionIV.forEach(function(title) {
    title.addEventListener('click', function() {
      title.parentNode.classList.toggle('collapsedIV');
    });
  });
  sectionV.forEach(function(title) {
    title.addEventListener('click', function() {
      title.parentNode.classList.toggle('collapsedV');
    });
  });
});