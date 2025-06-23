<template>
  <canvas ref="leoCanvas" class="constellation-canvas"></canvas>
</template>

<script>
export default {
  name: 'LeoConstellation',
  mounted() {
    const canvas = this.$refs.leoCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Leo stars - coordinates scaled to fit screen
    const stars = [
      { name: 'Regulus', x: 20, y: 20 },
      { name: 'Algieba', x: 40, y: 40 },
      { name: 'Adhafera', x: 27, y: 45 },
      { name: 'Ras Elased Australis', x: 60, y: 45 },
      { name: 'Ras Elased Borealis', x: 67, y: 40 },
      { name: 'Zosma', x: 70, y: 27 },
      { name: 'Chertan', x: 65, y: 55 },
      { name: 'Denebola', x: 70, y: 65 },
      { name: 'Denebola', x: 77, y: 60 },

    ];

    // Draw stars
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();

      // Optional: label stars
      ctx.font = '12px Arial';
      ctx.fillStyle = '#9cf';
      ctx.fillText(star.name, star.x + 5, star.y - 5);
    });

    // Connect stars to form Leo shape
    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 4], // Sickle part
      [4, 5], [5, 6], [6, 7]          // Body to tail
    ];

    connections.forEach(([from, to]) => {
      ctx.beginPath();
      ctx.moveTo(stars[from].x, stars[from].y);
      ctx.lineTo(stars[to].x, stars[to].y);
      ctx.strokeStyle = '#88f';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
  }
};
</script>

<style scoped>
.constellation-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent; /* assume particles or starry background already exists */
  z-index: 0;
}
</style>
