// import React from "react";
// import Carousel from "react-multi-carousel";
// import { Image } from "semantic-ui-react";
// import UAParser from "ua-parser-js";


// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     paritialVisibilityGutter: 60
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     paritialVisibilityGutter: 50
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     paritialVisibilityGutter: 30
//   }
// };
// const images = [
//   "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// ];

// // Because this is an inframe, so the SSR mode doesn't not do well here.
// // It will work on real devices.
// const MultiCarousel = ({ deviceType }) => {
//   return (
//     <Carousel
//       ssr
//       partialVisbile
//       deviceType={deviceType}
//       itemClass="image-item"
//       responsive={responsive}
//     >
//       {images.slice(0, 5).map(image => {
//         return (
//           <Image
//             draggable={false}
//             style={{ width: "100%", height: "100%" }}
//             src={image}
//           />
//         );
//       })}
//     </Carousel>
//   );
// };
// MultiCarousel.getInitialProps = ({ req }) => {
//     let userAgent;
//     if (req) {
//       userAgent = req.headers["user-agent"];
//     } else {
//       userAgent = navigator.userAgent;
//     }
//     const parser = new UAParser();
//     parser.setUA(userAgent);
//     const result = parser.getResult();
//     const deviceType = (result.device && result.device.type) || "desktop";
//     return { deviceType };
//   };


// export default MultiCarousel;
import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import UAParser from "ua-parser-js";
import "react-multi-carousel/lib/styles.css"; // Add this import for styles
import constant from "../constant/constant";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisible: true, // Fix the typo here
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisible: true, // Fix the typo here
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisible: true, // Fix the typo here
    paritialVisibilityGutter: 30
  }
};



const MultiCarousel = ({ deviceType, images }) => {
  return (
    <Carousel
      ssr
      partialVisible  // Fix the typo here
      deviceType={deviceType}
      // itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image, index) => (
        <img
        loading="lazy"
          key={index} // Add the key prop here
          draggable={false} className="cor-minimg"
          style={{ width: "90%", height: "100%", }}
          src={`${image}`}
        />
      ))}
    </Carousel>
  );
};

MultiCarousel.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};

export default MultiCarousel;
