// MOUSE EVENTS
const mouseBtn = document.getElementById('mouseBtn');
const mouseMsg = document.getElementById('mouseMsg');

mouseBtn.addEventListener('mouseover', () => {
  mouseMsg.textContent = 'Mouse is over the button!';
});

mouseBtn.addEventListener('mouseout', () => {
  mouseMsg.textContent = 'Mouse has left the button!';
});
