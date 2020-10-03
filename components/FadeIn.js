import React from 'react';
import { keyframes } from "@emotion/core";
import Reveal from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeIn = ({ children, className = '', fast }) => {
    return (
        <Reveal keyframes={customAnimation} className={className} triggerOnce fraction={0.5}>
            <div>
                {children}
            </div>
        </Reveal>
    );
};

export default FadeIn;