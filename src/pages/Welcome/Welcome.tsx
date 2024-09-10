import home from "../../../assets/index";

import { Link } from "@/components/Link/Link.tsx";
const Welcome = () => {
  return (
    <div className="flex w-full flex-col h-screen bg-[#F4EBA7]">
      <img
        src={home.home}
        alt="home"
        className="w-full scale-105   self-center object-cover z-10"
      />
      <img src={home.box} alt="box" className="self-center scale z-20 -mt-9" />
      <div className="flex flex-col items-center text-center ">
        <h1 className="text-black text-3xl my-8">Wellcome to LOOMIX</h1>
        <p className="text-black text-sm mb-5">
          Create coins, earn rewards, and unlock surprises in a loomixated
          world.
        </p>
        <button className="mt-7">
          <Link to="/understood">
            <img src={home.runNow} alt="run now" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
