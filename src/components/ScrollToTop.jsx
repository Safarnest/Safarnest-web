import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollTop}
          className="fixed bottom-24 right-6 bg-blue-900 hover:bg-blue-800 text-white p-4 rounded-full shadow-xl transition duration-300 hover:scale-110 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;