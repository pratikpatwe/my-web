import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-6 text-white">Get in Touch</h2>
          <p className="text-gray-400 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-gray-200 focus:border-[#00f3ff] rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-gray-200 focus:border-[#00f3ff] rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-gray-200 focus:border-[#00f3ff] rounded-md"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-[#00f3ff] text-[#0a0a0a] hover:bg-[#00f3ff]/90 transition-colors rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:pratik@example.com"
              className="flex items-center text-gray-400 hover:text-[#00f3ff]"
            >
              <Mail className="mr-2" size={20} />
              pratik@example.com
            </a>
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-[#00f3ff]"
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