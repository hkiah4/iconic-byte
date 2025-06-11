// Modal video functionality
const buttons = document.querySelectorAll('.portfolio-button');
const modal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const closeBtn = document.querySelector('.close');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const videoURL = button.getAttribute('data-video');
    videoFrame.src = videoURL + "?autoplay=1&rel=0";
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  videoFrame