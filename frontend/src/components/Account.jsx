import React, { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import AccountForm from "./AccountForm";
import api from "@/utils/api";

const Account = () => {
  const [data, setData] = useState(null);
  const [agentId, setAgentId] = useState("");

  const fetchUserID = async () => {
    try {
      const response = await api.get("/api/agent/role/");
      console.log("gamer", response);
      setAgentId(response.data.role.id);
    } catch (error) {
      console.error("Failed to fetch user role:", error);
    }
  };

  const fetchAgent = async (id) => {
    try {
      const response = await api.get(`/api/agents/${id}`);
      console.log("Hello", response);
      setData(response.data.Agent);
    } catch (error) {
      console.error("Failed to fetch agent data:", error);
    }
  };

  useEffect(() => {
    const getAgentData = async () => {
      await fetchUserID();
    };
    getAgentData();
  }, []);

  useEffect(() => {
    if (agentId) {
      fetchAgent(agentId);
    }
  }, [agentId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full p-4 ">
      <div className="pt-8 px-3 flex justify-between">
        <h1 className="text-3xl font-medium tracking-tight">Account</h1>
      </div>
      <section className="flex mt-6 px-3 gap-4">
        <aside className=" ">
          <AccountCard data={data} />
        </aside>
        <div>
          <div>
            <AccountForm data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
