import React, { useState } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  
  const phoneNumber = "919898666007";
  const amicolName = "Amicol Paints";

  const handleSend = (e) => {
    e.preventDefault();
    if (!userMsg.trim()) return;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(userMsg)}`;
    window.open(whatsappUrl, "_blank");
    setUserMsg("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                 <img src="/Logo.svg" alt="Logo" className="w-8" />
                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">{amicolName}</h3>
                <span className="text-[10px] opacity-80">Online • </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#e5ddd5] h-48 overflow-y-auto flex flex-col gap-2">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start">
              <p className="text-xs text-gray-800">
                Hi there! 👋<br />
                How can I help you today?
              </p>
              <span className="text-[9px] text-gray-400 block mt-1 text-right">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* Chat Footer / Input */}
          <form onSubmit={handleSend} className="p-3 bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#075E54]"
            />
            <button
              type="submit"
              className="bg-[#075E54] text-white p-2 rounded-full hover:scale-105 transition-transform disabled:opacity-50"
              disabled={!userMsg.trim()}
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 group flex items-center gap-3 overflow-hidden ${
          isOpen ? "scale-90 opacity-0 pointer-events-none" : "hover:scale-110"
        }`}
        aria-label="Open WhatsApp Chat"
      >
        <FaWhatsapp className="text-3xl flex-shrink-0" />
        {!isOpen && (
          <span className="whitespace-nowrap font-bold hidden sm:inline-block max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            Chat with Amicol
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
