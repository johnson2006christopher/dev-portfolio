// src/pages/Contact.tsx

import { useState } from 'react';
import { ContactFormData } from '../types';

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // We'll add Zod validation later!
    alert('Message sent! (Not really - we\'ll add this later)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-400 mb-12">
          Have a question or want to work together? Drop me a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="What's this about?"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
          <div className="space-y-4 text-gray-400">
            <div>
              <strong className="text-white">Email:</strong> your.email@example.com
            </div>
            <div>
              <strong className="text-white">GitHub:</strong>{' '}
              <a href="https://github.com/yourusername" className="text-blue-400 hover:text-blue-300">
                @yourusername
              </a>
            </div>
            <div>
              <strong className="text-white">LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/yourname" className="text-blue-400 hover:text-blue-300">
                /in/yourname
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;