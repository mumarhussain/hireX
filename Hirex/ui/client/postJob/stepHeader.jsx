// import React from "react";
// import { cn } from "@/utils/cn";

// const steps = ["Basic Info", "Requirements", "Summary"];

// const StepHeader = ({ currentStep }) => {
//   return (
//     <div className="constainer mx-auto ">
//       <h2 className="text-4xl font-bold">Post Job</h2>
//       <div className="flex justify-between items-center my-8 ">
//         {steps.map((label, index) => {
//           const isActive = currentStep === index + 1;
//           const isCompleted = currentStep > index + 1;

//           return (
//             <div
//               key={label}
//               className="flex-1 flex flex-col items-center relative"
//             >
//               <div
// className={cn(
//   "w-8 h-8 rounded-full font-bold text-lg flex items-center justify-center mb-2 z-10",
//   isCompleted
//     ? "bg-themeColor text-black"
//     : isActive
//     ? "bg-black text-themeColor"
//     : "bg-black text-themeColor"
// )}
//               >
//                 {index + 1}
//               </div>

//               <span
//                 className={cn(
//                   "text-sm",
//                   isActive
//                     ? "text-black font-medium z-10"
//                     : isCompleted
//                     ? "text-black"
//                     : "text-gray-500"
//                 )}
//               >
//                 {label}
//               </span>

//               {index < steps.length - 1 && (
//                 <div
//                   className={cn(
//                     "absolute top-3 left-1/2 w-full h-0.5",
//                     isCompleted ? "bg-themeColor" : "bg-gray-500"
//                   )}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export { StepHeader };
import { cn } from "@/utils/cn";
import React from "react";

const steps = ["Basic Info", "Requirements", "Summary"];

const StepHeader = ({ currentStep }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold">Post Job</h2>
      <div className="flex justify-between items-center my-8">
        {steps.map((label, index) => {
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1;
          return (
            <div
              key={label}
              className="flex-1 flex flex-col items-center relative"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full font-bold text-lg flex items-center justify-center mb-2 z-10",
                  isCompleted
                    ? "bg-themeColor text-black"
                    : isActive
                    ? "bg-black text-themeColor"
                    : "bg-black text-themeColor"
                )}
              >
                {index + 1}
              </div>

              <span className="text-sm text-gray-500">{label}</span>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    isCompleted ? "bg-themeColor" : "bg-gray-500",
                    "absolute top-3 left-1/2 w-full h-0.5 "
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { StepHeader };
