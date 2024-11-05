import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const phoneNumber = '+923159999544'; // Replace with the desired phone number

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 bg-green-700 text-white p-3 rounded-full hover:bg-green-600 transition duration-200 flex items-center shadow-lg"
        style={{ zIndex: 1000 }} // Ensures it stays on top of other elements
      >
        <FaWhatsapp  size={30} /> {/* WhatsApp icon size set to 24px */}
      </button>
    </div>
  );
};

export default Whatsapp;
