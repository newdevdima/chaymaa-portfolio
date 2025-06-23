
<template>

      <vue-particles
          id="tsparticles"
          :particlesLoaded="particlesLoaded"
          :options="{
                    background: {
                        color: {
                            value: '#130c1a'
                        }
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        opacity: {
                            value: { min: 0.1, max: 1 }, // fade in/out range
                            animation: {
                              enable: true,
                              speed: 1,
                              minimumValue: 0.1,
                              sync: false // each star fades at different time
                            }
                          },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 150
                        },

                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 1.5 }
                        }
                    },
                    detectRetina: true
                }"
      />

</template>

<style scoped>
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
