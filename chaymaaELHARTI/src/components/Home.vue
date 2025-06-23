<script lang="ts">
import { defineComponent, computed } from 'vue'
import ParticleBackground from "@/components/ParticleBackground.vue";

// Dynamically import all skill images using Vite
const images = import.meta.glob('@/assets/skills/*', { eager: true, as: 'url' })

export default defineComponent({
  name: "Home",
  components: { ParticleBackground },
  setup() {
    const skills = [
      "laravel.svg",
      "vue.svg",
      "mysql.svg",
      "js.svg",
      "java.svg",
      "css.svg",
      "html.svg"

    ]
    const logiciels = [
        "phpstorm.svg",
        "unity.svg",
        "vscode.svg",
        "powerautomate.svg",
        "powerapps.svg",
        "eclipse.svg",
        "sqlserver.svg",
        "oracle.svg",

    ]

    // Map each skill name to its resolved image URL
    const skillImages = computed(() =>
        skills.map(skill => images[`/src/assets/skills/${skill}`])
    )

    const logicielImages = computed(() =>
        logiciels.map(logiciel => images[`/src/assets/skills/${logiciel}`])
    )

    return {
      skillImages,
      skills,
      logiciels,
      logicielImages
    }
  }
})
</script>

<template>
  <table class="centered-table">
    <thead>
      <tr>
        <th>

        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="width: 50%;height:50%;">
          <div class="blob-wrapper">
            <svg width="0" height="0">
              <defs>
                <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.86,0.34 C0.96,0.53,0.83,0.82,0.61,0.92 C0.39,1.02,0.15,0.91,0.07,0.71 C-0.01,0.51,0.03,0.23,0.22,0.1 C0.4,-0.03,0.76,0.15,0.86,0.34 Z" />
                </clipPath>
              </defs>
            </svg>
            <div class="blob-photo">
              <img src="@/assets/portfolio.jpg" alt="Blob Photo" />
            </div>

          </div>
        </td>
        <td>
          <h1 class="profile">Chaymaa ELHARTI</h1>
          <h1 class="profile">Génie Logiciel & Développement Web</h1>
        </td>
      </tr>
    <tr class="profile-presentation" >
      <td colspan="2">
      <div >

      </div>
      </td>
    </tr>
      <tr>
        <td colspan="2">
          <div class="weird-rectangle">
            <h6 >Je suis une développeuse avec des compétences en Laravel, Vue JS, et des connaissances en Spring Boot.
              J'ai un bon esprit logique, un sens de la responsabilité et une capacité à résoudre des problèmes. Curieuse
              et ouverte aux innovations technologiques, comme l'IA le XR et le low Code.
            </h6>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="">
            <h2 style="color:white;">Mes compétences</h2>
            <div class="skills-scroller">
              <div class="skills-row animation-toright" :style="{ animationDuration: '20s' }">
                <div class="skill-item" v-for="(skill, index) in skills" :key="index">
                  <img :src="skillImages[index]" :alt="'Skill ' + index" />
                </div>
                <!-- Duplicate for infinite effect -->
                <div class="skill-item" v-for="(skill, index) in skills" :key="'copy-' + index">
                  <img :src="skillImages[index]" :alt="'Skill copy ' + index" />
                </div>
              </div>
            </div>


            <!--<div class="orbit-container">
              <div class="center-point"></div>
              <div class="orbit" v-for="(skill, index) in skills" :key="index" :style="{ transform: 'rotate(' + index * (360 / skills.length) + 'deg)' }">
                <div class="orbit-item"
                     v-for="(skill, index) in skills"
                     :key="index"
                     :style="{
       transform: 'rotate(' + (index * (360 / skills.length)) + 'deg) translate(150px) rotate(-' + (index * (360 / skills.length)) + 'deg)'
     }">
                  <img :src="skillImages[index]" :alt="skill" />
                </div>

              </div>
            </div>-->

          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="">
            <h2 style="color:white;">Les logiciels que j'ai travaillé avec</h2>
            <div class="skills-scroller">
              <div class="skills-row animation-toleft" :style="{ animationDuration: '20s' }">
                <div class="skill-item" v-for="(logiciel, index) in logiciels" :key="index">
                  <img :src="logicielImages[index]" :alt="'Logiciel ' + index" />
                </div>
                <!-- Duplicate for infinite effect -->
                <div class="skill-item" v-for="(logiciel, index) in logiciels" :key="'copy-' + index">
                  <img :src="logicielImages[index]" :alt="'Logiciel copy ' + index" />
                </div>
              </div>
            </div>

          </div>
        </td>
      </tr>
    </tbody>


  </table>
</template>

<style scoped>
  .profile{
    color: white;
    font-family: Bahnschrift,serif;
    font-size: xxx-large;
    font-weight: lighter;
  }
  .centered-table{
    text-align: center;
    width: 80%;
    margin-top: 100px;
  }

  .blob-photo {
    width: 400px;
    height: 600px;
    overflow: hidden;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; /* Forme blob */
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .blob-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blob-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: url(#blobClip);
    object-position: right top;
  }
  .profile-presentation{
    color:white;
    margin-right: 100px;
    margin-left: 100px;
    align-items: center;
    width: 100%;
  }
  .weird-rectangle {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #000000, #000020);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 2rem;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; /* Forme blob rectangulaire */
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    animation: moon-glow 4s ease-in-out infinite;
    transition: box-shadow 0.3s ease;
    margin-top: 100px;

  }

  .orbit-item img {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 4px #fff);
    transition: transform 0.3s ease;
  }

  .orbit-item img:hover {
    transform: scale(1.2);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .skills-scroller {
    margin-top: 100px;
    margin-bottom: 100px;
    width: 1200px;
    overflow: hidden;
    position: relative;
    border: none;
  }

  .skills-row {
    display: flex;
    width: max-content;
    gap: 8rem;
  }
  .animation-toright {
    animation: scroll-right 20s linear infinite;
  }
  .animation-toleft {
    animation: scroll-left 20s linear infinite;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .skill-item img {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 0 4px #fff);
    transition: transform 0.3s ease;
  }

  .skill-item img:hover {
    transform: scale(1.2);
  }

  @keyframes moon-glow {
    0% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
    }
    100% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }
  }




</style>
