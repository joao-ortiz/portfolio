import './App.css';
import React from 'react'
import Particles from 'react-tsparticles';
import Menu from "./Components/Menu"

function App() {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Menu />
      <Particles
        params={{style:{width:"94vw",pointerEvents:"none", height: "calc(100vh - 6vw)", position: "absolute"},
          fps_limit: 60,
            interactivity: {
              detect_on: "canvas",
              events: {
                onclick: { enable: true, mode: "repulse" },
                onhover: {
                  enable: true,
                  mode: "bounce",
                  parallax: { enable: true, force: 60, smooth: 10 }
                },
                resize: true
              },
              modes: {
                push: { quantity: 10 },
                attract: { distance: 200, duration: 0.4, factor: 5 }
              }
            },
            particles: {
              color: { value: "#E1D9D1" },
              line_linked: {
                color: "#E1D9D1",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 1,
                straight: false
              },
              number: { density: { enable: true, value_area: 800 }, value: 80 },
              opacity: {
                anim: { enable: false, opacity: 0.3, speed: 1, sync: false },
                random: false,
                value: 0.5
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400"
                },
                // image: {
                //   height: 100,
                //   replace_color: true,
                //   src: "images/github.svg",
                //   width: 100
                // },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle"
              },
              size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5
              }
            },
            polygon: {
              draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
              move: { radius: 10 },
              scale: 1,
              type: "none",
              url: ""
            }
          }}
        id="tsparticles"
        className='canvas-class'
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
}

export default App;
