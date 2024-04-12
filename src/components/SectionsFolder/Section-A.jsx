// eslint-disable-next-line no-unused-vars
import React from "react";

const SectionA = () => {
  return (
    <div
      className="  left-0 top-0 
                     z-[-1] m-auto flex min-h-screen w-screen flex-col items-center justify-start bg-varMEDSPACE  
                      text-center dark:bg-black  dark:text-white "
    >
      <div
        className="Test z-50 m-[20px] -mt-[8.5rem] h-[100vh]
  min-w-[300px] max-w-[80vw] border-2  border-red-500 p-[2rem]"
      ></div>
      <div
        className="Test m-[20px] h-[100vh] min-w-[300px] max-w-[80vw]
  border-2 border-blue-500 p-[2rem] "
      ></div>
      <div
        className="Test m-[20px] h-[100vh] min-w-[300px] max-w-[80vw]
  border-2 border-green-500 p-[2rem] "
      ></div>
    </div>
  );
};

export default SectionA;
