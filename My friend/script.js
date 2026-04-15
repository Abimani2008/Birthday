function startSurprise() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("videoPage").style.display = "block";

  let video = document.getElementById("birthdayVideo");
  video.play();

  // When video ends
  video.onended = function () {
    document.getElementById("videoPage").style.display = "none";
    document.getElementById("messagePage").style.display = "block";
  };
}

    const video = document.getElementById('myVideo');
    const text = document.getElementById('myText');
    const overlay = document.getElementById('overlay');

    
    video.addEventListener('ended', function() {
      overlay.classList.add('visible'); 
      text.classList.add('visible');    
    });