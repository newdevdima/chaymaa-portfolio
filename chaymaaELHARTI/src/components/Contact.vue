

<template>
  <div class="contact-page">
    <h1>Contactez-moi</h1>
    
    <div class="">
      <div class="weird-rectangle">
        <p><a href="tel:+212658601214" class="call-button">
      Appeler
    </a></p>
        <p>🐙💻<a href="https://github.com/newdevdima" class="white"> Github.</a></p>
        <p>💼<a href="https://www.linkedin.com/in/chaymaa-elharti" class="white"> Linkedin.</a></p>
        <p>📬<a href="#" class="white">elhartichaymaa71@gmail.com</a></p>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Contact'
})
</script>

<style scoped>
.contact-page {
  color: white;
  padding: 100px 2rem;
  font-family: 'Bahnschrift', sans-serif;
  text-align: center;
}

.contact-page h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px cyan;
}

.contact-page p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.call-button {
  display: inline-block;
  padding: 6px 12px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.call-button:hover {
  background-color: #45a049;
}
.column {
  display: flex;
  flex-direction: row;
  gap: 5rem; /* space between items */
}
.weird-rectangle {
  background: linear-gradient(135deg, #000000, #000020);
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  animation: moon-glow 4s ease-in-out infinite;
  transition: box-shadow 0.3s ease;
  margin-top: 100px;
  border-radius: 10px;

}
.shape1{
  border-radius: 30% 50% 60% 30% / 40% 60% 30% 20%;
  width: 400px;
}
.shape2{
  border-radius: 40% 60% 70% 40% / 30% 50% 20% 30%;
  width: 450px;
}
.shape3{
  border-radius: 60% 40% 30% 60% / 70% 50% 40% 70%;
  width: 500px;
}
.white{
  color: white;
  font-weight: lighter;
}
</style>