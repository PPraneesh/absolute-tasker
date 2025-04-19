import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { stepsData } from "@/lib/data/stepsData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export const PostTask = () => {
  const steps: number[] = [];
  stepsData.map((step) => steps.push(step.id - 1));
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const CurrentComponent = stepsData[currentStep].component;
  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      toast("Task to be submitted");
      return;
    }
    console.log("Collected Data:", formData);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };
  // TODO:
  return (
    <div className="mx-auto max-w-xl space-y-8 px-4">
      <h1 className="text-center text-2xl pt-6">Post a task</h1>
      <div className="mt-8">
        <Stepper defaultValue={0} value={currentStep}>
          {steps.map((step, index) => (
            <StepperItem key={step} step={step} className="not-last:flex-1">
              <StepperTrigger>
                <StepperIndicator className="data-[state=active]:border-black data-[state=complete]:bg-black data-[state=complete]:border-black size-4 data-[state=active]:border-2 data-[state=active]:bg-transparent [&_span]:sr-only [&_svg]:size-3 bg-gray-400 border-gray-400" />
              </StepperTrigger>
              {index < steps.length - 1 && (
                <StepperSeparator
                  className={`border-2 ${
                    currentStep > index
                      ? "bg-black border-black"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </StepperItem>
          ))}
        </Stepper>
      </div>
      <div>{<CurrentComponent onDataChange={setFormData} />}</div>

      <div className="flex justify-between mt-6 px-4">
        {currentStep > 0 && (
          <Button
            onClick={handleBack}
            variant={"outline"}
            className="px-4 py-2 "
          >
            Back
          </Button>
        )}

        <div className="ml-auto">
          <Button onClick={handleNext} className="px-4 py-2 ">
            {currentStep < steps.length - 1 ? "Next" : "Finish"}
          </Button>
        </div>
      </div>
    </div>
  );
};
