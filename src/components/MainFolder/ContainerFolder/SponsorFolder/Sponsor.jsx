// eslint-disable-next-line no-unused-vars
import React from 'react'
// import CSSLogo from './cssLogoHeight80px.png'
import './Sponsor.css'
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
const Sponsor = () => {
  return (
    <div>
      
          <div className="relative mt-4 -mb-8">
          <div className='LogoItems relative flex justify-end '>
          <span className='inline-block'>< GrReactjs size={35}
           className='reactSpin text-[#01b9f1] bg-transparent'/></span>
                <span className='inline-block'>< TbBrandHtml5 size={35} 
           className='text-[#e24a23] bg-transparent' /></span>
                <span className='inline-block'>< TbBrandJavascript size={35}
           className='text-[#e6c72e] bg-transparent'/></span>
                <span className='inline-block'>< TbBrandCss3 size={35}
           className='text-[#016cb7] bg-transparent'/></span>
                <span className='inline-block'>< SiTailwindcss size={35}
           className='text-[#00ffff] bg-transparent'/></span>
           </div>    

         







        {/*     <img
              src={CSSLogo}
              alt="CSS Logo"
              width="80"
              height="25"
              style={{ display: "block", margin: "auto" }}
            /> */}
          </div>
          <br />
          
              
           {/*  <a href="https://github.com/sponsors/MyBaBB">
              <button className='SponsorButton font-Itim text-gray-300 w-fit p-2
                                border-[1px]  border-[#419aff] rounded-xl '>
                   Sponsor Brett <br /><span >
                     on GitHub</span>
                </button>
            </a> */}
              
               
            
          </div>
        
      
   
  )
}

export default Sponsor
