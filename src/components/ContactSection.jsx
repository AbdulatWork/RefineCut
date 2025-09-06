import React from 'react';
import { Mail, ExternalLink, MessageCircle } from 'lucide-react';

const ContactSection = () => (
  <section className="py-16 px-4" id="contact">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Ready to Create Something Amazing?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your raw footage into viral content that captivates your audience and drives results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Mail size={32} />,
            title: 'Email',
            subtitle: 'youragency@gmail.com',
            link: 'mailto:youragency@gmail.com',
            color: 'from-red-500 to-pink-500'
          },
          {
            icon: <ExternalLink size={32} />,
            title: 'Upwork',
            subtitle: 'View Profile',
            link: 'https://www.upwork.com/freelancers/~yourprofile',
            color: 'from-blue-500 to-purple-500'
          },
          {
            icon: <MessageCircle size={32} />,
            title: 'WhatsApp',
            subtitle: 'Quick Chat',
            link: 'https://wa.me/yourwhatsappnumber',
            color: 'from-green-500 to-emerald-500'
          }
        ].map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target={contact.title !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
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