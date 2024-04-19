import React, { useRef } from 'react';
import './Contactme.css';
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_orldpko',
        'template_ktzsngn',
        form.current,
        'VbRWldqNRmQCNlo4Z'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          e.target.reset();
          alert('Form submitted successfully');
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to submit form. Please try again later.');
        }
      );
  };

  return (
    <section id="contactme">
      <div className="contact">
        <h1 className="ContactPageTitle">Contact Me</h1>

        <form id="reservationForm" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="your_name" required />

          <label htmlFor="phoneno">Phone:</label>
          <input type="tel" id="phone" name="your_phone" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="your_email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="your_message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
