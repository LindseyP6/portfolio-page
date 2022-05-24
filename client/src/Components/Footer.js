import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
import { IoIosSend }  from "react-icons/io";

function Footer() {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4nwn4nh', 'template_vnaur6g', form.current, '_5ChwLXwfEmFLcvA1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      .then(alert("Thank you for your email!"))
      history.push(0)
  };

  return (
    <div id="footer">
      <div className="contact">
        <h1>Contact Me</h1>
        <p>Reach me at lindsey.pregent@gmail.com or send me an email below!</p>
      </div>
        <form ref={form} onSubmit={sendEmail} className="email-form">
            <br></br>
            <input type="text" name="user_name" placeholder="Name" />
            <br></br>
            <input type="email" name="user_email" placeholder="Email"/>
            <br></br>
            <textarea name="message" placeholder="Message" rows="8"/>
            <br></br>
            <button 
                type="submit"
                name="submit"
                className="submitEmail"> 
                <span>Send <IoIosSend className="send-icon"/></span>
            </button>
      </form>
    </div>
  )
}

export default Footer