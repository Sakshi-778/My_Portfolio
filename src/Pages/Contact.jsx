import { useState } from "react";
import emaillogo from "../assets/emaillogo.png";
import phonelogo from "../assets/phonelogo.jpg";
import addresslogo from "../assets/addresslogo.png";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page load
    alert(`Hello, ${name}, ${phone}, ${email}, ${message}`);

    if (name.trim() === "") {
      setError("Name is required");
      return false;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digit");
      return false;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-card">
            <img src={emaillogo} alt="Email" height={70} width={70} />
            <h3>Email Address</h3>
            <p>sakshibhintade@gmail.com</p>
          </div>

          <div className="contact-card">
            <img src={phonelogo} alt="Phone" height={70} width={70} />
            <h3>Phone Number</h3>
            <p>+91 9370194328</p>
          </div>

          <div className="contact-card">
            <img src={addresslogo} alt="Address" height={90} width={90} />
            <h3>Address</h3>
            <p>B A39, Anand Park</p>
            <p>Pimple Gurav, Pune</p>
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-container">
            <h2>Get in Touch</h2>

            {error && <p className="error-text">{error}</p>}

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Phone No</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
