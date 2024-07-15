import {
  ChevronsUp,
  DollarSign,
  ChevronsDown,
  Users,
  Logs,
  NotepadTextDashed,
} from "lucide-react";
import React from "react";

const iconMapping = {
  dollar: DollarSign,
  users: Users,
  menu: Logs,
  mail: NotepadTextDashed,
  down: ChevronsDown,
  up: ChevronsUp,
};

const DashboardCard = ({ data }) => {
  const {
    title,
    large_amount,
    large_icon,
    small_icon,
    small_amount,
    description,
    progress,
    color,
  } = data;

  const LargeIcon = iconMapping[large_icon];
  const SmallIcon = iconMapping[small_icon];
  const smallIconColor = small_icon === 'down' ? 'text-red-400' : 'text-green-400';

  return (
    <>
      <div className="outer relative w-[216px] h-[208px] rounded-[20px] bg-transparent border border-gray dark:border-zinc-400 text-zinc-900 dark:text-zinc-300 py-5 px-6 overflow-hidden">
        <div className="inner-top flex items-center justify-between gap-8">
          <div className="">
            <h3 className="text-[13.5px] mt-4">{title}</h3>
            <h1 className="text-3xl font-semibold mt-3">{large_amount}</h1>
          </div>
          <div
            className={`h-14 w-14 mt-4 ${color} rounded-full flex-shrink-0`}
          >
            <span className="w-full h-full flex justify-center items-center text-white dark:text-black">
              {LargeIcon && <LargeIcon size="18px" />}
            </span>
          </div>
        </div>

        <div className="inner-bottom mt-3 px-3 py-5 gap-2 flex justify-between items-center w-full ">
        <div className={`flex items-center text-xs ${smallIconColor}`}>
            <span>{SmallIcon && <SmallIcon size="18px" />}</span>
            <span>{small_amount && `${small_amount}%`}</span>
          </div>
          <div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 text-nowrap">
              {description}
            </p>
          </div>
        </div>
        {progress && (
          <div className="w-full bg-gray-300 h-2 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2"
              style={{ width: large_amount }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardCard;
