// Fade-in effect
function fadeInContent() {
  const content = document.getElementById('textContent');
  const rect = content.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    content.classList.add('visible');
  }
}
window.addEventListener('scroll', fadeInContent);
window.addEventListener('load', fadeInContent);

// Button 1: Show Blessing Message
function showMessage() {
  const box = document.getElementById('messageBox');
  box.innerText = "Thank you for reading. I hope you are blessed!";
}

// Button 2: Prompt to Drop a Comment
function leaveComment() {
  const response = prompt("Leave your comment below:");
  if (response) {
    alert("Thank you for your comment!");
  } else {
    alert("No comment added.");
  }
}

// Button 3: Change Background Color
function changeBackground() {
  const colors = ["#ffecd2", "#fcb69f", "#e0c3fc", "#8ec5fc", "#d9afd9", "#a1c4fd"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}
