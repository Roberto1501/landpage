/* eslint-disable linebreak-style */
import React from 'react';
import atomo from '../assets/atomo.png';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
}

const AnimatedImage = styled.img<ImageProps>`


  animation: myAnimation 5s infinite;

  @keyframes myAnimation {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Atomo: React.FC = () => {
  return (
    <React.Fragment>
      <div style={{
        height: '70vh',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        
      }}>
        <AnimatedImage src={atomo} alt="Atom" />
      </div>
      
    </React.Fragment>
  );
};

export default Atomo;
