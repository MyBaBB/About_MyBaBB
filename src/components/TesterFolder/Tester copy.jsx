// eslint-disable-next-line no-unused-vars
import React from "react";
import MybabbLogo from "../../Assets/mybabb-327x119px.jpg";

const Tester = () => {
  return (
    <div className="flex h-screen items-center justify-center border-2 border-red-400">
      {/* xxxxxxxxxxxxxxx Logo on center of footer xxxxxxxxx */}
      <div
        className="footerCenterWrapper 
        relative m-auto mx-2 flex h-[90px] 
                      w-fit flex-col items-center justify-center p-4 text-center"
      >
        <img
          src={MybabbLogo}
          alt="MyBaBB Logo"
          width={250}
          className="MyBabbLogo rounded-full"
        />
      </div>
    </div>
  );
};

export default Tester;
