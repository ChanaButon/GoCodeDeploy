import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { BsTelephoneOutbound } from 'react-icons/bs';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uckn19l",
        "template_rmhmyfi",
        form.current,
        "5emdczfO_hIoUiL7y"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("messsage sent")
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+972506715796'; 
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:chanabuton@gmail.com'; 
  };

  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input type="text" id="name" name="user_name" className="input" />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input type="email" id="email" name="user_email" className="input" />
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" name="message" className="textarea"></textarea>
        <input type="submit" value="Send" className="button" />
      </form>
      <div className="contact-info">
      <div className="contact-item">

        <BsTelephoneOutbound className="contact-icon" color="green" onClick={handlePhoneCall} />
         <span onClick={handlePhoneCall}>+972506715796</span>
      </div>
      <div className="contact-item">
      <p>Email: <span className="email-link" onClick={handleEmailClick}>chanabuton@gmail.com</span></p>
     </div>
  </div>
 </div>

  )}; 
    

  
export default Contact;
