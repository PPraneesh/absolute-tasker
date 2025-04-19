import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
export const TaskLocation = ({
  onDataChange,
}: {
  onDataChange: (data: { isRemovals: string | undefined }) => void;
}) => {
  const [isRemote, setIsRemote] = useState<string | undefined>(undefined);
  useEffect(() => {
    onDataChange({ isRemovals: isRemote });
  }, [isRemote, onDataChange]);
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-center">Tell us where</h1>
      <div className="flex flex-col gap-6">
        <ToggleGroup
          type="single"
          value={isRemote}
          onValueChange={setIsRemote}
          className="flex justify-between gap-4 m-auto mt-2"
        >
          <ToggleGroupItem
            value="onDay"
            aria-label="On Day"
            className="flex flex-col items-center gap-3 px-4 py-2 border rounded-md h-36"
          >
            <h1>In- Person</h1>
            <p className="whitespace-break-spaces">
              Select if u need the Tasker physically available
            </p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="beforeDate"
            aria-label="Before Date"
            className="flex flex-col items-center gap-3 px-4 py-3 border rounded-md h-36"
          >
            <h1>Remote</h1>
            <p className="whitespace-break-spaces">
              Select if u need the Tasker Can Remotely available
            </p>
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="flex flex-col gap-2">
          <h1>Where do you need this done?</h1>
          <div className="*:not-first:mt-2">
            <div className="relative">
              <Input
                className="peer ps-9"
                placeholder="Pick a location"
                type="text"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <MapPin size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
