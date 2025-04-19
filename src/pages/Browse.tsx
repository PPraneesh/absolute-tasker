import { TaskCard } from "../components/TaskCard";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { WorkType } from "@/lib/types";
import { RootState } from "@/lib/redux/store";

export const Browse = () => {
  const tasks = useSelector((state: RootState) => state.worksSlice.tasks);
  const [selectedTask, setSelectedTask] = useState<WorkType | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Browse Available Tasks
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Find and accept tasks that match your skills and preferences
          </p>
        </header>

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task: WorkType, index: number) => (
            <div
              className="cursor-pointer"
              onClick={() => setSelectedTask(task)}
            >
              <TaskCard key={index} {...task} />
            </div>
          ))}
        </div>
      </div>

      {/* Slide-in Fullscreen Task Details */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-xl z-50 transition-transform duration-300 transform ${
          selectedTask ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-slate-800">Task Details</h2>
          <button onClick={() => setSelectedTask(null)}>
            <X className="w-5 h-5 text-gray-600 cursor-pointer" />
          </button>
        </div>

        {/* Task Content */}
        {selectedTask && (
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">{selectedTask.name}</h3>
            <p>
              <strong>Description:</strong> {selectedTask.description}
            </p>
            <p className="text-gray-600">
              <strong>Date:</strong> {selectedTask.date}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {selectedTask.location}
            </p>
            <p className="text-gray-600">
              <strong>Work Type:</strong> {selectedTask.workType}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong> {selectedTask.status}
            </p>
            <p className="text-gray-600">
              <strong>Offers:</strong> {selectedTask.offersCount}
            </p>
            <p className="text-gray-600">
              <strong>Pay:</strong> ₹{selectedTask.pay}
            </p>

            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Make an Offer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
