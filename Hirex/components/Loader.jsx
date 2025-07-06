import React from "react";
import { Loader2 } from "lucide-react";

const Loader = ({ size = 24 }) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2
        size={size}
        className="animate-spin"
        style={{ color: "#AED264" }}
      />
    </div>
  );
};

export { Loader };
