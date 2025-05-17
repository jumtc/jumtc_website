"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import { loadPolygonShape } from "@tsparticles/shape-polygon";
import { useTheme } from "@mui/material/styles";
const ParticlesComponent = (props) => {
  const theme = useTheme();
  const [init, setInit] = useState(false);

  // engine init function for tsparticles
  const particlesInit = async (engine) => {
    await loadFull(engine);
    await loadPolygonShape(engine); 
  };

  useEffect(() => {
    initParticlesEngine(particlesInit).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: theme.palette.background.default,
      },
      fpsLimit: 60,
      particles: {
        number: { value: 0 }, // handled by polygon mask
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: { default: "bounce" },
        },
      },
      polygon: {
        enable: true,
        scale: 1,
        type: "inline",
        move: {
          radius: 10,
        },
        url: "/julogo.svg",
        inline: {
          arrangement: "equidistant",
        },
        draw: {
          enable: true,
          stroke: {
            color: "white",
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="polygon"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
    />
  );
};

export default ParticlesComponent;
