import moment from 'moment';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 w-screen z-10 flex justify-start">
      <p>© {moment().year()} Flightless Nerd, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;