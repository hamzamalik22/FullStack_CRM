import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import api from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/api/update-password/", data);
      setMessage("Password updated successfully");
      reset();
      toast.success("Password updated successfully");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="h-full p-4 pb-0">
        <section className="pt-8 px-3 sm:px-6">
          <div className="flex justify-between">
            <h1 className="text-3xl font-medium tracking-tight">Settings</h1>
          </div>
        </section>

        <section className="mt-6 px-3 sm:px-6">
          <div className="border rounded-3xl shadow p-4 mb-6 lg:max-w-3xl ">
            <h2 className="text-xl font-medium mb-4">Update Password</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Current Password
                </label>
                <Input
                  type="password"
                  placeholder="Current Password"
                  {...register("current_password", { required: true })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <Input
                  type="password"
                  placeholder="New Password"
                  {...register("new_password", { required: true })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  {...register("confirm_new_password", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto bg-purple-500">
                Update Password
              </Button>
              {message && <p className="text-green-500">{message}</p>}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Settings;
