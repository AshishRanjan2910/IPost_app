import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {

    const [user, userSet] = useState({
        "name": '',
        "mobile": '',
        "email": '',
        "message": '' 
    })

    const { name, mobile, email, message } = user;



    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '1rem auto' }}>Contact Us</h1>
        <div className="container-contact">
            <div className="wrap-contact">
            <form
                name="contact"
                className="contact-form validate-form"
            >
                <div
                className="wrap-input validate-input"
                data-validate="Please enter your name"
                >
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value = {name}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter your Mobile Number"
                >
                <input
                    className="input"
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value = {mobile}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter your email"
                >
                <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value= {email}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter your message"
                >
                <textarea
                    className="input"
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    value = {message}
                ></textarea>
                </div>

                <div className="container-contact-form-btn">
                <button type="submit" className="contact-form-btn">
                <span>Submit</span>
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Contact
