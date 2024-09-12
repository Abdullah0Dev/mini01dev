import { Link } from "react-router-dom";
import home from "../../../assets/index";

const CreateCoin = () => {
  return (
    <div className="w-full h-screen  bg-cover bg-[url(../assets/coin_bg.png)] bg-no-repeat text-black">
      <div className="flex w-full px-5  py-6 items-center gap-x-6 justify-start">
        <img src={home.box} alt="box" className="w-14 h-14 object-contain" />
        <div className="flex w-3/5 items-center gap-x-5  searchCoin">
          <img
            src={home.searchIcon}
            className="w-6 object-contain"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search coin"
            className="text-white text-[11px] focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-white"
          />
        </div>
      </div>

      {/* Create Coin */}
      <button className="coin-button">
        {" "}
        <a href="/understood">Create a coin</a>{" "}
      </button>
      {/* Coins Created and Volume Section */}
      <div className="flex justify-around px-5 gap-x-4">
        {/* Coins Created */}
        <div className="bg-white p-4 rounded-lg flex flex-col items-center createdCoin w-1/2 border-2 border-blue-100">
          <p className="font-bold text-[11px] mb-2">Coins Created</p>
          <div className="flex items-center">
            {/* Multiple Coin Icons */}
            <div className="flex -space-x-2">
              <img
                src={home.coin} // Replace with your coin icons
                alt="coin1"
                className="w-8 h-8 object-contain"
              />
              <img
                src={home.coin} // Replace with your coin icons
                alt="coin2"
                className="w-8 h-8 object-contain"
              />
              <img
                src={home.coin} // Replace with your coin icons
                alt="coin3"
                className="w-8 h-8 object-contain"
              />
            </div>
            <p className="ml-2 font- text-xs">+938</p>
          </div>
        </div>

        {/* Volume */}
        <div className="bg-white createdCoin p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
          <p className="text-[11px] mb-2">Volume</p>
          <p className="text-green-500 font-bold text-md">+45.83MIO</p>
        </div>
      </div>

      {/* Tokens Map */}
      <div className="bg-white mx-5 my-5 p-4 createdCoin rounded-lg">
        <div className="grid grid-cols-2 text-sm text-left px-2 py-2 border-b border-gray-200">
          <p>Token</p>
          <div className="flex items-center gap-x-5">
            <p>Price</p>
            <p>Volume</p>
          </div>
        </div>

        {tokenData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center px-2 py-3 border-b border-gray-100"
          >
            <div className="flex items-center gap-x-2 pr-8">
              <img
                src={home.coin}
                alt="token"
                className="w-8 h-8 object-contain"
              />
              <p className="text-[13px]">{item.token}</p>
            </div>
            <div className="flex items-center gap-x-5">
            <Link to="/coinDetails">
              <p className="text-[13px]">${item.price.toFixed(2)}</p>
            </Link>
            <p className="text-green-400  text-[13px] ">
              {item.volume.toFixed(2)}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCoin;

const tokenData = [
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
];
