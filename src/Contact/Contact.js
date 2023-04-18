import React, { useState } from "react";
import './Contact.css'
import { useFormspark } from "@formspark/use-formspark";
import { ReactComponent as Mail } from './envelope-solid.svg';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as Insta } from './instagram.svg'
import { ReactComponent as LinkedIn } from './linkedin.svg'
import { ReactComponent as YouTube } from './youtube.svg'
import { ReactComponent as Plane } from './paper-plane-solid.svg';



const FORMSPARK_FORM_ID = 'XKzxyWXI'


export default function Contact(props) {
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
        <main ref={props.contact} className="contact">
            <h1 className="contact-title">Contact Me</h1>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="nameAndEmail">
                        <input type="text" id='name' value={name} onChange={nameChange} className="contact-name" placeholder="Name"></input>
                        <input type="email" id='email' value={email} onChange={emailChange} className="contact-email" placeholder="Email"></input>
                    </div>
                    <textarea value={message} id='message' onChange={messageChange} className="contact-message" placeholder="Message" />
                    <button type="submit" disabled={submitting} className="contact-send">Send<Plane className="plane" /></button>

                </form>
            </div>
            <div className="icons">
                <a href='mailto: najette@chouchane.com'><Mail className="contact-icon" /></a>
                <a href="https://github.com/BlueberryPearl" target="_blank" rel='noopener noreferrer'><GitHub className="contact-icon" /></a>
                <a href="https://www.linkedin.com/in/najette-chouchane-a939abb9/" target="_blank" rel='noopener noreferrer'><LinkedIn className="contact-icon" /></a>
                <a href="https://www.youtube.com/@blueberrypearl7087" target="_blank" rel='noopener noreferrer'><YouTube className="contact-icon" /></a>
                <a href="https://www.instagram.com/blue.berrypearl/" target="_blank" rel='noopener noreferrer'><Insta className="contact-icon" /></a>
            </div>

        </main>
    )
}