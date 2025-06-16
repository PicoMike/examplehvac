import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface PhoneButtonProps {
  phoneNumber?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const PhoneButton: React.FC<PhoneButtonProps> = ({ 
  phoneNumber = "(555) 123-4567",
  className = "",
  variant = 'primary'
}) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  const baseClasses = variant === 'primary' 
    ? "bg-[#ff5722] text-white hover:bg-[#e64a14]" 
    : "border border-white text-white hover:bg-white hover:text-[#16181d]";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        onClick={handleCall}
        className={`relative rounded-[30px] h-[49px] px-6 flex items-center justify-between ${baseClasses} ${className}`}
      >
        <span className="font-['Roboto',Helvetica] font-medium text-[16.1px]">
          {phoneNumber}
        </span>
        <motion.div 
          className="w-10 h-10 bg-[#16181d] rounded-[20px] flex items-center justify-center ml-4"
          whileHover={{ rotate: 15 }}
        >
          <img
            className="w-[25px] h-[25px]"
            alt="Call"
            src="/call-3.png"
          />
        </motion.div>
      </Button>
    </motion.div>
  );
};