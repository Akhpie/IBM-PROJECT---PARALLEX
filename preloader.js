window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  window.addEventListener('DOMContentLoaded', function () {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    // Check if the content has finished loading after a certain delay
    var delayInMilliseconds = 3000; // 3 seconds delay
    setTimeout(function () {
      if (!contentLoaded()) {
        preloader.style.display = 'flex';
      }
    }, delayInMilliseconds);
  
    // Check if the content has finished loading
    function contentLoaded() {
      return document.readyState === 'complete';
    }
  
    // Check if the content has failed to load after a certain delay
    var networkTimeoutInMilliseconds = 5000; // 5 seconds network timeout
    setTimeout(function () {
      if (!contentLoaded()) {
        preloader.style.display = 'flex';
      }
    }, networkTimeoutInMilliseconds);
  });
  
