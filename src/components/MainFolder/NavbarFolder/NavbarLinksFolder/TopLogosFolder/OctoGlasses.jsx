import OctoGlasses from "./OctoGlasses.png";

const OctoGlasses1 = () => {
  return (
    <>
    <div>
      <a href="https://resume-hub.mybabb.com">
          <div
            className="dataToolTip81  hidden font-LibreBaskerville sm:block"
            data-tool-tip="Portfolio Hub "
          >
            <div
              className="octoGlasses   relative z-0 mb-4 mt-[2rem] h-[80px] w-[80px] rounded-full p-[5px]
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
              style={{
                position: "relative",
                display: "block",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={OctoGlasses}
                alt="OctoGlasses"
                width={75}
                height={75}
                className="octoGlasses absolute left-[-1px] top-[-1px]"
              />
            </div>
          </div>
        </a>
      </div>

     
  </>
  )
}

export default OctoGlasses1
