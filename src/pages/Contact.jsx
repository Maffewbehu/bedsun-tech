import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Message sent!');
    }).catch(err => {
      console.error('EmailJS error:', err);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            onChange={handleChange}
            className="w-1/2 border rounded p-2"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            onChange={handleChange}
            className="w-1/2 border rounded p-2"
          />
        </div>
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
