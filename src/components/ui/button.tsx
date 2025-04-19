import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles: Apply common text/focus styles. Add base text colors for variants that don't explicitly set them (like ghost).
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:focus-visible:ring-offset-black aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Default: Primary action button
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 " + // Original light
          "dark:bg-white dark:text-black dark:hover:bg-neutral-200", // Dark override (white bg, black text)

        // Destructive: Keep existing, generally red doesn't change drastically
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 " + // Original light (assuming foreground is white/light)
          "dark:bg-destructive/80 dark:hover:bg-destructive/70 dark:text-white", // Darker red, ensure white text

        // Outline: Standard border button
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground " + // Original light (uses variables)
          "dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800", // Dark override (transparent bg, white text, gray border/hover)

        // Secondary: Less prominent button
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 " + // Original light (uses variables)
          "dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700", // Dark override (gray bg, white text)

        // Ghost: No background/border until hover
        ghost:
          "text-black hover:bg-accent hover:text-accent-foreground " + // Original light (added base text black)
          "dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white", // Dark override (white text, gray hover)

        // Link: Text-only link style
        link:
          "text-primary underline-offset-4 hover:underline " + // Original light
          "dark:text-white dark:hover:underline", // Dark override (white text)
      },
      size: {
        // Sizes remain the same, but ensure padding handles icons correctly
        default: "h-9 px-4 py-2 has-[>svg:not(.absolute)]:px-3", // Adjusted icon padding logic slightly
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg:not(.absolute)]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg:not(.absolute)]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
