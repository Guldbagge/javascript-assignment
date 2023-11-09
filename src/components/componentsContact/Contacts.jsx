import React from 'react';
import BackgroundLines from '../../assets/image/background-lines.svg';
import BorderBox from './BorderBox';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const contactUs = [
    { icon: "fa-solid fa-location-dot fa-2xs", title: "Visit us", descriptionOne: "Sveavägen 31 ", descriptionTwo: "111 34 STOCKHOLM", url: "https://www.google.se/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.336637,18.0594356,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttu" },
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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
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
