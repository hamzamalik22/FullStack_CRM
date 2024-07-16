import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Settings = () => {
  return (
    <div className="h-full p-4 pb-0">
      <section className="pt-8 px-3">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium tracking-tight">Settings</h1>
        </div>
      </section>

      <section className="mt-6 px-3">
        <div className="border rounded-3xl shadow p-4 mb-6">
          <h2 className="text-xl font-medium mb-4">Update Password</h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <Input type="password" placeholder="Current Password" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <Input type="password" placeholder="New Password" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm New Password
              </label>
              <Input type="password" placeholder="Confirm New Password" />
            </div>
            <Button className="w-fit bg-purple-500">Update Password</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
