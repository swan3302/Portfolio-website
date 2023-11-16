document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const colors = ["#1F2833", "#0B0C10"];
  
    function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  
    function generateBackground() {
      for (let i = 0; i < 100; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() * 100 - 50);
        const y2 = y1 + (Math.random() * 100 - 50);
        const x3 = x1 + (Math.random() * 100 - 50);
        const y3 = y1 + (Math.random() * 100 - 50);
        const color = colors[Math.floor(Math.random() * colors.length)];
        drawTriangle(x1, y1, x2, y2, x3, y3, color);
      }
    }
  
    generateBackground();
  });

// Function to set canvas dimensions
function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Set initial dimensions
  setCanvasDimensions();
  
  // Update dimensions when the window is resized
  window.addEventListener("resize", function() {
    setCanvasDimensions();
    generateBackground(); // Redraw background
  });

  