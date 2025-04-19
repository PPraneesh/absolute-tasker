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
  const statusColorMap = {
    Open: "bg-green-500",
    Closed: "bg-red-500",
    InProgress: "bg-yellow-500",
  };
  const navigate = useNavigate();
  return (
    <div className="flex gap-6 flex-col bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between gap-4">
        {/* Left section with task details */}
        <div className="space-y-3">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {task.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
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
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Payment
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              ₹{task.pay.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        <Button
          className="flex-1 bg-slate-700 hover:bg-slate-600 cursor-pointer"
          onClick={() => {
            navigate(`/task/${task._id}`);
          }}
        >
          View Task
        </Button>
        <Button className="flex-1 bg-slate-700 hover:bg-slate-600 cursor-pointer">
          Accept Task
        </Button>
      </div>
    </div>
  );
};
