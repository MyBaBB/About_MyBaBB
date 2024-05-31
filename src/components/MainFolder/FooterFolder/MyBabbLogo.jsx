// eslint-disable-next-line no-unused-vars
import React from "react";
import MybabbLogo from "./MyBabbLogo200x72px.png";
const MyBabbLogo = () => {
  return (
    <div id="scubaSpear" className="flex justify-center  m-auto   w-[80%] pr-[6rem] ">
   
        <img
          src={MybabbLogo}
          alt="MyBabb Logo"
          width={140}
          className="m-auto  rounded-3xl border-2 border-varDARKBLUEFEATHER "
        />
   
    </div>
  );
};

export default MyBabbLogo;
