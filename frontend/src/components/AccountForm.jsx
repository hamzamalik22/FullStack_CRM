import React from "react";
import { useForm } from "react-hook-form";
import api from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountForm = ({ data }) => {
  if (!data) {
    return <div></div>;
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      city: data.city,
    },
  });

  const onSubmit = async (formData) => {
    try {
      // console.log("Submitting form data:", formData); // Log the form data to inspect it
      const response = await api.put(`/api/agents/${data.id}`, formData);
      // console.log("Agent updated successfully:", response);
      toast.success("Account Updated, Refresh");
    } catch (error) {
      console.error("Failed to update agent:", error.response.data);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative w-full h-full rounded-[20px] bg-transparent border border-gray dark:border-zinc-400 text-zinc-900 dark:text-zinc-300 py-5 px-6 overflow-hidden">
        <div>
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  {...register("first_name")}
                  className="appearance-none focus:border-gray-500 block w-full bg-transparent border-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  placeholder="-----"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  {...register("last_name")}
                  className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="-----"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  className="appearance-none focus:border-gray-500 block w-full bg-transparent border-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-email"
                  type="email"
                  placeholder="-----"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-phone"
                  type="text"
                  placeholder="-----"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-country"
                >
                  Country
                </label>
                <input
                  {...register("country")}
                  className="appearance-none focus:border-gray-500 block w-full bg-transparent border-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-country"
                  type="text"
                  placeholder="-----"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  {...register("city")}
                  className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="-----"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 font-medium py-2 px-4 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountForm;
