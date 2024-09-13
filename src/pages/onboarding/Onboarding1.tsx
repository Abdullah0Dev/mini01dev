import { Link } from "react-router-dom";
import home from "../../../assets/index";
const Onboarding1 = () => {
  return (
    <div className="w-full h-screen bg-cover bg-[url(../assets/1st_bg.png)] bg-no-repeat">
      <div className="w-full py-20 flex items-center justify-center">
        <img src={home.box} alt="box" className="  self-center" />
      </div>
      <div className="texts text-white flex  flex-col items-center text-center">
        <h2 className="text-xl">
          Select the amount of [your coin] to purchase (optional)
        </h2>
        <p className="mt-5 text-white/70 mx-4 text-xs">
          Tip: Purchasing a small quantity of your coins can help shield them
          from snipers.
        </p>
      </div>
      <div className="flex items-center justify-between my-14 border-b-4 text-white mx-5">
        <input
          type="text"
          placeholder="0.0 <OPTIONAL>"
          className="text-white text-sm focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
        />

        <div className="flex items-center gap-x-2">
          <p className="text-sm">ETH</p>
          <img src={home.eth} alt="token" className="w-8 h-8 object-contain" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/onboarding2`}>
        <img src={home.crBtn} alt="createCoin" className="mt-4" />
        </Link>
      </div>
    </div>
  );
};

export default Onboarding1;
