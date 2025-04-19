import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-sm transition-all outline-none md:text-sm",
          "border-input bg-transparent",
          "dark:border-neutral-700 dark:bg-neutral-900 dark:text-white",
          "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground dark:file:text-white", // Themed file text
          // Selection
          "selection:bg-primary selection:text-primary-foreground dark:selection:bg-white dark:selection:text-black", // Themed selection
          // Focus Visible (assuming --ring variable is themed)
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:focus-visible:ring-offset-black",
          // Disabled State
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          // Invalid State (already handles dark mode)
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          // Passed ClassName
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
