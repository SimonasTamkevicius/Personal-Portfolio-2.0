import React, { useState, useSyncExternalStore } from "react";
import NavBar from "../NavBar";
import emailjs, { send } from "emailjs-com";
import Phone from "./Phone";
import MobileSocials from "./MobileSocials";
import useSound from "use-sound";
import MessageSound from "/textMessageSound.mp3";
import { RxPaperPlane } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init(publicKey);

const Contact = () => {
  const [playMessageSound] = useSound(MessageSound);
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
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
      }, 750);
      setMessageSent(true);
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="overflow-hidden">
      <NavBar active="contact" />
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-12 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <div className="flex justify-center lg:justify-start font-semibold wrapper mb-8 w-full">
            <div className="typing-contact text-xl md:text-3xl lg:text-4xl">
              contact me
            </div>
          </div>
          <div className="w-full max-w-lg lg:max-w-xl">
            {/* unsubmitted form data */}
            {!messageSent ? (
              <form onSubmit={handleFormSubmit} className="w-full">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex flex-col space-y-2 w-full">
                    <p className="text-lg lg:text-xl font-semibold">name</p>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-lg p-3 w-full focus:shadow-[4px_4px_0px_0px_#389cdc] transition-all outline-none"
                      placeholder="enter name"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full">
                    <p className="text-lg lg:text-xl font-semibold">email</p>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-lg p-3 w-full focus:shadow-[4px_4px_0px_0px_#389cdc] transition-all outline-none"
                      placeholder="enter email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2 mb-6">
                  <p className="text-lg lg:text-xl font-semibold">message</p>
                  <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-black rounded-lg p-3 w-full focus:shadow-[4px_4px_0px_0px_#389cdc] transition-all outline-none"
                    placeholder="enter message"
                    required
                    rows="6"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex flex-row items-center border-2 border-black rounded-lg px-6 py-2 text-lg lg:text-xl send-button shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    <p
                      className={`mr-2 flex flex-row justify-end ${sending && "mt-1"}`}
                    >
                      {sending ? "sending" : "send"}
                      {sending && <span className="dot-animation"></span>}
                    </p>
                    <RxPaperPlane className={`${sending && "paper-plane"}`} />
                  </button>
                </div>
              </form>
            ) : (
              /* submitted successfully div */
              <div className="flex flex-col justify-center items-center w-full py-10 message-sent">
                <p className="text-2xl font-semibold text-center">
                  message sent successfully!
                </p>
                <div className="flex justify-center mt-8">
                  <div className="border-2 rounded-full border-gray-400 p-5 animated-check">
                    <FaCheck className="text-4xl text-green-500" />
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => {
                      setMessageSent(false);
                    }}
                    className="border-2 border-black rounded-lg px-6 py-2 text-lg back-button hover:bg-gray-100 transition-colors"
                  >
                    back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center items-center w-full">
          <div className="hidden lg:block w-full max-w-md phone-container">
            <Phone messageSent={messageSent} />
          </div>
          <div className="block lg:hidden mobile-socials w-full max-w-md">
            <h1 className="font-semibold text-center text-xl md:text-2xl mb-6">
              check out my socials below to get in touch!
            </h1>
            <MobileSocials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
