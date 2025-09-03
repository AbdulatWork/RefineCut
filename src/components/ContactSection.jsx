import React from 'react';

const ContactSection = () => (
  <section className="py-12 px-4 text-center bg-gray-50 rounded-lg shadow-md mt-12">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Ready to turn your raw footage into viral content? Reach out today!</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
      <a href="mailto:youragency@gmail.com" className="hover:underline text-blue-600 flex items-center gap-2">
        <span>Gmail:</span> <span>youragency@gmail.com</span>
      </a>
      <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-600 flex items-center gap-2">
        <span>Upwork:</span> <span>upwork.com/freelancers/~yourprofile</span>
      </a>
      <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-500 flex items-center gap-2">
        <span>WhatsApp:</span> <span>wa.me/yourwhatsappnumber</span>
      </a>
    </div>
  </section>
);

export default ContactSection;
