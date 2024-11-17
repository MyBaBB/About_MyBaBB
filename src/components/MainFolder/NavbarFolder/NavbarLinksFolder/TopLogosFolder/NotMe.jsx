import React from 'react'
import NotMe from "./NewMe.png";
const NotMe1 = () => {
  return (

    <>
    <div className='absolute border-2 border-red-500 w-fit h-fit'>
       <a href="https://mybabb.com" className='relative z-10'>
          <div
            className="dataToolTip82  hidden font-LibreBaskerville sm:block"
            data-tool-tip="My Home Page"
          >
            <div
              className="notMe  absolute  z-0 mb-4 mt-[0rem] left-[0rem] border-2 border-red-500 h-[80px] w-[80px] rounded-full p-[5px]
                        "
              style={{
                position: "relative",
                display: "block",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={NotMe}
                alt="Cartoon of Brett "
                width={75}
                height={75}
                className="notMe absolute left-[-1px] top-[-1px]"
              />
            </div>
          </div>
        </a>
    </div>
    </>
  )
}

export default NotMe1
