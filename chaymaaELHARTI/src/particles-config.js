export const particlesOptions = {
    background: {
        color: {
            value: "#000000"
        }
    },
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.9,
            random: true
        },
        size: {
            value: 1.5,
            random: true
        },
        move: {
            enable: true,
            speed: 0.2,
            random: true,
            outModes: {
                default: "out"
            }
        }
    }
};
