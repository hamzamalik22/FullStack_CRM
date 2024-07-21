// Account.jsx
import React, { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import AccountForm from "./AccountForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgent, fetchUserRole } from "@/store/actions/AgentActions";

const Account = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.agent);
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
    <div className="h-full p-4">
      <div className="pt-8 px-3 flex justify-between">
        <h1 className="text-3xl font-medium tracking-tight">Account</h1>
      </div>
      <section className="flex mt-6 px-3 gap-4">
        <aside>
          <AccountCard data={data} />
        </aside>
        <div>
          <AccountForm data={data} />
        </div>
      </section>
    </div>
  );
};

export default Account;
