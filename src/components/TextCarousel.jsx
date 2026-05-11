import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TextCarousel = () => {
  const controls = useAnimation();
  const announcement = `Applications are open for suitably qualified candidates for admission into JS 1 JS 2 and SS 1 for 2026/2027 Academic Session.

The admission form is Ten thousand naira (N10,000.00) only payable into:
SAMUEL MADUKA ONYISHI FOUNDATION
(MUC main account)
1012682217
Keystone Bank

Entrance Exam holds on Saturday May 23rd 2026
10 am
Virtual Exam option is available.`;

  // Duplicate the announcement for seamless looping
  const carouselText = `${announcement} • ${announcement} • ${announcement} • ${announcement} • ${announcement}`;

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: "-50%", // Move to the left to show the repeated text
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 150, // Adjust speed of scrolling
            ease: "linear",
          },
        },
      });
    };
    animateCarousel();
  }, [controls]);

  return (
    <div className="bg-[#062E70] text-white py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <motion.div
          animate={controls}
          className="whitespace-nowrap"
          style={{ display: "inline-block" }}
        >
          {carouselText}
        </motion.div>
      </div>
    </div>
  );
};

export default TextCarousel;
