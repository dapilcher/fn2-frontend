import React from 'react';

const maskGradient = 'linear-gradient(to bottom, black, 70%, transparent)'

const Hero = ({src = "/ostriches.jpg"}) => {
  return (
    <div className="w-screen h-screen -z-10 absolute top-0"
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        WebkitMaskImage: maskGradient,
        maskImage: maskGradient,
        maxHeight: '100vw'
      }}
    ></div>
  );
};

export default Hero;