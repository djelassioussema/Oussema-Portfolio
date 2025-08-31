import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { ContactForm } from './types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: 'Email', value: 'djelassioussema@gmail.com', href: 'mailto:djelassioussema@gmail.com' },
    { icon: <Phone size={24} />, label: 'Phone', value: '+216 23 52 41 23', href: 'tel:+21623524123' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Tunisia', href: null }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/oussema-jelassi/' },
    { icon: <Github size={24} />, href: 'https://github.com' },
    { icon: <Mail size={24} />, href: 'mailto:djelassioussema@gmail.com' }
  ];

  return (
    <section className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg mb-8 leading-relaxed text-gray-400">
                Whether you need help with cloud infrastructure, DevOps automation, or just want to discuss the latest in cloud technologies, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Icons Stacked Vertically */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-4 rounded-full bg-gray-800 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-gray-300 hover:text-purple-500 transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex items-center space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-transform duration-200 hover:scale-110 bg-gray-800 hover:bg-purple-600"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

{/* Contact Form */}
<div className="p-8 rounded-xl bg-gray-800 border border-gray-700 text-white">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="Your full name"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="your.email@example.com"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">Message *</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        placeholder="Tell me about your project or just say hello!"
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:scale-105"
    >
      {isSubmitting ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      ) : (
        <>
          <Send size={18} />
          Send Message
        </>
      )}
    </button>

    {submitted && (
      <div className="text-center p-4 bg-emerald-100 text-emerald-700 rounded-lg animate-fade-in">
        Thank you for your message! I'll get back to you soon.
      </div>
    )}
  </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
