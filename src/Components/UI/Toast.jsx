import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmarkCircle, IoCloseCircle, IoClose } from "react-icons/io5";

const Toast = ({ show, message, type, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-10 left-1/2 z-[9999] min-w-[300px] max-w-[90vw]"
        >
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl border ${
              type === "success"
                ? "bg-white border-green-500 text-green-700"
                : "bg-white border-red-500 text-red-700"
            }`}
          >
            <div className="text-2xl flex-shrink-0">
              {type === "success" ? (
                <IoCheckmarkCircle className="text-green-500" />
              ) : (
                <IoCloseCircle className="text-red-500" />
              )}
            </div>
            
            <p className="text-sm sm:text-base font-medium flex-grow">
              {message}
            </p>

            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors ml-2"
            >
              <IoClose className="text-lg text-gray-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
