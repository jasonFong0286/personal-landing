import React from 'react';
import { MessageCircle, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          {/* Brand Section */}
          <div className='flex flex-col items-center'>
            <div className="flex items-center space-x-3 mb-6">
              <img src="./assets/img/logo.png" className="h-12 w-12" alt="Logo" />
              <span className="text-2xl font-bold">Priline</span>
            </div>
            <p className="text-gray-300 mb-6 text-center leading-relaxed max-w-[400px]">
              Uniting the world through seamless web-based communication. 
              The future of browser messaging is here.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
    
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Priline. All rights reserved. Built for seamless web communication.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
