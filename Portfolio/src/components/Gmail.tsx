// import React from 'react';
import { isMobile } from 'react-device-detect'; // Import isMobile from react-device-detect
import Gmail from '../assets/gmail.svg';

const EmailButton = () => {
  const handleEmailClick = () => {
    const recipientEmail = 'ashbumn.01@gmail.com'; // Replace with the recipient's email
    // const subject = 'Subject of the email';
    // const body = 'Body of the email';

    if (isMobile) {
      // Open default email client on mobile (Gmail app if installed)
      window.location.href = `mailto:${recipientEmail}`;
    } else {
      // Open Gmail in the browser on desktop
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
      window.open(gmailUrl, '_blank');
    }
  };

  return (
    <div >

      <button onClick={handleEmailClick} className='peer'>
        <img src={Gmail} alt="Gmail"/>
      </button>
      <p className=" mt-[-12px] relative ease-in-out transition-all text-center text-black text-sm font-light font-inter peer-hover:text-rose ">
        Get in touch
      </p>
    </div>
  );
};

export default EmailButton;