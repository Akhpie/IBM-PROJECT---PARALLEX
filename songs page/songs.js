// scroll to top
// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
const volumeSlider = document.getElementById('volume-slider');
const backgroundVideo = document.getElementById('background-video');

// make sure that the song title and the audio names match up**

// song titles
const songs = ['Sofia', 'Lavender Haze', 'Summer of 69', 'Strawberries and ciggarettes', 'Tere Vaaste', 'Khairiyat']

// keep track of songs
let songIndex = 1

// initially load song info DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `../songs/${song}.mp3`
    cover.src = `../images/${song}.jpeg`

    //play bg video
    backgroundVideo.src = `../videos/${song}.mp4`;
    playBackgroundVideo();
}

// Function to play video in the background
function playBackgroundVideo() {
  backgroundVideo.play();
}

// to Pause background video
function pauseBackgroundVideo() {
  backgroundVideo.pause();
}


// to update volume
function updateVolume() {
  audio.volume = volumeSlider.value;
}

// play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
    if (backgroundVideo.paused) {
      playBackgroundVideo();
  }
  }

  // pause song
  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
    if (!backgroundVideo.paused) {
      pauseBackgroundVideo();
  }
  }

  // prev song
  function prevSong(){
    songIndex--
    if(songIndex < 0){
      songIndex = songs.length-1
    }
    loadSong(songs[songIndex])

    playSong()
  }
  // next song
  function nextSong(){
    songIndex++
    if(songIndex > songs.length-1){
      songIndex = 0
    }
    loadSong(songs[songIndex])

    playSong()
  }

  // updating songs progress
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  // Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// toggling play and pause
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  // change song events
  prevBtn.addEventListener('click', prevSong)
  nextBtn.addEventListener('click', nextSong)

  audio.addEventListener('timeupdate', updateProgress)

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);

// volume adjustment
volumeSlider.addEventListener('input', updateVolume);

// Add event listeners to the audio element to play and pause the background video accordingly
audio.addEventListener('play', playBackgroundVideo);
audio.addEventListener('pause', pauseBackgroundVideo);