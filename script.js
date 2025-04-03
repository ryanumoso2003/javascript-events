// mouse events
const mouseBtn = document.getElementById('mouseBtn');
const mouseMsg = document.getElementById('mouseMsg');

mouseBtn.addEventListener('mouseover', () => {
  mouseMsg.textContent = 'Mouse is over the button!';
});

mouseBtn.addEventListener('mouseout', () => {
  mouseMsg.textContent = 'Mouse has left the button!';
});
  
// keyboard events
const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', (event) => {
  keyMsg.textContent = `You pressed: ${event.key}`;
});
