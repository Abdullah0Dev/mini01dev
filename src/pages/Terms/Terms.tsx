import home from "../../../assets/index";

import { Link } from "@/components/Link/Link.tsx";

const Terms = () => {
  return (
    <div className="flex w-full flex-col h-screen bg-[#F4A7A7]">
      <div className="relative w-full h-[500px]">
        <img
          src={home.home}
          alt="home"
          className="w-full h-full object-cover scale-105 z-10"
        />ß
        <img
          src={home.cat}
          alt="cat"
          className="absolute z-0 -bottom-3 left-1/2 transform -translate-x-1/2   w- object-contain self-center h-auto"
        />
      </div>

      <img src={home.book} alt="box" className="self-center scale z-20 -mt-9" />
      <div className="flex z-30 flex-col  items-center text-center ">
        <h1 className="text-black text-3xl my-8">NOT POSSIBLE TO RUG. HEHE.</h1>
        <div></div>
        <p className="text-black px-5 text-sm  mb-5">
          With our loomix smart contract technology developers can’t withdraw
          liquidity for 5 days.
        </p>
        <button className="mt-7">
          <Link to="/home">
            <img src={home.understood} alt="understood" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Terms;
