import moment from 'moment';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 flex justify-start border-t-2 border-t-grey-300">
      <p>© {moment().year()} Flightless Nerd, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;