import React from "react";
import "./index.css";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const CardWrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="card-wrapper" {...props}>
      {children}
    </div>
  );
};
