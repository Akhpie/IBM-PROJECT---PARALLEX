// parallax effect 
let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains_behind = document.querySelector('#mountain-back')
let mountains_front = document.querySelector('#mountain-front')
let text = document.querySelector('#text')
let btn = document.querySelector('#btn')
let bats = document.querySelector('#bats')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.top = value * 0.5 + 'px'
    moon.style.top = value * 1 + 'px'
    mountains_front.style.top = value * 1.5+ 'px'
    mountains_behind.style.opacity = '80%'
    mountains_behind.style.top = value * 0.5 + 'px'
    text.style.marginBottom = value * 1.4 + 'px'
    // text.style.color = 'red'
    btn.style.marginBottom = value * 1.2 + 'px'
    // bats.style.top = value * 1.4 + 'px'
})


// Initialize variable to store the previous scroll position
let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

  // Check if the user is scrolling up
  if (currentScrollPos < prevScrollPos) {
    // If scrolling up, show the bats
    bats.style.display = 'none';
  } else {
    // If not scrolling up, hide the bats
    bats.style.display = 'block';
    // bats.style.top = value * 1 + 'px'
    bats.style.animationName = 'batFlying';
  }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
