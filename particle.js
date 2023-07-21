// Include particles.js library dynamically
var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
document.head.appendChild(script);

// Delay to ensure the library is loaded
setTimeout(function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#FF5733", // Change the particle color to a more appealing color
      },
      shape: {
        type: "circle", // Use circle shape for the particles
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.8, // Increase particle opacity for a softer effect
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FF0000",
        opacity: 0.4, // Reduce the opacity of the particle lines
        width: 1,
      },
      move: {
        enable: true,
        speed: 9,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab", // Change onhover mode to "grab" for a more interactive experience
        },
        onclick: {
          enable: true,
          mode: "push", // Change onclick mode to "push" for a more interactive effect
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.8, // Increase line opacity on grab
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
}, 1000); // Delay to ens
