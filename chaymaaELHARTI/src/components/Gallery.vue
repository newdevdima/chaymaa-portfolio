<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Gallery"
})
</script>

<template>
  <div class="twoRows">

  <div class="twoColumns">
  <div>
    <h2 style="color:white; margin-left: 100px;">Mon projet PFE</h2>
  </div>
  <!--<div class="video-container">
    <video controls muted width="640" height="300">
      <source src="https://drive.google.com/uc?export=download&id=1oyjV2ES_TWjNoetWNIMidpSFPgPdSzyQ" type="video/mp4" />
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  </div>-->
  <iframe src="https://drive.google.com/file/d/1oyjV2ES_TWjNoetWNIMidpSFPgPdSzyQ/preview" 
        width="640" 
        height="360" 
        allow="autoplay" 
        allowfullscreen>
</iframe>


  </div>
  <br>
  <div class="twoColumns">
  <div>
    <p style="color:white;margin-bottom: 10px;">Un projet sirh</p>
    <a href="https://sirh.ccaconnecthub.fr" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/skills/sirh.jpg" alt="My Project Screenshot" class="main-image" />
    </a>
  </div>
    <div>
      <p style="color:white;margin-bottom: 10px;">Contribution à un CRM</p>
      <a href="https://dev.carrezconseil.com" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/skills/crm.png" alt="My Project Screenshot" class="main-image" />
      </a>
    </div>
  </div>
  </div>
</template>

<style scoped>

.video-container {
  max-width: 450px;
  margin: auto;
  padding: 20px;
}
video {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}
.twoColumns{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:7rem;

}
 .image-container {
   display: flex;
   justify-content: center;
   margin-top: 2rem;
 }

.main-image {
  max-width: 90%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.main-image:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}
.twoRows{
  display: flex;
  flex-direction: column;
  margin: 100px;
  padding-bottom: 100px;

}

</style>