//Pagina inicial efeitos bolinhas//
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container");

  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  imageContainer.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const bubbles = [];

  function createBubble() {
      const bubble = document.createElement("div");
      const size = Math.random() * 5 + 2; // Bolinhas menores

      const left = Math.random() * (window.innerWidth - size); // Garante que a bolinha esteja dentro da largura da tela
      const top = Math.random() * (window.innerHeight - size); // Garante que a bolinha esteja dentro da altura da tela

      bubble.style.position = "absolute";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      bubble.style.borderRadius = "50%";
      bubble.style.left = `${left}px`;
      bubble.style.top = `${top}px`;
      bubble.style.pointerEvents = "auto"; // Permite interação do mouse

      imageContainer.appendChild(bubble);
      bubbles.push({ element: bubble, size, left, top });

      function animateBubble() {
          let randomX = (Math.random() - 0.5) * 200;
          let randomY = (Math.random() - 0.5) * 200;

          // Restringir movimento para que as bolinhas não saiam da tela
          const maxX = window.innerWidth - size;
          const maxY = window.innerHeight - size;

          randomX = Math.max(0, Math.min(randomX, maxX - left)); // Restringir movimento no eixo X
          randomY = Math.max(0, Math.min(randomY, maxY - top)); // Restringir movimento no eixo Y

          bubble.animate(
              [
                  { transform: `translate(0px, 0px)` },
                  { transform: `translate(${randomX}px, ${randomY}px)` }
              ],
              {
                  duration: Math.random() * 3000 + 2000,
                  easing: "ease-in-out",
                  iterations: Infinity,
                  direction: "alternate"
              }
          );
      }

      animateBubble();
  }

  for (let i = 80; i--;) createBubble(); // Criar bolinhas

  function drawLines(mouseX, mouseY) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubbleObj => {
          const rect = bubbleObj.element.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;

          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) { // Aumentei um pouco a área para conectar mais rápido
              ctx.beginPath();
              ctx.moveTo(mouseX, mouseY);
              ctx.lineTo(x, y);
              ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
              ctx.lineWidth = 1;
              ctx.stroke();
          }
      });
  }

  imageContainer.addEventListener("mousemove", (event) => {
      drawLines(event.clientX, event.clientY);
  });

  imageContainer.addEventListener("mouseleave", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });
});
//Fim das bolinhas//

const words = ["TÉCNOLOGIA", "DESENVOLVIMENTO", "INOVAÇÃO", "FUTURO", "CRIATIVIDADE"];
let index = 0;

function changeWord() {
    const slideText = document.getElementById("slideText");
    slideText.textContent = words[index];
    index = (index + 1) % words.length;
}

// Aumente o tempo de 2 segundos para 5 segundos (5000 milissegundos)
setInterval(changeWord, 5000);

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  // Quando a rolagem for maior que 50px, aplica a classe para o menu ficar opaco
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

