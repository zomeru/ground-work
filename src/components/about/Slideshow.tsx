import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import girl from "../../../public/assets/images/about/slideshow/girl.jpg";
import desert from "../../../public/assets/images/about/slideshow/desert.jpg";
import leaves from "../../../public/assets/images/about/slideshow/leaves.jpg";
import building from "../../../public/assets/images/about/slideshow/building.jpg";

const images = [girl, desert, leaves, building];

const Slideshow = () => {
  return (
    <div className="mt-20">
      <Slide duration={300} slidesToShow={3} indicators arrows={false}>
        {images.map((image) => {
          return (
            <div className="relative w-32 h-32 overflow-hidden rounded-full md:w-60 md:h-60">
              <Image
                src={image}
                layout="fill"
                quality={30}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
