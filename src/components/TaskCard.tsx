import { WorkType } from "@/lib/types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  BriefcaseIcon,
} from "lucide-react";
import { useNavigate } from "react-router";

export const TaskCard = (task: WorkType) => {
  // Status color mapping
  const statusColorMap: Record<string, string> = {
    Open: "bg-green-500",
    Closed: "bg-red-500",
    InProgress: "bg-yellow-500",
  };
  const navigate = useNavigate();
  return (
    <div className="flex gap-6 flex-col bg-white dark:bg-black rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow border-2 border-border-light dark:border-border-dark">
      <div className="flex justify-between gap-4">
        {/* Left section with task details */}
        <div className="space-y-3">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {task.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <CalendarIcon size={16} />
              <span>{task.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon size={16} />
              <span>{task.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon size={16} />
              <span>{task.offersCount} offers</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon size={16} />
              <span>{task.workType}</span>
            </div>
          </div>
        </div>

        {/* Right section with pay and action button */}
        <div className="flex flex-col justify-between items-end gap-2">
          <Badge
            className={`${
              statusColorMap[task.status] || "bg-gray-500"
            } text-white`}
          >
            {task.status}
          </Badge>
          <div className="text-right">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Payment
            </p>
            <p className="text-2xl font-bold text-black dark:text-white">
              ₹{task.pay.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        <Button
          className="flex-1 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
          onClick={() => {
            navigate(`/task/${task._id}`);
          }}
        >
          View Task
        </Button>
        <Button className="flex-1 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer">
          Accept Task
        </Button>
      </div>
    </div>
  );
};
