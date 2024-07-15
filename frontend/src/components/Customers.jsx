import { Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import CustomerTable from "./CustomerTable";

const Customers = () => {
  return (
    <>
      <div className="h-full p-4 pb-0">
        <section className="pt-8 px-3">
          <div className="flex justify-between">
            <h1 className="text-3xl font-medium tracking-tight">Customers</h1>
            <Button className="bg-purple-500">
              <span className="pr-3">
                <Plus />
              </span>{" "}
              Add
            </Button>
          </div>
        </section>
        <section className="mt-6 px-3">
          <div className="w-[100%] flex items-center gap-3  border rounded-lg shadow p-4">
            <span>
              <Search size="20px" />
            </span>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input type="text" id="search" placeholder="Search Customer" />
            </div>
          </div>
        </section>
        <section className="mt-6 px-3">
          <div className="border rounded-3xl shadow p-3">
            <CustomerTable />
          </div>
          <h2 className="text-zinc-600 text-sm flex justify-center relative top-8">A list of your recent customers.</h2>
        </section>
      </div>
    </>
  );
};

export default Customers;
