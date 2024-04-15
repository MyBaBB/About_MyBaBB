// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import GarageOld from './Garageold600x400.webp';
import GarageNew from './Garagenew600x400.webp';




const SectionD = () => {
  const [showImageAlt3, setShowImageAlt3] = useState(true);
  const [showImageAlt4, setShowImageAlt4] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImageAlt3((prevShowImageAlt3) => !prevShowImageAlt3);
      setShowImageAlt4((prevShowImageAlt4) => !prevShowImageAlt4);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Rest of the component code */}
      <img
        id="imageAlt3"
        className={`mb-1 w-max rounded-3xl ${showImageAlt3 ? '' : 'hidden'}`}
        src={GarageOld}
        alt="Old Garage"
        width="600"
        height="400"
        loading="lazy"
        style={{
          position: "relative",
          zIndex: "0",
          boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
          border: "2px solid black",
        }}
      />
      <img
        id="imageAlt4"
        className={`mb-1 w-max rounded-3xl ${showImageAlt4 ? '' : 'hidden'}`}
        src={GarageNew}
        alt="Cowboy Shop"
        width="600"
        height="400"
        loading="lazy"
        style={{
          position: "relative",
          zIndex: "0",
          boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
          border: "2px solid black",
        }}
      />
      {/* Rest of the component code */}
    </div>
  );
};

export default SectionD;








              {/* <a href="#securityEye">
                <div
                  id="nightShippers"
                  className="mx-auto  w-full scroll-mt-24 justify-center rounded-b-3xl bg-varDARKDUCKHEAD p-5 pt-0"
                  style={{ maxWidth: "600px" }}
                >
                  <img
                    className="w-max rounded-3xl"
                    src="./build/img/GlobaldeliveryCool.jpg"
                    alt="World Wide Shipping"
                    width="600"
                    height="400"
                    loading="lazy"
                    style={{
                      position: "relative",
                      zIndex: "0",
                      boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
                      border: "2px solid black",
                    }}
                  />
                </div>
              </a> */}

              {/* <h2
                className="p-1 text-center font-serif"
                style={{
                  textShadow: "2px 2px 3px #1c0303",
                  fontSize: "27px",
                  color: "#fff9d7",
                }}
              >
                You have to be ready for business expansion. The value and
                benefits of this advertising investment make it a worthwhile
                choice.
              </h2>
              <a href="https://mybabb.github.io/SEO-BEST_PRACTICES/">
                <p className="Rye m-0 m-auto flex items-center justify-center text-center text-[22px] text-blue-300  hover:text-[whitesmoke]">
                  SEO Best Practices
                </p>
              </a>
              <p
                style={{ fontSize: "12px", color: "wheat" }}
                className="text-center"
              >
                <em>
                  (We are not suggesting mailing rattlesnakes to any specific
                  country. This is a fictional example and no Rattle Snakes were
                  harmed in this commercial.)
                </em>
              </p>
              <br />
              <div className="text-center">
                <span className="text-center text-4xl">🐟 🍞 🍷 🕊️</span>
              </div> */}
//             </blockquote>
//           </article>
//         </div>
//       </div>

//         </div>
//     );
// };

// export default SectionD;