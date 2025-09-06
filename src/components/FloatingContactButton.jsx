import React, { useState } from 'react';
import { MessageCircle, ExternalLink, Mail, X } from 'lucide-react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      url: 'https://wa.me/yourwhatsappnumber',
      color: 'text-green-500',
      bgColor: 'hover:bg-green-50'
    },
    {
      name: 'Upwork',
      icon: <ExternalLink size={20} />,
      url: 'https://www.upwork.com/freelancers/~yourprofile',
      color: 'text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Gmail',
      icon: <Mail size={20} />,
      url: 'mailto:youragency@gmail.com',
      color: 'text-red-500',
      bgColor: 'hover:bg-red-50'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform ${
          isOpen ? 'rotate-45 scale-110' : 'hover:scale-105'
        }`}
        aria-label="Toggle contact menu"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target={contact.name !== 'Gmail' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 bg-white ${contact.bgColor} px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100`}
            >
              <span className={contact.color}>{contact.icon}</span>
              <span className="text-gray-700 font-medium pr-2">{contact.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FloatingContactButton;