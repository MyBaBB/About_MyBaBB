// eslint-disable-next-line no-unused-vars
import React from "react";
import MybabbLogo from "./MyBabbLogo200x72px.png";
const MyBabbLogo = () => {
  return (
    <div
      id="scubaSpear"
      className="m-auto flex  w-[80%]   justify-center pr-[6rem] "
    >
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
