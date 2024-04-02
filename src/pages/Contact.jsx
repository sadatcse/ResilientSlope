import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title/Title';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from '@emailjs/browser';

import Logo from "/logo3.png";
import Swal from 'sweetalert2';
const Contact = () => {
  
  const form = useRef();
    useEffect(() => {
        AOS.init(); 
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
        emailjs
          .sendForm(import.meta.env.VITE_service, import.meta.env.VITE_tamplet, form.current, {
            publicKey: import.meta.env.VITE_apiKey,
          })
          .then(
            () => {

              console.log('SUCCESS!');
            },
            (error) => {

              console.log('FAILED...', error.text);
            },
          );
        
        setFormData({ name: '', email: '', message: '' });
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out to us. We will get back to you soon.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      };
    return (
        <div>
<Helmet>
    <title>Contact Us | Resilient Slope LLC</title>
    <meta name="description" content="Get in touch with us through our contact form or contact details." />
</Helmet>
            <Title title="Contact Us" />
            <div className=''>
            <div className="container mx-auto mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="slide-left" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1200">
          <h2 className="text-3xl font-semibold mb-4 text-ce">Send us a Message</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border border-gray-300 rounded-md py-2 px-3 w-full h-32 resize-none focus:outline-none focus:border-blue-400"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div data-aos="fade-up-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1200" className='item-center text-center'>
  <h2 className="text-xl font-semibold mb-4"></h2>
  <img src={Logo} className="mx-auto mb-5"></img>
  <p className="mb-2">
    <span className="font-semibold"></span> 2000 E Lamar Blvd, Suite 600, Arlington, TX, 76006-7361
  </p>
  <p className="mb-2">
    <span className="font-semibold">Phone:</span> 817-319-0079
  </p>
  <p className="mb-2">
    <span className="font-semibold">Email:</span> info@resilientslope.com
  </p>
</div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Contact;