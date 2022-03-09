import React, { useEffect, useRef, useState } from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {images} from "./images";
const Carousel = () => {
  console.log(images)

  const [width,setWidth] = useState(0);
  const refCarousel = useRef();

  useEffect(() => {
    // setWidth(refCarousel.current.clientWidth);
    console.log(refCarousel.current.scrollWidth - refCarousel.current.offsetWidth); 

    setWidth(refCarousel.current.scrollWidth - refCarousel.current.offsetWidth); 
    },[]);

  return (
    <>
      <motion.div ref={refCarousel} className = "carousel"
      whileTap={{cursor:"grabbing"}}
      >
        <motion.div drag="x" dragConstraints = {{right:0, left:-width}} className = "innerCarousel">
          {images.map((image) => {
            return (
              <motion.div
                key={image}
                className="image"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
              >
                <img src={image} alt="carousel" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Carousel;
