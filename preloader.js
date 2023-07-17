window.addEventListener('DOMContentLoaded', function () {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    // Display the preloader
    preloader.style.display = 'flex';
  
    // Simulate a 5-second delay for the page to load
    setTimeout(function () {
      preloader.style.display = 'none'; // Hide the preloader
      content.style.display = 'block'; // Show the content
    }, 5000);
  });
  