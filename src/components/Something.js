// import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// const MyComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with optional settings
  }, []);

//   return (
//     <div>
//       <h1 data-aos="fade-up">Hello, AOS in React!</h1>
//       <p data-aos="fade-right">This text will animate from the right when scrolling.</p>
//       <img data-aos="zoom-in" src="path-to-image.jpg" alt="Example Image" />
//     </div>
//   );
// };

// export default MyComponent;
