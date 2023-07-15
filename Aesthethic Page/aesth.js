function rotateClockHands() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourRotation = (hours * 30) + (minutes * 0.5);
    const minuteRotation = (minutes * 6) + (seconds * 0.1);
    const secondRotation = seconds * 6;

    hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;

    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(rotateClockHands, 1000);
  
// star functionality
  const stars = document.querySelectorAll('.star-rating input[type="radio"]');

  function handleRating(event) {
    const clickedStar = event.target;
    const isChecked = clickedStar.checked;

    if (isChecked) {
      const starId = clickedStar.id;
      const starsContainer = clickedStar.parentNode;

      starsContainer.classList.remove('rated');

      for (const star of stars) {
        const label = star.nextElementSibling;

        if (star.id === starId) {
          starsContainer.classList.add('rated');
          label.classList.add('selected');
        } else {
          label.classList.remove('selected');
        }
      }
    }
  }

  stars.forEach(star => star.addEventListener('change', handleRating));

// play button 
function toggleButton(button) {
  button.classList.toggle('play');
  button.classList.toggle('pause');
}
