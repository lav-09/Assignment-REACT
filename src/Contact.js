import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <form>
      <label>Name: <input type="text" /></label>
      <label>Email: <input type="email" /></label>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;