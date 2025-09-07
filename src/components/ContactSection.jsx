import React from 'react';
import { Mail } from 'lucide-react';

// Import SVGs as images
import UpworkIcon from '@/assets/upwork.svg';
import WhatsAppIcon from '@/assets/whatsapp.svg';

const ContactSection = () => (
  <section className="py-16 px-4" id="contact">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold mb-6">
          Ready to Create Something Amazing?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your raw footage into viral content that captivates your audience and drives results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Mail className="w-8 h-8" />,
            title: 'Email',
            subtitle: 'refinecut@gmail.com',
            link: 'mailto:refinecut@gmail.com',
            gradient: true,
          },
          {
            icon: <img src={UpworkIcon} alt="Upwork" className="w-16 h-16 object-contain" />,
            title: 'Upwork',
            subtitle: 'View Profile',
            link: 'https://www.upwork.com/freelancers/~01d6e7fd1689aa5f8a?mp_source=share',
            gradient: false,
          },
          {
            icon: <img src={WhatsAppIcon} alt="WhatsApp" className="w-16 h-16 object-contain" />,
            title: 'WhatsApp',
            subtitle: 'Quick Chat',
            link: 'https://wa.me/+923125112216',
            gradient: false,
          },
        ].map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target={contact.title !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            {/* Icon wrapper - ensures same size for all */}
            <div
              className={`w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                ${contact.gradient ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl' : ''}`}
            >
              {contact.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              {contact.subtitle}
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
