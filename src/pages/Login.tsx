import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { ChevronDownIcon, MinusIcon, PhoneIcon } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OTPInput, SlotProps } from "input-otp";

export const Login = () => {
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const [getOtp, setGetOtp] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <div className=" flex items-center justify-center h-[calc(100vh-16rem)] ">
      <div className="w-lg m-auto flex flex-col items-center gap-4 border rounded-md shadow-md py-16 px-0 z-51">
        <h1 className="text-3xl font-bold">Login</h1>
        {!getOtp ? (
          <div className="w-xs" dir="ltr">
            <RPNInput.default
              className="flex rounded-md shadow-xs"
              international
              flagComponent={FlagComponent}
              countrySelectComponent={CountrySelect}
              inputComponent={PhoneInput}
              placeholder="Enter phone number"
              value={value}
              onChange={(newValue) => setValue(newValue ?? "")}
            />
          </div>
        ) : (
          <div className="pb-2">
            <h1>Hey,</h1>
            <p className="text-sm">
              We've sent a 6-digit code your email. Please enter it below.
            </p>
          </div>
        )}
        {getOtp ? (
          <div>
            <Label className="text-xs">Enter your OTP</Label>
            <OTPInput
              containerClassName="flex items-center gap-3 has-disabled:opacity-50"
              maxLength={6}
              value={otp}
              onChange={(otp) => setOtp(otp)}
              render={({ slots }) => (
                <>
                  <div className="flex">
                    {slots.slice(0, 3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                  <div className="text-muted-foreground/80">
                    <MinusIcon size={16} aria-hidden="true" />
                  </div>
                  <div className="flex">
                    {slots.slice(3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
            <div>
              <Button
                variant={"outline"}
                className="w-full mt-4"
                onClick={() => {
                  setSubmit(true);
                  // TODO-I: Add OTP verification logic and REDIRECT to home page
                }}
              >
                {submit ? "Verifying..." : "Verify"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-xs">
            <Button
              variant={"outline"}
              className="w-full"
              onClick={() => {
                setGetOtp(true);
                // TODO-I: Add OTP generation logic and send it to the user
              }}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "border-input bg-background text-foreground relative -ms-px flex size-9 items-center justify-center border font-medium shadow-xs transition-[color,box-shadow] first:ms-0 first:rounded-s-md last:rounded-e-md",
        { "border-ring ring-ring/50 z-10 ring-[3px]": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}

const PhoneInput = ({ className, ...props }: React.ComponentProps<"input">) => {
  return (
    <Input
      data-slot="phone-input"
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10",
        className
      )}
      {...props}
    />
  );
};

PhoneInput.displayName = "PhoneInput";

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: { label: string; value: RPNInput.Country | undefined }[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country);
  };

  return (
    <div className="border-input bg-background text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative inline-flex items-center self-stretch rounded-s-md border py-2 ps-3 pe-2 transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDownIcon size={16} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <PhoneIcon size={16} aria-hidden="true" />
      )}
    </span>
  );
};
