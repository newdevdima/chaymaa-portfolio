<script setup>
import Navbar from "@/components/Navbar.vue";
import ParticleBackground from "@/components/ParticleBackground.vue";
</script>

<template>
  <ParticleBackground />
  <Navbar />
  <div class="app-container">
    <router-view />
  </div>
</template>


<style scoped>
main {
  display: flex;
  justify-content: center;
  width: 100vw;
  height:100vw;
}
:global(body) {
  background-color: #220359;
  text-align: center;
  font-family: Consolas, monospace;

}
:deep(nav) {
  width: 100%;
  display: flex;
  justify-content: center; /* Center content horizontally */
  background-color: #3b0ca3; /* Example background */
}

.app-container {
  display: flex;
  justify-content: center; /* horizontal centering */
  height: 100vh;           /* full height of the viewport */
  width: 100vw;            /* full width of the viewport */
  position: relative;      /* in case you have background particles behind */
  z-index: 1;              /* make sure content is above particles */
}
</style>

