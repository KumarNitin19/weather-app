import React from "react";
import "./index.css";

type Props = {
  children: React.ReactNode;
};

export const CardWrapper: React.FC<Props> = ({ children }) => {
  return <div className="card-wrapper">{children}</div>;
};
