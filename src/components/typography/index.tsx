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
  fontFamily: "oswald" | "montserrat";
  className?: string;
  fontWeight:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
};

export const Typography: React.FC<Props> = (props) => {
  const {
    fontFamily = "montserrat",
    fontSize = "16px",
    variant = "body1",
    className = "",
    color = "#000",
  } = props;
  const getClassName = () => {
    let className = "";
    className += `${fontFamily} `;
    className += `${variant} `;
    return className;
  };
  return (
    <div
      className={`${className ? `${className} ` : ""}${getClassName()}`}
      {...props}
      style={{
        color: color || "#000",
        fontSize: fontSize || "16px",
      }}>
      {props.children}
    </div>
  );
};
