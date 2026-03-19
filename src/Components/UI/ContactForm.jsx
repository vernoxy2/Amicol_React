import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const initialForm = { name: "", phone: "", email: "", message: "" };

const ContactForm = ({ Btntext }) => {
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccessMessage("✅ Message sent successfully!");
    setForm(initialForm);
  };

  const inputClass =
    "w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E33534]";

  return (
    <div className="w-full bg-[#F3F1F1] rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        {successMessage && (
          <p className="text-sm sm:text-base font-semibold text-green-600">
            {successMessage}
          </p>
        )}

        {[
          { name: "name", type: "text", placeholder: "Your Name*" },
          { name: "phone", type: "tel", placeholder: "Your Phone Number*" },
          { name: "email", type: "email", placeholder: "Your Email*" },
        ].map((field) => (
          <input
            key={field.name}
            data-aos="fade-up"
            data-aos-delay="100"
            {...field}
            value={form[field.name]}
            onChange={handleChange}
            className={inputClass}
            required
          />
        ))}

        <textarea
          data-aos="fade-up"
          data-aos-delay="400"
          rows={4}
          name="message"
          value={form.message}
          placeholder="Message Here..."
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          required
        />

        <div data-aos="fade-up" data-aos-delay="500" className="pt-2">
          <PrimaryBtn  Btntext={Btntext} className="w-full sm:w-auto" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
