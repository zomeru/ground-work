import React from "react";
import { CurrentStepCircle, StepCircle } from "./StepCircle";

interface SignUpFormProps {
  children: React.ReactNode;
  title: string;
  step: number;
  proceed: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  children,
  title,
  step,
  proceed,
}) => {
  return (
    <form
      spellCheck="false"
      className="bg-white rounded-2xl flex flex-col items-center w-[95%] md:w-[600px] mx-auto min-h-screen pb-8"
    >
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <h1 className="font-bold text-2xl md:text-3xl text-secondary mb-8">
          {title}
        </h1>

        <div className="flex justify-between w-[90%] sm:w-[70%]">
          {step === 1 && (
            <>
              <CurrentStepCircle num="1" desc="Sign Up" />
              <StepCircle num="2" desc="Basic Info" />
              <StepCircle num="3" desc="More Info" />
            </>
          )}

          {step === 2 && (
            <>
              <CurrentStepCircle num="1" desc="Sign Up" />
              <CurrentStepCircle num="2" desc="Basic Info" />
              <StepCircle num="3" desc="More Info" />
            </>
          )}

          {step === 3 && (
            <>
              <CurrentStepCircle num="1" desc="Sign Up" />
              <CurrentStepCircle num="2" desc="Basic Info" />
              <CurrentStepCircle num="3" desc="More Info" />
            </>
          )}
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] mt-8 flex flex-col">
        {children}

        <button
          onClick={proceed}
          className="bg-secondary mb-4 text-white rounded-lg text-center p-3 text-sm md:text-base primary-ring w-[100%] hover:bg-opacity-90 mt-16"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
