document.addEventListener("DOMContentLoaded", function() {
  var sectionI = document.querySelectorAll('.sectionI');
  var sectionII = document.querySelectorAll('.sectionII');
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
});