import React from "react";
import Particles from "react-particles-js";
const particlesOptions = {
    "particles": {
        "line_linked": {
            "shadow": {
                "enable": true,
                "color": "#ff4f40",
                "blur": 5
            }
        },
        "number": {
            "value": 50
        },
        "size": {
            "value": 7
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};
const Particle = () => (
  <div className="particles">
    <Particles params={particlesOptions} />
  </div>
);

export default Particle;
