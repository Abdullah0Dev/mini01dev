import home from "../../../assets/index";
import { useState } from "react";
const CoinDetails = () => {
  const [onInfo, setOnInfo] = useState(true);
  const [transactionMenu, setTransactionMenu] = useState(false);
  const [transactionType, setTransactionType] = useState(""); // New state to track buy or sell

  return (
    <div className="bg-coin w-full text-black overflow-y-clip overflow-hidden bg-cover">
      <div className="flex w-full mx-5  py-6 items-center gap-x-6 justify-start">
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
      {/* info & chart 1 */}
      <div className="flex justify-between mx-3  items-center">
        <div className="flex items-center gap-x-2 pr-8">
          <img
            src={home.coin}
            alt="token"
            className="w-11 h-11 object-contain"
          />
          <p className="text-xl text-white">JON1</p>
        </div>
        <div className="flex items-center  custom_shadow">
          <button
            onClick={() => setOnInfo(true)}
            className={` ${
              onInfo ? "bg-white text-black" : "bg-transparent text-white"
            } py-3 px-5 `}
          >
            Info
          </button>
          <button
            onClick={() => setOnInfo(false)}
            className={` ${
              !onInfo ? "bg-white text-black" : "bg-transparent text-white"
            } py-3 px-5 `}
          >
            Chart
          </button>
        </div>
      </div>
      {onInfo ? (
        <div>
          {/* img */}
          <div className=" mx-3 mt-4">
            <img src={home.radiux} alt="radiux" className=" self-center" />
          </div>
          {/* website, twitter, telegram. */}
          <div className="flex justify-between text-white text-sm my-4 mx-5 items-center">
            <p>Website</p>
            <p>Twitter</p>
            <p>Telegram</p>
          </div>
          <hr className="h-[2px]   my-3 bg-white mx-5" />
          {/* Create Coin */}
          <div className="custom_shadow bg-white mx-5 py-3 mb-5 px-6">
            <div className="text-xs text-center">Liquidity Unlocks in...</div>
            <div className="flex justify-between mx-9 my-5 items-center">
              <div className="flex flex-col items-center  ">
                <h2 className="text-4xl">4</h2>
                <p className="text-xs">days</p>
              </div>
              <div className="flex flex-col items-center  ">
                <h2 className="text-4xl">12</h2>
                <p className="text-xs">Hours</p>
              </div>
              <div className="flex flex-col items-center  ">
                <h2 className="text-4xl">56</h2>
                <p className="text-xs">Minutes</p>
              </div>
            </div>
          </div>
          {/* Coins Created and Volume Section */}
          <div className="flex justify-around mx-5  gap-y-4 flex-col">
            {/* Volume */}
            <div className="flex  gap-x-3">
              <div className="bg-white createdCoin p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
                <p className="text-[11px] mb-2">Price USD</p>
                <p className="text-black font-bold text-md">$0.0894</p>
              </div>
              <div className="bg-white createdCoin p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
                <p className="text-[11px] mb-2">Price</p>
                <p className="text-black font-bold text-md">$0.0894</p>
              </div>
            </div>
            <div className="flex  gap-x-3">
              <div className="bg-white createdCoin p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
                <p className="text-[11px] mb-2">FDV</p>
                <p className="text-black font-bold text-md">$678K</p>
              </div>
              <div className="bg-white createdCoin p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
                <p className="text-[11px] mb-2">MKT CAP</p>
                <p className="text-black font-bold text-md">$678K</p>
              </div>
            </div>
          </div>

          {/* Tokens Map */}
          <div className="bg-white mx-5 my-4 custom_shadow p-2">
            <div className="flex justify-between custom_shadow mx-3 items-center">
              <div className="flex flex-col items-center border px-3 py-2 gap-y-1">
                <p className="text-black text-[10px]">5M</p>
                <p className="text-red-500 text-xs">-3.71%</p>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-black text-[10px]">1H</p>
                <p className="text-green-500 text-xs">+2.45%</p>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-black text-[10px]">1H</p>
                <p className="text-green-500 text-xs">+2.45%</p>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-black text-[10px]">1H</p>
                <p className="text-green-500 text-xs">+2.45%</p>
              </div>
            </div>

            <div className="flex justify-between mx-3 my-4 items-center">
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-black text-[10px]">Volume</p>
                <p className="text-black text-sm">$849K</p>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-black text-[10px]">TXNS</p>
                <p className="text-black text-sm">431,839</p>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-black text-[10px]">MAKERS</p>
                <p className="text-black text-sm">32452</p>
              </div>
            </div>
            <div className="flex justify-between mx-3 my-4 items-center">
              <div className="flex flex-col items-start gap-y-1">
                <p className="text-black text-[10px]">BUYS</p>
                <p className="text-black text-sm">283,381</p>
              </div>
              <div className="flex flex-col items-end gap-y-1">
                <p className="text-black text-[10px]">SELLS</p>
                <p className="text-black text-sm">4422</p>
              </div>
            </div>
            {/* progress */}
            <div className="flex h-2 rounded-full ">
              <span className="bg-green-400 h-full w-3/4 z-10 rounded-full" />
              <span className="bg-red-500 h-full w-1/4 z-0 rounded-full" />
            </div>
            <div className="flex justify-between mx-3 mt-4 items-center">
              <div className="flex flex-col items-start gap-y-1">
                <p className="text-black text-[10px]">BUY VOL</p>
                <p className="text-black text-sm">283,381</p>
              </div>
              <div className="flex flex-col items-end gap-y-1">
                <p className="text-black text-[10px]">SELL VOL</p>
                <p className="text-black text-sm">4422</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // charts
        <div className=" h-full  mx-3 items-center justify-center">
          <div className="flex items-center my-4 self-center ">
            <img src={home.chart} className="w-full" alt="moreInfo" />
          </div>
          <div className="flex custom_shadow px-5 items-center justify-around bg-white py-5 mb-4">
            <button
              onClick={() => {
                setTransactionMenu(true);
                setTransactionType("buy");
              }}
              className="text-xl text-green-400"
            >
              {" "}
              Buy{" "}
            </button>
            <hr className="h-full rotate-90 bg-black w-4" />
            <button
              onClick={() => {
                setTransactionMenu(true);
                setTransactionType("sell");
              }}
              className="text-xl text-red-400"
            >
              {" "}
              Sell{" "}
            </button>
          </div>

          {/* Tokens Map */}
          <div className="bg-white custom_shadow my-5 py-4 px-2 createdCoin rounded-lg">
            <div className="flex justify-between text-center text-[12px]  px-2 py-2 border-b border-black">
              <p>Token</p>
              <p>USD</p>
              <p>Price</p>
              <p>Maker</p>
            </div>

            {tokenData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-center items-center px-2 py-3 border-b border-black"
              >
                <p
                  className={`text-[13px] ${
                    item.token === "Buy" ? "text-green-500" : "text-red-500"
                  } `}
                >
                  {item.token}
                </p>
                <p
                  className={`text-[13px] ${
                    item.token === "Buy" ? "text-green-500" : "text-red-500"
                  } `}
                >
                  {item.USD}
                </p>
                <p
                  className={`text-[13px] ${
                    item.token === "Buy" ? "text-green-500" : "text-red-500"
                  } `}
                >
                  {item.price}
                </p>

                <p className="text-blue-400  text-[13px] ">{item.maker}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {transactionMenu && (
        <div className="w-full absolute top-0 left-0 h-full items-center justify-center flex bg-black/30">
          <div
            className={`mx-3 w-full  rounded-md   ${
              transactionType === "buy"
                ? "custom_green_shadow"
                : transactionType === "sell"
                ? "custom_red_shadow"
                : ""
            } bg-white `}
          >
            <div className="flex items-center justify-around bg-white py-5 mb-4">
              <button onClick={() => setTransactionMenu(true)}>
                <img src="../assets/buy.png" alt="buy_btn" />
              </button>
              <button onClick={() => setTransactionMenu(true)}>
                <img src="../assets/sell.png" alt="sell_btn" />
              </button>
            </div>
            <div className="flex items-center justify-between border-b-4 text-black mx-5">
              <input
                type="text"
                placeholder="0.0"
                className="text-black text-xs focus-within:border-none focus-within:outline-none py-3 w-full bg-transparent placeholder:text-black"
              />

              <div className="flex items-center gap-x-2">
                <p className="text-[13px]">ETH</p>
                <img
                  src={home.coin}
                  alt="token"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <p className="text-[10px]  px-5 mt-2">
              reset 0.05ETH 0.05ETH 0.2ETH 1ETH
            </p>

            <button
              onClick={() => setTransactionMenu(false)}
              //  className=" my-9 mx-5 py-4 flex justify-center items-center border border-blue-500"
              className="py-8 flex justify-center self-center w-full items-center "
            >
              <img src="../assets/trade.png" alt="trade_btn" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;

const tokenData = [
  { token: "Buy", price: 0.53, USD: 185.83, maker: "0x935." },
  { token: "Sell", price: 0.53, USD: 135.83, maker: "0x935." },
  { token: "Buy", price: 0.53, USD: 185.83, maker: "0x935." },
  { token: "Sell", price: 0.53, USD: 135.83, maker: "0x935." },
  { token: "Buy", price: 0.53, USD: 185.83, maker: "0x935." },
  { token: "Sell", price: 0.53, USD: 135.83, maker: "0x935." },
  { token: "Buy", price: 0.53, USD: 185.83, maker: "0x935." },
  { token: "Sell", price: 0.53, USD: 135.83, maker: "0x935." },
  { token: "Buy", price: 0.53, USD: 185.83, maker: "0x935." },
];
