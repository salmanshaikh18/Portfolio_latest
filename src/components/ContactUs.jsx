import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Please provide your name to send message!")
    }

    if (!email) {
      return toast.error("Please provide your email to send message!")
    }

    if (!message) {
      return toast.error("Please write some message!")
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "salmanshaikh.space",
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Your message has been successfully sent :)")
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Oops! There was an issue sending your message. Please try again.")
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <footer className="w-[90vw]">
      <div className="w-full text-lg flex flex-col md:flex-row py-10">
        <div className="__left md:w-1/2 flex flex-col text-center md:text-start md:ml-20 my-10">
          <div className="text-zinc-400 flex flex-col justify-center md:justify-start md:items-start items-center">
            <p className="flex text-purple-500 hover:text-blue-600 items-center md:w-[70%] gap-4 my-3">
              <span className="text-blue-500 text-xl">
                <IoLocationOutline />
              </span>
              India, Mumbai
            </p>
            <p className="flex text-purple-500 items-center gap-4 my-3 md:w-[70%] transition-all ease-in-out duration-500 hover:text-blue-600 cursor-pointer">
              <span className="text-blue-500">
                <MdOutlineEmail className="text-xl" />
              </span>
              salmanshaikh18786@gmail.com
            </p>
            <div className="flex gap-8 justify-center items-center md:w-1/2 text-2xl my-8">
              <a
                href="https://github.com/salmanshaikh18"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-all ease-in-out duration-500 text-blue-500 hover:text-blue-600 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/salman-shaikh-aa15b9253"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-all ease-in-out duration-500 text-blue-500 hover:text-blue-600 hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="__right w-full text-lg md:w-1/2 flex flex-col md:ml-20 items-center gap-4 my-10"
        >
          <h1 className="text-[#c0f1e0] md:w-[70%] mb-4 font-normal text-3xl">
            Contact Me
          </h1>
          <input
            className="p-2 pl-4 md:w-[70%] w-[300px] rounded-md bg-[#171F38] border outline-none border-[blueviolet] text-white"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
          <input
            className="p-2 pl-4 md:w-[70%] w-[300px] border outline-none border-[blueviolet] rounded-md bg-[#171F38] text-white"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <textarea
            className="rounded-md p-2 border outline-none border-[blueviolet] text-zinc-200 pl-4 max-h-60 min-h-[120px] md:w-[70%] w-[300px] bg-[#171F38]"
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="md:w-[70%] w-[300px] bg-blue-900 transition-all ease-in-out duration-500 hover:bg-blue-950 rounded-md text-white p-2"
          >
            Send Message
          </button>
        </form>
      </div>
      <hr className="border-zinc-600" />
    </footer>
  );
};

export default ContactUs;
