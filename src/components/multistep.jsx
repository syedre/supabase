import React, { useState } from "react";

const step = [{ label: "Profile" }, { label: "Address" }, { label: "Final" }];
const abc = [1, 2, 3, 4, 5];
console.log(abc, "------", ...abc);
console.log(typeof abc, "----", typeof {});

const bb = /^[0-9]+$/;
const res = bb.test("2324");
console.log(res);

const MultiStep = () => {
  const [stepNumber, setStepNumber] = useState(1);
  return (
    <>
      <div className="flex  gap-50">
        {step?.map((i, index) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center ">
                <div
                  className={`h-8 w-8 border ${index < stepNumber ? "bg-green-400" : "bg-zinc-300"} border-amber-50 rounded-full flex items-center justify-center relative z-10  transition-colors duration-350  `}
                >
                  {index + 1}
                </div>
                {index + 1 < 3 && (
                  <div
                    className={`w-66 h-1 ${index + 1 < stepNumber ? "bg-green-400" : "bg-zinc-300"} absolute transition-colors duration-350 ease-linear `}
                  ></div>
                )}
              </div>
              <div className=" text-bermuda">{i?.label}</div>
            </div>
          );
        })}
        <br />
      </div>
      {step[stepNumber - 1]?.label}
      <button onClick={() => setStepNumber(stepNumber - 1)}>Back</button>
      <button onClick={() => setStepNumber(stepNumber + 1)}>Next</button>
    </>
  );
};
export default MultiStep;
