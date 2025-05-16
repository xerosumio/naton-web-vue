document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 120, // Increased from 60 to 120 for more particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FDFAF6" // Lighter color for better visibility
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.7, // Slightly increased opacity for better visibility
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2, // Increased from 3 to 4
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#FDFAF6",
                "opacity": 0.6, // Slightly increased opacity
                "width": 1.2 // Slightly increased width for better visibility
            },
            "move": {
                "enable": true,
                "speed": 3, // Increased from 3 to 4 for more reactive movement
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse" // Changed from "grab" to "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "repulse": {
                    "distance": 120, // Increased from 100 to 120
                    "duration": 1.0  // Increased from 0.8 to 1.0 for longer effect
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
