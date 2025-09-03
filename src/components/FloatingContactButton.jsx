import React, { useState } from 'react';

const contacts = [
  {
    name: 'WhatsApp',
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-green-500" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.38 5.09L2 22l5.09-1.38A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.2-3.02.82.81-2.95-.21-.33A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.27-1.57-.13-.23-.01-.35.11-.47.11-.11.23-.29.35-.44.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.44-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.21.93 2.37c.11.15 1.61 2.46 3.92 3.35.55.19.98.3 1.31.38.55.14 1.05.12 1.45.07.44-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28z"/></svg>
    ),
    url: 'https://wa.me/yourwhatsappnumber',
  },
  {
    name: 'Upwork',
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-green-600" viewBox="0 0 24 24"><path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zm-8.5 13.5h-2v-4.5h2v4.5zm6-4.5h-2v4.5h2v-4.5zm-3-2.5h-2v2.5h2V9zm-6 0H7v2.5h2V9zm9 0h-2v2.5h2V9z"/></svg>
    ),
    url: 'https://www.upwork.com/freelancers/~yourprofile',
  },
  {
    name: 'Gmail',
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-red-500" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/></svg>
    ),
    url: 'mailto:youragency@gmail.com',
  },
];

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className={`bg-primary text-white rounded-full shadow-lg p-4 transition-all duration-300 ${open ? 'scale-110' : 'scale-100'}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Contact"
      >
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="flex flex-col gap-3 mt-2 animate-fade-in">
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target={c.name !== 'Gmail' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-full shadow px-4 py-2 hover:bg-gray-100 transition"
            >
              {c.icon}
              <span className="font-semibold text-sm">{c.name}</span>
            </a>
          ))}
        </div>
      )}
        
    </div>
    
  );
};

export default FloatingContactButton;
