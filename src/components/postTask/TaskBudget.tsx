import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";

const TaskBudget = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Suggest your budget</h1>
      <div>
        <div>
          <NumberField
            defaultValue={99}
            formatOptions={{
              style: "currency",
              currency: "INR",
              currencySign: "accounting",
            }}
          >
            <div className="*:not-first:mt-2">
              <Label className="text-foreground text-sm font-medium">
                What is your budget?
              </Label>
              <Group className="border-input doutline-none data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] data-disabled:opacity-50 data-focus-within:ring-[3px]">
                <Input className="bg-background text-foreground flex-1 px-3 py-2 tabular-nums" />
                <div className="flex h-[calc(100%+2px)] flex-col">
                  <Button
                    slot="increment"
                    className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronUpIcon size={12} aria-hidden="true" />
                  </Button>
                  <Button
                    slot="decrement"
                    className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronDownIcon size={12} aria-hidden="true" />
                  </Button>
                </div>
              </Group>
              <p
                className="text-muted-foreground mt-2 text-xs"
                role="region"
                aria-live="polite"
              >
                You can always negotiate the final price.
              </p>
            </div>
          </NumberField>
        </div>
      </div>
    </div>
  );
};

export default TaskBudget;
