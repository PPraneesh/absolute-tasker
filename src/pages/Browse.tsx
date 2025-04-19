import { TaskCard } from "../components/TaskCard"; // Assuming TaskCard is also theme-aware
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { WorkType } from "@/lib/types";
import { RootState } from "@/lib/redux/store";
import SecondaryHeader from "../components/SecondaryHeader"; // Import the header

export const Browse = () => {
  const tasks = useSelector((state: RootState) => state.worksSlice.tasks);
  const [selectedTask, setSelectedTask] = useState<WorkType | null>(null);

  return (
    <div className={`min-h-screen relative overflow-x-hidden`}>
      <SecondaryHeader />
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {tasks && tasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Added xl column */}
            {tasks.map((task: WorkType) => (
              // Key should be on the outermost element in the map
              <div
                key={task.name} // Use a unique ID if available
                className="cursor-pointer h-full" // Ensure div takes full card height
                onClick={() => setSelectedTask(task)}
              >
                {/* Assuming TaskCard takes full height and is theme-aware */}
                <TaskCard {...task} />
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-12 `}>
            No tasks found. Try adjusting your filters.
          </div>
        )}
      </div>
      {/* Slide-in Fullscreen Task Details Panel */}
      {/* Overlay */}
      {selectedTask && (
        <div
          className="fixed inset-0 bg-black/30 dark:bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setSelectedTask(null)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-black  shadow-xl z-50 transition-transform duration-300 transform flex flex-col ${
          selectedTask ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-4 border-b $ shrink-0`}
        >
          <h2 className={`text-lg font-semibold $}`}>Task Details</h2>
          <button
            onClick={() => setSelectedTask(null)}
            className={`p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800  hover:text-black dark:hover:text-white`}
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close details</span>
          </button>
        </div>

        {/* Task Content - Make scrollable */}
        {selectedTask && (
          <div className="p-4 md:p-6 space-y-4 overflow-y-auto flex-grow ">
            <h3 className={`text-xl font-semibold $}`}>{selectedTask.name}</h3>
            <div>
              <p className={`text-sm font-medium $} mb-1`}>Description:</p>
              <p className={` text-sm`}>{selectedTask.description}</p>
            </div>
            {/* Use grid for better alignment of details */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm pt-2 border-t border-dashed border-neutral-300 dark:border-neutral-700">
              <div className={`$} font-medium`}>Date:</div>
              <div>{selectedTask.date || "Not specified"}</div>

              <div className={`$} font-medium`}>Location:</div>
              <div>{selectedTask.location || "Remote/Any"}</div>

              <div className={`$} font-medium`}>Work Type:</div>
              <div>{selectedTask.workType || "Any"}</div>

              <div className={`$} font-medium`}>Status:</div>
              <div
                className={`capitalize font-medium ${
                  selectedTask.status === "open"
                    ? "text-green-600 dark:text-green-400"
                    : ""
                }`}
              >
                {selectedTask.status || "-"}
              </div>

              <div className={`$} font-medium`}>Offers:</div>
              <div>{selectedTask.offersCount ?? 0}</div>

              <div className={`$} font-medium`}>Pay:</div>
              <div className={`font-semibold $}`}>
                ₹{selectedTask.pay?.toLocaleString() ?? "N/A"}
              </div>
            </div>

            {/* Add more details if needed */}
          </div>
        )}
        {/* Footer Button */}
        {selectedTask && (
          <div className={`p-4 border-t $ shrink-0`}>
            <Button className={`w-full $`}>
              Make an Offer (₹{selectedTask.pay?.toLocaleString() ?? "N/A"})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
