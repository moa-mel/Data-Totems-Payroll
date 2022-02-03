import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

  const Result = () =>{
      return(
          <p>Your message has been successfully sent. </p>
      )
  }

export const Contact = (props) => {
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wu5gbia', 'template_dw2zqlt', form.current, 'user_cEGzC7Del9nuoTDdpzEuX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    return (
        <div className="contact">
            <div className="form">
             <form action="" ref={form} onSubmit={sendEmail}>
              <div class="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div class="row"> {result ? <Result/> : null} </div>
              </div>
            </form>
            </div>
        </div>
    )
}