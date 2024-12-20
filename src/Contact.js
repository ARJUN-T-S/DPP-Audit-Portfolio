import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_qoh1gz8', // Replace with your EmailJS service ID
        'template_xnier6d', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'AdNSCfJzZs3ob9Eoh' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert('Feedback sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Failed to send feedback:', error);
          alert('Failed to send feedback. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="w-full min-h-[1000px] flex flex-col justify-center items-center p-4 gap-10" id="contact">
      {/* Location Section */}
      <div className="w-full md:w-3/5 min-h-[300px] flex flex-col justify-center items-center bg-[#6552d0] rounded-3xl p-6">
        <h1 className="text-white font-extrabold text-3xl underline">LOCATION</h1>
        <div className="flex justify-center items-center w-full md:w-[700px] h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.959697657378!2d79.13099927484025!3d12.91031188739947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad39c05f0faf27%3A0xe22851b99030dbfa!2sD%20P%20Pillai%20%26%20Co.%2C!5e0!3m2!1sen!2sin!4v1734285810739!5m2!1sen!2sin"
            className="w-full h-full rounded-3xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full md:w-3/4 min-h-[300px] bg-[#6552d0] rounded-3xl flex flex-col p-4 gap-6 place-items-center">
        <h1 className="text-white text-[30px] sm:text-[50px] font-extrabold text-center">Contact Us</h1>
        <p className="text-white text-xl sm:text-2xl font-bold text-center">Email: velloresivakumartg@gmail.com</p>
        <p className="text-white text-xl sm:text-2xl font-bold text-center">Phone: 9842321071, 8015324547</p>
        <p className="text-white text-xl sm:text-2xl font-bold text-center">
          Address: 54/72 Avalkara Street, Kosapet-632001, Vellore, Tamil Nadu
        </p>
      </div>

      {/* Feedback Form Section */}
      <div className="w-full md:w-3/4 min-h-[400px] bg-[#6552d0] rounded-3xl flex flex-col p-6 gap-6">
        <h1 className="text-white text-[40px] font-extrabold text-center">Feedback Form</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full h-[50px] rounded-xl p-4 text-lg bg-white text-gray-700 shadow-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full h-[50px] rounded-xl p-4 text-lg bg-white text-gray-700 shadow-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            className="w-full rounded-xl p-4 text-lg bg-white text-gray-700 shadow-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-[50px] rounded-xl bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-all ${
              isSubmitting && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
