<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Navbar"
})
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/" exact-active-class="active-link">Home</router-link></li>
      <li><router-link to="/about" exact-active-class="active-link">About</router-link></li>
      <li><router-link to="/gallery" exact-active-class="active-link">Gallery</router-link></li>
      <li><router-link to="/contact" exact-active-class="active-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 55px;
  margin-left: 0px;
  background-color: transparent; /* deep dark tone */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ffffff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #8db5b5;
}
.router-link-active,
.active-link {
  position: relative;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0 0 5px cyan, 0 0 10px cyan;
}

.active-link::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 5px;
  background: radial-gradient(circle, rgba(162, 202, 202, 0.6) 0%, transparent 80%);
  box-shadow: 0 0 20px rgba(143, 175, 175, 0.5);
  border-radius: 50%;
  animation: glow-pulse 2s infinite ease-in-out;
}

@keyframes glow-pulse {
  0% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
  }
}
</style>