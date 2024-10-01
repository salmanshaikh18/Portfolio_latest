import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    // <form
    //   className="flex flex-col justify-center items-center gap-4 p-6 max-w-md mx-auto"
    //   ref={form}
    //   onSubmit={sendEmail}
    // >
    //   <label className="text-white text-lg font-semibold">Name</label>
    //   <input
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     className="bg-slate-700 w-[500px] text-white p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
    //     type="text"
    //     name="user_name"
    //     required
    //   />

    //   <label className="text-white text-lg font-semibold">Email</label>
    //   <input
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     className="bg-slate-700 text-white p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
    //     type="email"
    //     name="user_email"
    //     required
    //   />

    //   <label className="text-white text-lg font-semibold">Message</label>
    //   <textarea
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //     className="bg-slate-700 text-white p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
    //     name="message"
    //     rows="4"
    //     required
    //   />

    //   <input
    //     className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg text-lg cursor-pointer transition duration-200"
    //     type="submit"
    //     value="Send"
    //   />
    // </form>

    <footer className="w-[90vw]">
      <div className="w-full text-lg flex flex-col md:flex-row py-10">
        <div className="__left md:w-1/2 flex flex-col text-center md:text-start md:ml-20 my-10">
          <h1 className="md:w-[70%] text-zinc-300 font-normal mb-4 text-3xl">
            Connect With Us
          </h1>
          <div className="text-zinc-400 flex flex-col justify-center md:justify-start md:items-start items-center">
            <p className="flex items-center md:w-[70%] gap-4 my-3">
              <span className="text-[blueviolet] text-xl">
                <IoLocationOutline />
              </span>
              India, Mumbai
            </p>
            <p className="flex items-center gap-4 my-3 md:w-[70%] transition-all ease-in-out duration-500 hover:text-[#03CF86] cursor-pointer">
              <span className="text-[blueviolet]">
                <MdOutlineEmail className="text-xl" />
              </span>
              salmanshaikh18786@gmail.com
            </p>
            <div className="flex gap-8 justify-center items-center md:w-1/2 text-2xl my-8">
              <a
                href="https://github.com/salmanshaikh18"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-all ease-in-out duration-500 text-[blueviolet] hover:text-blue-600 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/salman-shaikh-aa15b9253"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-all ease-in-out duration-500 text-[blueviolet] hover:text-blue-600 hover:scale-110"
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
            Contact Us
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
            className="md:w-[70%] w-[300px] bg-purple-900 transition-all ease-in-out duration-500 hover:bg-blue-900 rounded-md text-white p-2"
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
