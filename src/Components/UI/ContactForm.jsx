import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const ContactForm = ({ Btntext }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setSuccessMessage("✅ Message sent successfully!");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-[#F3F1F1] rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
      <form
        className="space-y-4 sm:space-y-5"
        onSubmit={handleSubmit}
      >
        {successMessage && (
          <p className="text-sm sm:text-base font-semibold text-green-600">
            {successMessage}
          </p>
        )}

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name*"
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E33534]"
          required
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          placeholder="Your Phone Number*"
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E33534]"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your Email*"
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E33534]"
          required
        />

        <textarea
          rows={4}
          name="message"
          value={form.message}
          placeholder="Message Here..."
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#E33534]"
          required
        />

        {/* Button Wrapper */}
        <div className="pt-2">
          <PrimaryBtn Btntext={Btntext} className="w-full sm:w-auto" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
