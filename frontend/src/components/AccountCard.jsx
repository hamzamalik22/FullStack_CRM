import React from "react";

const AccountCard = () => {
  return (
    <>
      <div className="outer relative w-[296px] h-[249px] rounded-[20px] bg-transparent border border-gray dark:border-zinc-400 text-zinc-900 dark:text-zinc-300 py-5 px-6 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[76px] h-[76px] rounded-full"
            src="https://material-kit-react.devias.io/assets/avatar.png"
            alt=""
          />
          <h1 className="text-2xl font-medium pt-2 pb-1">Sofia Rivers</h1>
          <p className="text-md tracking-tight text-zinc-500">
            Los Angeles USA
          </p>
          <p className="pt-2 pb-1 text-sm tracking-tight text-zinc-500">
            GTM-7
          </p>
        </div>
        <div className="border-t flex justify-center pt-3 text-purple-700 ">
          <p className="hover:underline cursor-pointer">Upload picture</p>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
