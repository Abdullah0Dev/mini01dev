import { Link } from "react-router-dom";
import home from "../../../assets/index";

const Onboarding2 = () => {
  return (
    <div className="w-full h-screen bg-cover bg-[url(../assets/2nd_bg.png)] bg-no-repeat">
      <div className="flex items-center flex-col pt-20 w-full px-10 gap-y-5">
        <h1 className="text-2xl text-center">launch a coin</h1>

        <div className="flex items-center w-[90%] justify-between border-b-2 text-white ">
          <input
            type="text"
            placeholder="TOKEN NAME"
            className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>

        <div className="flex items-center w-[90%] justify-between border-b-2 text-white ">
          <input
            type="text"
            placeholder="Token ticker"
            className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>

        <div className="flex items-center w-[90%] justify-between border-b-2 text-white ">
          <input
            type="text"
            placeholder="DESCRIPTION"
            className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>
        {/* upload.. */}
        <button className="flex mt-2 items-center w-[90%] justify-start gap-x-4  text-white ">
          <img src={home.download} alt="download" />
          <h3 className="text-white text-sm ">Upload logo</h3>
        </button>
        <button className="flex mt-2 items-center w-[90%] justify-start gap-x-4  text-white ">
          <img src={home.download} alt="download" />
          <h3 className="text-white text-sm ">Upload BANNER</h3>
        </button>
        {/* lins stuff... */}

        <div className="flex items-center w-[90%] justify-between border-b border-white text-white ">
          <input
            type="text"
            placeholder="TOKEN NAME"
            className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>

        <div className="flex items-center w-[90%] justify-between border-b border-white text-white ">
          <input
            type="text"
            placeholder="Token ticker"
            className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>

        <div className="flex items-center w-[90%] justify-between border-b border-white text-white ">
          <input
            type="text"
            placeholder="DESCRIPTION"
            className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>
        <div className="flex items-center mt-3 justify-center">
          <Link to={`/welcome`}>
            <img src={home.crBtn} alt="createCoin" className="mt-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding2;
