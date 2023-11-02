import React from 'react';

const LeaveMessage = () => {
  return (
    <section className="leave-message">
      <div className="container">
        <div className="form-wrapper">
          <h3>Leave us a message <br /> for any information.</h3>

          <form id="registerForm" method="post">
            <div className="mb-3">
              <input className="form-input" type="text" id="Name" title="Name" placeholder="Name*" tabIndex="1" />
            </div>

            <div className="mb-3">
              <input className="form-input" type="email" id="email" title="Email*" placeholder="Email*" tabIndex="2" />
            </div>

            <div className="mb-4">
              <textarea className="form-input" id="biography" name="biography" placeholder="Your Message*" tabIndex="3"></textarea>
            </div>

            <div className="d-grid">
              <button className="btn-yellow" type="submit" tabIndex="4">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeaveMessage;
