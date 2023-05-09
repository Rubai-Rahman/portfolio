import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vddicrl",
      "template_umsjujn",
      form.current,
      "Dpwo2CPp59J99FdEE"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>rubairahm1@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target="_blank" rel="noreferrer">
              send message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Rubai Rahman</h5>
            <a
              href="https://m.me/pri.abir.18/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>01798100***</h5>
            <a
              href="https://api.whatsapp.com/send?phone+8801798100347"
              target="_blank"
              rel="noreferrer"
            >
              send message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required>
            {" "}
          </textarea>
          <button type="submit" className="btn btn-primary" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
