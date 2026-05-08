import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PrimaryBtn from "./PrimaryBtn";
import Toast from "./Toast";

const initialForm = { name: "", phone: "", email: "", message: "" };

const ContactForm = ({ Btntext }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef();

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setShowToast(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setShowToast(true);
        setForm(initialForm);
      })
      .catch(() => {
        setStatus("error");
        setShowToast(true);
      });
  };

  const inputClass =
    "w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E33534]";

  return (
    <div className="w-full bg-[#F3F1F1] rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
      <Toast
        show={showToast}
        message={
          status === "success"
            ? "Message sent successfully!"
            : "Something went wrong, please try again."
        }
        type={status}
        onClose={() => setShowToast(false)}
      />

      <form ref={formRef} className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        {[
          { name: "name",  type: "text",  placeholder: "Your Name*" },
          { name: "phone", type: "tel",   placeholder: "Your Phone Number*" },
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
          <PrimaryBtn
            Btntext={status === "sending" ? "Sending..." : Btntext}
            className="w-full sm:w-auto"
            disabled={status === "sending"}
          />
        </div>

      </form>
    </div>
  );
};

export default ContactForm;