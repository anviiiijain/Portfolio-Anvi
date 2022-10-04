import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return ( <
        Particles id = "tsparticles"
        params = {
            {
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
                        speed: 0.5,
                    },
                    size: {
                        value: 2,
                        random: {
                            enable: true,
                            minimumValue: 1,
                            maximumValue: 3
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
                                enabled: true,
                            },
                        },
                    },
                },
                move: {
                    bounce: true,
                    enable: true,
                    speed: 8,
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
            }
        }
        />
    );
}

export default Particle;