import React from "react";

const AccountForm = () => {
  return (
    <>
      <div className="relative w-full h-full rounded-[20px] bg-transparent border border-gray dark:border-zinc-400 text-zinc-900 dark:text-zinc-300 py-5 px-6 overflow-hidden">
        <div>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none focus:border-gray-500 block w-full bg-transparent border-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking- dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-transparent  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Email
                </label>
                <input
                  class="appearance-none focus:border-gray-500 block w-full bg-transparent border-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide  dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-transparent  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="(000) 123456"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Country
                </label>
                <input
                  class="appearance-none focus:border-gray-500 block w-full bg-transparent border-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="text"
                  placeholder="Pakistan"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide  dark:text-zinc-300 text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-transparent  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  id="grid-last-name"
                  type="select"
                  placeholder="Jhelum"
                />
              </div>
            </div>

            {/* <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountForm;
