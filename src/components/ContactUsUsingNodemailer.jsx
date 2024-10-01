import axios from 'axios';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    // Handle form submission here (e.g., send to backend or email service)
    const response = await axios.post("http://localhost:3000/api/auth/send-message", {
        userName: formData.userName,
        userEmail: formData.userEmail,
        message: formData.message
    })
    alert("message sended")
    console.log("response: ", response);
  } catch (error) {
    alert("something went wrong!")
    console.log("error while handle submit: ", error)
  }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
    {/* Name Input */}
    <div className='w-full'>
      <label htmlFor="userName" className="block text-sm sm:text-lg font-medium text-gray-400">
        Your Name
      </label>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="John Doe"
        value={formData.userName}
        onChange={handleChange}
        required
        className="mt-1 border-none outline-none bg-slate-900 block w-full sm:w-[500px] p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-lg"
      />
    </div>

    {/* Email Input */}
    <div>
      <label htmlFor="userEmail" className="block text-sm sm:text-lg font-medium text-gray-400">
        Your Email
      </label>
      <input
        type="email"
        name="userEmail"
        id="userEmail"
        placeholder="you@example.com"
        value={formData.userEmail}
        onChange={handleChange}
        required
        className="mt-1 border-none outline-none bg-slate-900 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-lg"
      />
    </div>

    {/* Message Textarea */}
    <div>
      <label htmlFor="message" className="block text-sm sm:text-lg font-medium text-gray-400">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        rows="4"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        required
        className="mt-1 border-none outline-none bg-slate-900 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-lg"
      ></textarea>
    </div>

    {/* Send Button */}
    <div className="text-center">
      <button
        type="submit"
        className="w-full text-sm sm:text-lg py-3 bg-indigo-900 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-950 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all ease-in-out duration-300"
      >
        Send Message
      </button>
    </div>
  </form>
  );
};

export default ContactUs;
