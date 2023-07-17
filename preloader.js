window.addEventListener('DOMContentLoaded', function () {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    // Display the preloader
    preloader.style.display = 'flex';
  
    // Set a timeout to check if the page is taking too long to load
    var timeout = setTimeout(function () {
      preloader.style.display = 'none'; // Hide the preloader
      content.style.display = 'block'; // Show the content
    }, 3000); // Change the timeout duration as needed
  
    // Check if the page has finished loading
    window.addEventListener('load', function () {
      clearTimeout(timeout); // Cancel the timeout
  
      preloader.style.display = 'none'; // Hide the preloader
      content.style.display = 'block'; // Show the content
    });
    
    // Check for network issues
    window.addEventListener('error', function () {
      clearTimeout(timeout); // Cancel the timeout
  
      preloader.style.display = 'none'; // Hide the preloader
      content.style.display = 'block'; // Show the content
  
      // You can handle the network issue here (e.g., show an error message)
      console.log('Network issue occurred');
    });
  });
  
  