import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="bg-white border p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border focus:border-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border focus:border-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border focus:border-black"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:pratik@example.com"
              className="flex items-center text-gray-600 hover:text-black"
            >
              <Mail className="mr-2" size={20} />
              pratik@example.com
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-black"
            >
              <MessageSquare className="mr-2" size={20} />
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}