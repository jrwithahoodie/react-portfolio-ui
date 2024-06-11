import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"

import "./ContactContentStyles.css"

export const ContactContent = () => {

    const refForm = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAIL_SERVICE;
        const templateId = import.meta.env.VITE_EMAIL_TEMPLATE;
        const apiKey = import.meta.env.VITE_EMAIL_SERVICE_KEY;

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(result => console.log(result.text))
            .catch(error => console.log(error));
    }

    return (
        <div className="contact-container">
            <div className="form-container">
                <form ref={refForm} className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="from_name" placeholder="Ej: José Ramón" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" placeholder="Ej: jrgxllego@proton.me" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Your Message</label>
                        <textarea name="message" rows="10" cols="50" maxLength="500" required></textarea>
                    </div>
                    <button className="form-submit-btn" type='submit'>Submit</button>
                </form>
            </div>
        </div>

    )
}