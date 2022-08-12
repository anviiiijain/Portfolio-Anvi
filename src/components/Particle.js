import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
    //   params={{
    // "particles": {
    //     "number": {
    //         "value": 80,
    //         "density": {
    //             "enable": true,
    //             "area": 800
    //         }
    //     },
    //     "opacity": {
    //         "value": 0.5,
    //         "random": false,
    //         "animation": {
    //             "enable": false,
    //             "speed": 1,
    //             "minimumValue": 0.1,
    //             "sync": false
    //         }
    //     },
    //     "size": {
    //         "value": 1,
    //         "random": {
    //             "enable": true,
    //             "minimumValue": 1,
    //               maximumValue:2
    //         },
    //         "animation": {
    //             "enable": false,
    //             "speed": 40,
    //             "minimumValue": 0.1,
    //             "sync": false
    //         }
    //     },
    //     "lineLinked": {
    //         "enable": false,
    //         "distance": 150,
    //         "color": "#ffffff",
    //         "opacity": 0.4,
    //         "width": 1
    //     },
    //     "move": {
    //         "bounce": true,
    //         "enable": true,
    //         "speed": 5,
    //         "direction": "none",
    //         "random": false,
    //         "straight": false,
    //         "out_mode": "bounce",
    //         "attract": {
    //             "enable": false,
    //             "rotateX": 600,
    //             "rotateY": 1200
    //         }
    //     }
    // },
    // "interactivity": {
    //     "events": {
    //         "onHover": {
    //             "enable": false,
    //             "mode": "repulse",
    //             "parallax": {
    //                 "enable": false,
    //                 "force": 60,
    //                 "smooth": 10
    //             }
    //         },
    //         "onClick": {
    //             "enable": true,
    //             "mode": "push"
    //         },
    //         "resize": true
    //     },
    //     "modes": {
    //         "grab": {
    //             "distance": 400,
    //             "line_linked": {
    //                 "opacity": 1
    //             }
    //         },
    //         "bubble": {
    //             "distance": 400,
    //             "size": 40,
    //             "duration": 2,
    //             "opacity": 0.8,
    //             "speed": 3
    //         },
    //         "repulse": {
    //             "distance": 200
    //         },
    //         "push": {
    //             "particles_nb": 4
    //         },
    //         "remove": {
    //             "particles_nb": 2
    //         }
    //     }
    // },
    // "detectRetina": true,
    // "background": {
    //     "color": "#0d47a1",
    //     "image": "",
    //     "position": "50% 50%",
    //     "repeat": "no-repeat",
    //     "size": "cover"
    // }
    //   }}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 2,
            random: {
                enable: true,
                minimumValue: 1,
                  maximumValue:3
            },
            animation: {
                enable: true,
                speed: 4,
                minimumValue: 0.1,
                sync: false
            }
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "attract",
            }
          },
        },
        motion: {
          particles: {
            move: {
              distance: {
                enabled:true,
              },
            },
          },
        },
        move: {
            bounce: true,
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
