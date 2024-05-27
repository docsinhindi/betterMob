"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormField } from "./form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { error } = useFormField();

    return (
      <input
        type={type}
        className={cn(
          "flex w-full border border-input px-4 py-3 text-base font-normal file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:bg-primary/10 focus-visible:text-primary disabled:cursor-not-allowed disabled:opacity-50",
          className,
          error &&
            "bg-red-100 border border-text-red-500 focus-visible:text-dark-blue focus-visible:ring-1 focus-visible:ring-text-red-500 focus-visible:bg-red-100 placeholder:text-dark-blue"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
