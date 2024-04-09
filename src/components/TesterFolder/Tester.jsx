// eslint-disable-next-line no-unused-vars
import React from "react";
import MybabbLogo from "../../Assets/mybabb-327x119px.jpg";

const Tester = () => {
  return (
    <div className="flex h-screen items-center justify-center ">
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
          className="MyBabbLogo hidden rounded-full sm:block"
        />
      </div>
    </div>
  );
};

export default Tester;
