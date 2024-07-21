import React from "react";
import "./index.css";
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
  children: React.ReactNode | string;
  fontFamily?: "oswald" | "montserrat";
  className?: string;
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textAlign?: "start" | "center" | "auto";
};

export const Typography: React.FC<Props> = (props) => {
  const {
    fontFamily = "montserrat",
    variant = "body1",
    className = "",
    color = "#000",
    fontWeight = "400",
    textAlign = "start",
  } = props;
  const getClassName = () => {
    let className = "";
    className += `${fontFamily} `;
    className += `${variant} `;
    className += `font-${fontWeight} `;
    className += `text-${textAlign}`;
    return className;
  };
  return (
    <div
      className={`${className ? `${className} ` : ""}${getClassName()}`}
      {...props}
      style={{
        color: color || "#000",
      }}>
      {props.children}
    </div>
  );
};
