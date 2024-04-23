import ScubaMask from "../ContainerFolder/ScubaNavFolder/ScubaMask";
import "./NavbarLinks.css";
// import { TbScubaMask } from "react-icons/tb";
const NavbarLinks = () => {
  return (
    <div>
      <header
        className="  relative z-[10] mt-[-2.85rem]  hidden w-screen justify-center 
              border-2 border-transparent sm:mt-[-.45rem] sm:block sm:justify-center"
      >
        <section className="mybabb z-[0] m-auto    w-fit border-2 border-transparent font-Rye">
          <h1 className="hidden">
            <span className="whitespace-nowrap font-Rye text-[.74rem]">
              MyBabb Web Development
            </span>
          </h1>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxx new area with data tool tips below xxxxxxxxxxxxxxxxxxxxxxx */}
          <nav
            id="aboutNav"
            className="navLinksWrapper  hidden space-x-[5rem] pb-4  text-xl  sm:block
            md:m-auto md:space-x-[9rem] lg:space-x-[14rem] xl:space-x-[18rem]"
            aria-label="main"
          >
            <a
              href="#aboutUs"
              className="text-blue-100 hover:text-varDARKBLUEFEATHER   "
            >
              <div
                className="dataToolTip1  font-LibreBaskerville "
                data-tool-tip="Get A Landing Page with Appeal and Functionality"
              >
                <div className="inline-block rounded-xl border-[1px]  border-transparent">
                  <div className="rounded-xl   border-[2px] border-transparent">
                    <div
                      className="rounded-xl  border-[1px]  border-transparent
                                 p-2 "
                    >
                      <span className="NavbarTitle1 whitespace-nowrap font-Aclonica-Regular ">
                        About Us
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://mybabb.github.io/My_Introduction/"
              className="text-blue-100 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 font-LibreBaskerville"
                data-tool-tip="With SEO, your site will be found by search engines."
              >
                <div
                  className="inline-block rounded-xl  
                             border-[1px]  border-transparent"
                >
                  <div className="rounded-xl   border-[2px] border-transparent">
                    <div
                      className="rounded-xl  border-[1px] border-transparent p-2
                                 "
                    >
                      <span className="NavbarTitle2 whitespace-nowrap font-Aclonica-Regular">
                        Improve SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#YourBrand"
              className="text-blue-100 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 font-LibreBaskerville"
                data-tool-tip="Refine Your Brand."
              >
                <div
                  className="inline-block rounded-xl  
                             border-[1px]  border-transparent"
                >
                  <div className="rounded-xl   border-transparent">
                    <div
                      className="rounded-xl  border-[1px] border-transparent p-2
                                "
                    >
                      <span className="NavbarTitle2 font-Aclonica-Regular">Your Brand</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <ScubaMask />
          </nav>

          {/* xxxxxxxxxxxxx new area with data tool tips above xxxxxxxxxxxxx */}
        </section>
      </header>
    </div>
  );
};

export default NavbarLinks;
