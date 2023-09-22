
    let stars = [];
    let effect = document.getElementById('stars-effect')

    AFRAME.registerComponent('stars', {
      init: function () {
        const sceneEl = this.el;
        const starsContainer = document.getElementById('starsContainer');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const width = sceneEl.getAttribute('width');
        const height = sceneEl.getAttribute('height');
        canvas.width = width;
        canvas.height = height;
        starsContainer.appendChild(canvas);

        createStars();
        animate();

        function createStars() {
        
            const groupCount = 4; // Número de grupos
            const starsPerGroup = 80; // Estrellas por grupo

            const bodyStyle = document.body.style;
            bodyStyle.margin = '0';
            bodyStyle.overflow = 'hidden';
            bodyStyle.backgroundColor = '#3E3F4A';

            const canvasStyle = canvas.style;
            canvasStyle.position = 'absolute';
            canvasStyle.top = '0';
            canvasStyle.left = '0';
            canvasStyle.width = '100%';
            canvasStyle.height = '100%';

          for (let i = 0; i < groupCount; i++) {
            const groupVelocity = Math.random() * 2 - 1; // Velocidad de grupo aleatoria

            for (let j = 0; j < starsPerGroup; j++) {
              const x = Math.random() * width;
              const y = Math.random() * height;
              const velocity = (Math.random() + 0.5) * groupVelocity; // Velocidad aleatoria dentro del grupo

              stars.push({
                x: x,
                y: y,
                size: Math.random() * 1 + 0.5, // Tamaño aleatorio
                opacity: 1, // Opacidad al 100%
                velocity: 0, // Velocidad vertical cero (movimiento horizontal solamente)
                horizontalVelocity: Math.random() * 2 - 1 // Velocidad horizontal aleatoria
              });
            }
          }
        }

        function animate() {
          ctx.clearRect(0, 0, width, height);

          stars.forEach(star => {
            star.x += star.horizontalVelocity; // Mover estrella horizontalmente
            star.y += star.velocity;

            if (star.x < -2 || star.x > width + 2 || star.y < -2 || star.y > height + 2) {
              resetStar(star); // Reubicar estrella si se sale del lienzo
            }

            ctx.beginPath();
            ctx.fillRect(star.x, star.y, star.size, star.size);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
          });

          requestAnimationFrame(animate);
        }

        function resetStar(star) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }
      }
    });
