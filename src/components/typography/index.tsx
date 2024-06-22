import React from "react";
type Props = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";
  color?: string;
  fontSize?: string;
  children: React.ReactNode | string;
};

export const Typography: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};
