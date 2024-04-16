// eslint-disable-next-line no-unused-vars
import React from "react";
import MybabbLogo from "./MyBabbLogo200x72px.png";
const MyBabbLogo = () => {
  return (
    <div>
      <div className=" m-a flex h-fit items-center justify-center">
        <img
          src={MybabbLogo}
          alt="MyBabb Logo"
          width={140}
          className="mt-1 rounded-3xl border-2 border-varDARKBLUEFEATHER "
        />
      </div>
    </div>
  );
};

export default MyBabbLogo;
