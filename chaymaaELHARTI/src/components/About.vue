<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import LeoConstellation from '@/components/LeoConstellation.vue'

export default defineComponent({
  name: 'About',
  components: { LeoConstellation },
  setup() {
    const ageYears = ref(0)
    const ageMonths = ref(0)
    const ageDays = ref(0)
    const ageHours = ref(0)
    const ageMinutes = ref(0)
    const ageSeconds = ref(0)

    const updateLiveAge = () => {
      const birthDate = new Date('2000-08-01T00:00:00')
      const now = new Date()
      let years = now.getFullYear() - birthDate.getFullYear()
      let months = now.getMonth() - birthDate.getMonth()
      let days = now.getDate() - birthDate.getDate()
      let hours = now.getHours() - birthDate.getHours()
      let minutes = now.getMinutes() - birthDate.getMinutes()
      let seconds = now.getSeconds() - birthDate.getSeconds()

      if (seconds < 0) {
        seconds += 60
        minutes--
      }
      if (minutes < 0) {
        minutes += 60
        hours--
      }
      if (hours < 0) {
        hours += 24
        days--
      }
      if (days < 0) {
        months--
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += prevMonth.getDate()
      }
      if (months < 0) {
        months += 12
        years--
      }

      ageYears.value = years
      ageMonths.value = months
      ageDays.value = days
      ageHours.value = hours
      ageMinutes.value = minutes
      ageSeconds.value = seconds
    }

    let timer: number

    onMounted(() => {
      updateLiveAge()
      timer = window.setInterval(updateLiveAge, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    return {
      ageYears,
      ageMonths,
      ageDays,
      ageHours,
      ageMinutes,
      ageSeconds,
    }
  },
})
</script>


<template>
  <div class="page-container">
    <div class="about-page">
    <div class="weird-rectangle">
       <p>
        Je suis Chaymaa ELHARTI, lauréate de l'École Nationale des Sciences Appliquées de Kénitra (ENSAK), promotion 2023. 
        Passionnée par les technologies de développement, j’aime particulièrement le travail en équipe, car il fait ressortir le meilleur de moi-même.
      </p>

      <p>
        Bien que francophone, je privilégie les environnements anglophones, car l’anglais reste la langue universelle du développement.
      </p>

      <p>
        En dehors du code, j’adore regarder des films et des séries — c’est mon passe-temps préféré (en attendant de pouvoir me payer des voyages 😅).
        Comme tout le monde, j’aime découvrir de nouvelles choses, explorer d’autres cultures et sortir de ma zone de confort.
      </p>
      <!--<p>📅 {{ ageYears }} ans, {{ ageMonths }} mois et {{ ageDays }} jours.</p>-->



    </div>

  </div>
      <div>
                  <p>
        Mon AGE <span class="countDown">{{ ageYears }}</span> ans <span class="countDown">{{ ageMonths }}</span> mois, <span class="countDown">{{ ageDays }}</span> jours
        <span class="countDown">{{ ageHours }}</span>h <span class="countDown">{{ ageMinutes }}</span>m <span class="countDown">{{ ageSeconds }}</span>s
      </p>
    <section class="experiences">
  <h2>Expériences Professionnelles</h2>
      
  <article class="experience">
    <div class="left">
      <p class="date">Novembre 2024 - Mai 2025</p>
      <p class="company">2 CA Business</p>
      <p class="role">Développeuse Web Laravel</p>
    </div>
    <div class="separator"></div>
    <div class="right">
      <ul>
        <li>Développement de l'application de gestion RH avec Laravel.</li>
        <li>La mise en œuvre du low code pour automatiser les réclamations des clients.</li>
        <li>Participation à la création du V.2 du CRM Laravel (API) et front end Vue js.</li>
      </ul>
    </div>
  </article>

  <article class="experience">
    <div class="left">
      <p class="date">Janvier - Avril 2024</p>
      <p class="company">Hard Auto</p>
      <p class="role">CDD Développeur</p>
    </div>
    <div class="separator"></div>
    <div class="right">
      <ul>
        <li>Participation au projet RH-Permission via Power Apps et Power Automate.</li>
        <li>Réalisation d'une application Desktop.</li>
        <li>Réalisation des rapport et Dashboard avec Power BI.</li>

      </ul>
    </div>
  </article>

      <article class="experience">
    <div class="left">
      <p class="date">Mars 2023 - Septembre 2023</p>
      <p class="company">Capgemini Engineering</p>
      <p class="role">PFE - Développeur C#</p>
    </div>
    <div class="separator"></div>
    <div class="right">
      <ul>
        <li>Construction d’une application mobile avec SDK Android.</li>
        <li>Intégration de la réalité augmentée avec Unity 3D et Vuforia Engine en C# et .NET.</li>
        <li>Création des maquettes fonctionnelles avec Figma.</li>
      </ul>
    </div>
  </article>
<article class="experience">
    <div class="left">
      <p class="date">Juillet - Septembre 2022</p>
      <p class="company">Gharb Papier Carton</p>
      <p class="role">Stage d’initiation</p>
    </div>
    <div class="separator"></div>
    <div class="right">
      <ul>
        <li>Participation au projet RH-Permission via Power Apps et Power Automate.</li>
        <li>Apprentissage et mise en œuvre du low code pour automatiser la gestion des permissions RH.</li>
      </ul>
    </div>
  </article>


  </section>
    </div>  
  </div>

  

</template>


<style scoped>
.about-page {
 display: flex;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background: transparent;
  justify-content: center; 
}
.page-container {
  display: flex;
  flex-direction: column;
}

.weird-rectangle {
  width: 80%;
  max-width: 1000px;
  background: linear-gradient(135deg, #000010, #000033);
  color: white;
  padding: 3rem;
  border-radius: 30% 50% 60% 30% / 40% 60% 30% 20%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  text-align: center;
  animation: moon-glow 6s ease-in-out infinite alternate;
}

@keyframes moon-glow {
  0% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  }
}
.experiences {
  max-width: 900px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  color: #837c7c;
}

.experiences h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #5d6e80;
}

.experience {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
}

.left {
  width: 30%;
  padding-right: 1rem;
  text-align: right;
  font-size: 0.95rem;
  color: #b4b2b2;
  flex-shrink: 0;
}

.left .date {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.left .company {
  font-style: italic;
  margin-bottom: 0.25rem;
}

.left .role {
  font-weight: 600;
  color: #2980b9;
}

.separator {
  width: 1px;
  background-color: #ccc;
  margin: 0 1rem;
  align-self: stretch;
}

.right {
  width: 65%;
  font-size: 1rem;
}

.right ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

/* Responsive : en petits écrans on empile */
@media (max-width: 700px) {
  .experience {
    flex-direction: column;
  }

  .left {
    width: 100%;
    text-align: left;
    padding-right: 0;
    margin-bottom: 0.5rem;
  }

  .separator {
    display: none;
  }

  .right {
    width: 100%;
  }
}
.countDown{
  font-size: large;
  font-weight: 100;
  border: #ccc solid 1px;
  padding: 3px;
  color: #ddd;
}

</style>
