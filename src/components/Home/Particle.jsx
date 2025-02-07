import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Container is loaded and can be modified if needed
  }, []);

  return (
    <div className="absolute w-full h-full">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false }, // This is crucial - prevents fullscreen mode
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 150,
                  duration: 0.5,
                },
              },
            },
            particles: {
              color: {
                value: "#ED0968",
              },
              links: {
                color: "#ED0968",
                distance: 150,
                enable: true,
                opacity: 1.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 120, // Reduced for better performance
              },
              opacity: {
                value: 1.5,
              },
              shape: {
                type: "square",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};