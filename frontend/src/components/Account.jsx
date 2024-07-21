import React, { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import AccountForm from "./AccountForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgent, fetchUserRole } from "@/store/actions/AgentActions";

const Account = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.agent);
  const [agentId, setAgentId] = useState("");

  useEffect(() => {
    const getAgentData = async () => {
      const id = await dispatch(fetchUserRole());
      setAgentId(id);
    };
    getAgentData();
  }, [dispatch]);

  useEffect(() => {
    if (agentId) {
      dispatch(fetchAgent(agentId));
    }
  }, [agentId, dispatch]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-full">
      <div className="pt-8 sm:px-6 lg:px-8 flex justify-between">
        <h1 className="text-3xl font-medium tracking-tight">Account</h1>
      </div>
      <section className="flex flex-col lg:flex-row mt-6 sm:px-6 lg:px-8 gap-4">
        <aside className="lg:w-1/3">
          <AccountCard data={data} />
        </aside>
        <div className="lg:w-2/3">
          <AccountForm data={data} />
        </div>
      </section>
    </div>
  );
};

export default Account;
