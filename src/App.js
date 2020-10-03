import React from "react";
import { useGravity2D } from "renature";
import "./App.css";
import Planet from './components/Planet'
import Plant from './components/Plant'

export default function App() {
  const [center, setCenter] = React.useState([0, 0]);

  React.useLayoutEffect(() => {
    const left = window.innerWidth / 2;
    const top = window.innerHeight / 2;

    setCenter([left, top]);
  }, []);

  const attractorConfig = {
    attractorMass: 1000000000000,
    attractorPosition: center
  };

  const [propsOne] = useGravity2D({
    config: {
      ...attractorConfig,
      moverMass: 10000,
      initialMoverPosition: [center[0], center[1] - 140],
      initialMoverVelocity: [0.75, 0],
      threshold: {
        min: 20,
        max: 100
      },
      timeScale: 100
    }
  });

  const [propsTwo] = useGravity2D({
    config: {
      ...attractorConfig,
      moverMass: 100000000,
      initialMoverPosition: [center[0] - 50, center[1] + 200],
      initialMoverVelocity: [-0.75, 0],
      threshold: {
        min: 20,
        max: 100
      },
      timeScale: 75
    }
  });

  const [propsThree] = useGravity2D({
    config: {
      ...attractorConfig,
      moverMass: 100000000,
      initialMoverPosition: [center[0], center[1] - 200],
      initialMoverVelocity: [1, -0.5],
      threshold: {
        min: 20,
        max: 100
      },
      timeScale: 75
    }
  });

  return (
    <div className="App">
      <div class="animated-title">
        <div class="text-top">
          <div>
            <span>Eklo</span>
            <span>Space project</span>
          </div>
        </div>
        <div class="text-bottom">
          <div>Early 2021	🚀</div>
        </div>
      </div>
      <div className="space">
        <Planet />

        <div
          className="sun"
          style={{
            transform: `translate(${center[0]}px, ${center[1]
              }px) translate(-50%, -50%)`
          }}
        />
        <div className="planetOne" {...propsOne} />
        <div className="planetTwo" {...propsTwo} />
        <div className="planetThree" {...propsThree} />
        <Plant />
      </div>
    </div>
  );
}
