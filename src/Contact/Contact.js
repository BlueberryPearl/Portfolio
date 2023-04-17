import React, { useState } from "react";
import './Contact.css'
import plane from './send.png'
import { useFormspark } from "@formspark/use-formspark";
import insta from './insta.png'
import github from './github.png'
import youtube from './youtube.png'
import mail from './mail.png'






const FORMSPARK_FORM_ID = 'XKzxyWXI'


export default function Contact() {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID
    });

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    function updateForm(key, value) {
        setForm(prevForm => {
            return (
                {
                    ...prevForm,
                    [key]: value,
                }
            )
        })
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        resetForm()
        console.log(form)
        //await submit(form);
        alert("Sent!");
    };

    function messageChange(event) {
        setMessage(event.target.value)
        updateForm('message', event.target.value)

    }

    function nameChange(event) {
        setName(event.target.value)
        updateForm('name', event.target.value)
    }

    function emailChange(event) {
        setEmail(event.target.value)
        updateForm('email', event.target.value)
    }








    return (
        <main className="contact">
            <h1 className="contact-title">Contact Me</h1>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="nameAndEmail">
                        <input type="text" id='name' value={name} onChange={nameChange} className="contact-name" placeholder="Name"></input>
                        <input type="email" id='email' value={email} onChange={emailChange} className="contact-email" placeholder="Email"></input>
                    </div>
                    <textarea value={message} id='message' onChange={messageChange} className="contact-message" placeholder="Message" />
                    <button type="submit" disabled={submitting} className="contact-send">Send<img src={plane} alt="send"></img></button>

                </form>
            </div>
            <div className="icons">
                <img src={mail} alt='Email'></img>
                <img src={github} alt='GitHub'></img>
                <img src={youtube} alt='Youtube'></img>
                <img src={insta} alt='Instagram'></img>
            </div>

        </main>
    )
}