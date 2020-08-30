import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  // function for submitting form
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Hi ${data.fullname}, Your message has been submitted`);
  };
  return (
    <>
      {/* Form */}
      <div class="container form">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 m-auto">
            <div class="contact-form">
              <h1>Get in Touch</h1>
              <form onSubmit={formSubmit}>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="inputName">Name</label>
                      <input
                        type="text"
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        class="form-control"
                        id="inputName"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="inputEmail">Email</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        value={data.email}
                        onChange={InputEvent}
                        id="inputEmail"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputMessage">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="inputMessage"
                    value={data.message}
                    onChange={InputEvent}
                    rows="5"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">
                    <i class="fa fa-paper-plane"></i> Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
