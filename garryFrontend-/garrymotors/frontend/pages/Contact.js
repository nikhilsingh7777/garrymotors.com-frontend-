import Image from 'next/image';
import { useState, useRef } from "react";
import React from 'react';
import styles from "@/styles/Contact.module.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const SERVICE_ID = "service_aeskfbb";
  const TEMPLATE_ID = "template_w0lup9t";
  const PUBLIC_KEY = "hKqTp0a6eW-xPxqiv";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      to_name: 'Garry',
      from_email: form.email,
      to_email: 'Garrymotors.LLC@gmail.com',
      from_phone: form.phone,
      message: form.message,
    }, PUBLIC_KEY).then(() => {
      setLoading(false);
      alert('Message Sent Successfully!');
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!');
    });
  };

  return (
    <div className={styles.container}>
      <Image src="/contactpage.png" alt="Contact Page" className={styles.img} layout="responsive" width={1200} height={800} />

      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={`${styles.box} ${styles.cbox}`}>
            <h2 className={styles.h2}>Garry Motors</h2>
            <strong>Best Car Dealer in your Town!</strong>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.box}>
            <h2>How to Reach Us</h2>
            <div className={styles.xyz}>
              <Image src="https://img.icons8.com/?size=100&id=9659&format=png&color=22ABC3" alt="Phone Icon" width={18} height={18} />
              <a href="tel:+91 7839219042"><p className={styles.phone}>Phone: +91 78392 19042</p></a>
            </div>
            <div className={styles.xyz}>
              <Image src="https://img.icons8.com/?size=100&id=7880&format=png&color=22ABC3" alt="Location Icon" width={18} height={18} />
              <p>Location: 2712 Auburn Way N, Auburn, WA 98002, USA</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.box}>
            <h2>Store Hours</h2>
            <p>All days: 9am - 8pm</p>
          </div>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.reach}>
          <h2>Reach Us</h2>
          <input type="text" name="name" value={form.name} placeholder="Name" onChange={handleChange} required />
          <input type="tel" name="phone" value={form.phone} placeholder="Phone Number" onChange={handleChange} required />
          <input type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} required />
          <textarea name="message" value={form.message} placeholder="Message" onChange={handleChange} required></textarea>
        </div>

        <div className={styles.terms}>
          <input type="checkbox" id="termsCheckbox" onChange={handleCheckboxChange} />
          <label htmlFor="termsCheckbox">By clicking Submit, you agree to our Terms and Conditions.</label>
        </div>
        <div className={styles.btn}>
          <button type='submit' className={styles.submit} disabled={!isTermsChecked}>{loading ? "Sending..." : "Submit"}</button>
        </div>
      </form>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.134658803655!2d-122.22373442385381!3d47.33124140695208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549058f06d4816e9%3A0xfd9a2fedd16f3a3a!2s2712%20Auburn%20Way%20N%2C%20Auburn%2C%20WA%2098002%2C%20USA!5e0!3m2!1sen!2sin!4v1716981076087!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;
