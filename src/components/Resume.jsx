import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import image1 from "../assets/resume/1.jpg";
import image2 from "../assets/resume/2.jpg";
import image3 from "../assets/resume/3.jpg";

const Resume = ({ closeResume }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 3; // Update with the total number of images

  const handlePrevImage = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImage < totalImages) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeResume();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 0.54 }}
        transition={{ duration: 0.3 }}
        className="w-85 h-85 bg-white bg-opacity-60 rounded-2xl p-6 relative"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute top-2 right-2">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={closeResume}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
            {currentImage === 1 && (
              <motion.img
                src={image1}
                alt="Image 1"
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {currentImage === 2 && (
              <motion.img
                src={image2}
                alt="Image 2"
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {currentImage === 3 && (
              <motion.img
                src={image3}
                alt="Image 3"
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          <div className="flex justify-center mt-4">
            <motion.button
              className="bg-gray-200 text-gray-700 rounded-full p-2 mx-2"
              onClick={handlePrevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdKeyboardArrowLeft size={20} />
            </motion.button>
            <motion.button
              className="bg-gray-200 text-gray-700 rounded-full p-2 mx-2"
              onClick={handleNextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdKeyboardArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;