import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Calendar } from "../ui/calendar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  CalendarDays,
  Clock,
  Wand2,
  Sun,
  SunMedium,
  Sunset,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const TaskTitleDate = ({
  onDataChange,
}: {
  onDataChange: (data: any) => void;
}) => {
  const [date, setDate] = useState<Date | undefined>();
  const [title, setTitle] = useState("");
  const [dateType, setDateType] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  useEffect(() => {
    onDataChange({ date, title, dateType, timeSlot });
  }, [date, title, dateType, timeSlot]);

  return (
    <div className="space-y-6 px-4 max-w-2xl mx-auto">
      <div>
        <h1 className="text-xl font-semibold">Let's start with the basics</h1>
        <p className="text-sm text-gray-600">
          In a few words, what do you need done?
        </p>
        <div className="mt-2">
          <Label className="mb-2">Title</Label>
          <Input
            placeholder="Eg: Help me with repairing AC"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-medium">When do you need this done?</h2>
        <ToggleGroup
          type="single"
          value={dateType}
          onValueChange={setDateType}
          className="flex justify-between gap-4 m-auto mt-2"
        >
          <ToggleGroupItem
            value="onDay"
            aria-label="On Day"
            className="flex flex-col items-center gap-1 px-4 py-3 border rounded-md h-24"
          >
            <CalendarDays className="w-5 h-5" />
            On Day
          </ToggleGroupItem>
          <ToggleGroupItem
            value="beforeDate"
            aria-label="Before Date"
            className="flex flex-col items-center gap-1 px-4 py-3 border rounded-md h-24"
          >
            <Clock className="w-5 h-5" />
            Before Date
          </ToggleGroupItem>
          <ToggleGroupItem
            value="flexible"
            aria-label="Flexible"
            className="flex flex-col items-center gap-1 px-4 py-3 border rounded-md h-24"
          >
            <Wand2 className="w-5 h-5" />
            I'm Flexible
          </ToggleGroupItem>
        </ToggleGroup>

        {dateType === "beforeDate" && (
          <div className="mt-4 flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow"
            />
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-medium">Preferred time of day?</h2>
        <ToggleGroup
          type="single"
          value={timeSlot}
          onValueChange={setTimeSlot}
          className="flex flex-wrap justify-center gap-4 m-auto mt-2"
        >
          <ToggleGroupItem
            value="morning"
            aria-label="Morning"
            className="flex flex-col items-center gap-1 px-4 py-2 border rounded-md h-24"
          >
            <Sun className="w-5 h-5" />
            <span>Morning</span>
            <p className="text-xs text-gray-500">Before 10am</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="midday"
            aria-label="Midday"
            className="flex flex-col items-center gap-1 px-4 py-2 border rounded-md h-24"
          >
            <SunMedium className="w-5 h-5" />
            <span>Midday</span>
            <p className="text-xs text-gray-500">10am - 2pm</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="afternoon"
            aria-label="Afternoon"
            className="flex flex-col items-center gap-1 px-4 py-2 border rounded-md h-24"
          >
            <Sunset className="w-5 h-5" />
            <span>Afternoon</span>
            <p className="text-xs text-gray-500">2pm - 6pm</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="evening"
            aria-label="Evening"
            className="flex flex-col items-center gap-1 px-4 py-2 border rounded-md h-24"
          >
            <Moon className="w-5 h-5" />
            <span>Evening</span>
            <p className="text-xs text-gray-500">After 6pm</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
