import React from "react";
import AccountCard from "./AccountCard";
import AccountForm from "./AccountForm";

const Account = () => {
  return (
    <>
      <div className="h-full p-4 ">
        <div className="pt-8 px-3 flex justify-between">
          <h1 className=" text-3xl font-medium tracking-tight">Account</h1>
        </div>
        <section className="flex mt-6 px-3 gap-4">
          <aside className=" ">
            <AccountCard />
          </aside>
          <div>
            <div>
              <AccountForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Account;
