// import { useSelector } from "react-redux";

// export const TaskPage = () => {
//     const params = useParams();
//     const taskId = params.id;
//     const tasks = useSelector((state) => state.tasks.tasks);
//     return(<>

//     </>)
// }

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Briefcase, CircleDollarSign } from "lucide-react";

const task = {
  _id: "3",
  name: "Content writing for marketing campaign",
  date: "Feb 28, 2024",
  location: "Delhi",
  workType: "On-site",
  status: "Open",
  offersCount: 12,
  pay: 8000,
};

export default function TaskPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full space-y-6 border">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{task.name}</h2>
          <Badge
            className={`text-sm ${
              task.status === "Open"
                ? "bg-green-100 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {task.status}
          </Badge>
        </div>

        {/* Task Meta Info */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span>{task.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span>{task.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-gray-500" />
            <span>{task.workType}</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleDollarSign className="w-5 h-5 text-gray-500" />
            <span>₹{task.pay}</span>
          </div>
        </div>

        {/* Offers Count */}
        <p className="text-sm text-gray-500">
          {task.offersCount} offer{task.offersCount !== 1 && "s"} received
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Back</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Make an Offer
          </Button>
        </div>
      </div>
    </div>
  );
}
