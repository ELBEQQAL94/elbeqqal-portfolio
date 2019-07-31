import React from 'react';
import Fade from "react-reveal/Fade";

const Title = ({name}) => (
    <div>
        <Fade left>
          <h1>{name}</h1>
        </Fade>
    </div>
);

export default Title;