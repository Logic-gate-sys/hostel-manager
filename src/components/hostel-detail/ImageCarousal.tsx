// Carousel.jsx

import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import hostel1 from "../../assets/images/hostel.jpg";
import hostel2 from "../../assets/images/hostel2.jpg";
import hostel3 from "../../assets/images/hostel3.jpg";
import hostel4 from "../../assets/images/hostel4.webp";
import hostel5 from "../../assets/images/hostel5.webp";
import hostel6 from "../../assets/images/hostel6.webp";

const carousal = {
  images: [hostel1, hostel2, hostel3, hostel4, hostel5, hostel6],
  width: 400,
  height: 300,
  autoPlay: true,
  autoPlayInterval: 3000,
};

export const ImageCarousal = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = carousal.images.length;

  const timeoutRef = useRef<any>(null);

  // auto play
  useEffect(() => {
    if (!carousal.autoPlay) return; // auto play not allowed
    const next = () => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev ?? +1));
    };

    //timeout ref
    timeoutRef.current = setInterval(next, carousal.autoPlayInterval);
    //clearance function
    return () => clearInterval(timeoutRef.current);
  }, [current, carousal.autoPlay, length, carousal.autoPlayInterval]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current ?? -1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current ?? +1);
  };

  // swipe handler
  const handlers = useSwipeable({
    onSwipedRight: () => nextSlide(),
    onSwipedLeft: () => prevSlide(),
    trackMouse: true,
  });

  //----------------------------- component ----------------------------------------
  return (
    <div
      className="overflow-hidden p-2  items-center "
      style={{ width: 500, height: 400 }}
      {...handlers}
    >
      {/* --------------------------- Slides --------------------------------------- */}
      <div
        className="flex transition-transform ease-in-out duration-500 p-1 "
        style={{ transform: `translateX(-${current * 500 +14}px)` }}
      >
        {carousal.images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
            style={{ width: 500, height: 300 }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full "
            />
          </div>
        ))}
      </div>

      {/* -------------------------------- Small-images ------------------------------------- */}
      <div className="  transform-translate-x-1/2 flex justify-center space-x-2">
        {carousal.images.map((_, idx) => (
          <button
            key={idx}
            className={` ${
              idx === current ? "bg-green-900" : "bg-gray-400"
            } focus:scale-105`}
            onClick={() => setCurrent(idx)}
          >
            <img src={_} alt="image" height={30} width={50} />
          </button>
        ))}
      </div>
    </div>
  );
};
