import React from 'react';
import BackgroundLines from '../../assets/image/background-lines.svg';
import BorderBox from './BorderBox';

const Contact = () => {
  const contactUs = [
    { icon: "fa-solid fa-location-dot fa-2xs", title: "Visit us", descriptionOne: "Sveavägen 31 ", descriptionTwo: "111 34 STOCKHOLM", url: "visit-us" },
    { icon: "fa-sharp fa-solid fa-phone fa-2xs", title: "Call us", descriptionOne: "+46 (8) 121 470 50 ", descriptionTwo: "+46 (8) 121 470 51", url: "call-us" },
    { icon: "fa-sharp fa-solid fa-envelope fa-2xs", title: "Email us", descriptionOne: "info@crito.com", descriptionTwo: "support@crito.com", url: "email-us" }
  ];

  return (
    <main className="contact">
      <section className="lets-connect">
        <img className="line" src={BackgroundLines} alt="" />
        <div className="container">
          <div className="content">
            <div className="links-connect">
              <a href="index.html">Home</a>
              <a href="contact.html">Contact</a>
            </div>

            <div className="h2-links">
              <h2>Let’s Connect</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          {contactUs.map((service, index) => (
            <BorderBox key={index} icon={service.icon} title={service.title} descriptionOne={service.descriptionOne} descriptionTwo={service.descriptionTwo} url={service.url} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
