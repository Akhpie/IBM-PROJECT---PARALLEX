let mapWindow = null;

function openMap() {
  if (!mapWindow || mapWindow.closed) {
    const windowFeatures = 'width=600,height=600,left=200,top=100';
    mapWindow = window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.0884174243984!2d78.16364247379416!3d17.550976598074566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf11b33d2df9d%3A0xccb71d58d5bf59ff!2sGITAM%20(Deemed%20to%20be)%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1690651950800!5m2!1sen!2sin', '_blank', windowFeatures);
  }
}

document.getElementById('map-icon').addEventListener('click', openMap);


