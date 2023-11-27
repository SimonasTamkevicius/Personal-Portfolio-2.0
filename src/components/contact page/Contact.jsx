import React, { useState, useSyncExternalStore } from 'react';
import NavBar from '../NavBar';
import emailjs, { send } from 'emailjs-com';
import Phone from './Phone';
import MobileSocials from './MobileSocials';
import useSound from 'use-sound';
import MessageSound from "/textMessageSound.mp3"
import { RxPaperPlane } from "react-icons/rx";
import { FaCheck } from "react-icons/fa"

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init(publicKey);


const Contact = () => {
  const [playMessageSound] = useSound(MessageSound);
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(serviceID, templateID, e.target);
      setSending(false);
      setTimeout(() => {
        playMessageSound();
      }, 750)
      setMessageSent(true);
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <div className='overflow-hidden'>
      <NavBar active="contact" />
      <div className='flex flex-col justify-center items-center lg:grid grid-cols-12'>
        <div className='col-span-6'>
          <div className='flex justify-center font-semibold wrapper lg:mt-5 mx-10 lg:mx-20'>
            <div className='typing-contact'>
              contact me
            </div>
          </div>
          <div>
            {/* unsubmitted form data */}
            {!messageSent ? (
              <form onSubmit={handleFormSubmit} className='min-w-full'>
                <div className='flex flex-col lg:grid grid-cols-2 lg:ml-20 lg:mr-0 mt-2 md:mt-10 lg:space-x-5'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-xl font-semibold'>name</p>
                    <input type='text' name='user_name' value={formData.user_name} onChange={handleInputChange} className='border-2 border-black rounded-lg p-2' placeholder='enter name' required />
                  </div>
                  <div className='flex flex-col space-y-1 mt-2 md:mt-8 lg:mt-0'>
                    <p className='text-xl font-semibold'>email</p>
                    <input type='email' name='user_email' value={formData.user_email} onChange={handleInputChange} className='border-2 border-black rounded-lg p-2' placeholder='enter email' required />
                  </div>
                </div>
                <div className='flex flex-col lg:ml-20 lg:mr-0 mt-2 md:mt-10'>
                  <p className='text-xl font-semibold'>message</p>
                  <textarea type='text' name='message' value={formData.message} onChange={handleInputChange} className='border-2 border-black rounded-lg p-2' placeholder='enter message' required rows="7" />
                </div>
                <div className='flex justify-end lg:ml-20 lg:mr-0 mt-10'>
                <button type='submit' className='flex flex-row items-center border-2 border-black rounded-lg px-6 py-2 text-xl send-button'>
                  <p className={`mr-2 flex flex-row justify-end ${sending && "mt-1"}`}>
                    {sending ? "sending" : "send"}
                    {sending && <span className="dot-animation"></span>}
                  </p>
                  <RxPaperPlane className={`${sending && "paper-plane"}`} />
                </button>
                </div>
              </form>
            ) : (
              /* submitted successfully div */
              <div className='flex flex-col justify-center items-center mx-10 mt-2 md:mt-10 message-sent'>
                <p className='text-2xl font-semibold'>message sent successfully!</p>
                <div className='flex justify-center mt-10'>
                  <div className="border-2 rounded-full border-gray-400 p-5 animated-check">
                    <FaCheck className="text-4xl text-white" />
                  </div>
                </div>
                <div className='flex justify-center mt-10'>
                  <button onClick={() => {setMessageSent(false)}} className='border-2 border-black rounded-lg px-6 py-2 text-x back-button'>
                    back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-6 hidden lg:block phone-container'>
          <Phone messageSent={messageSent} />
        </div>
        <div className='col-span-6 block lg:hidden mobile-socials'>
          <h1 className='mx-10 mt-20 font-semibold text-center text-2xl md:text-3xl'>check out my socials below to get in touch!</h1>
          <MobileSocials />
        </div>
      </div>
    </div>
  );
}

export default Contact;
