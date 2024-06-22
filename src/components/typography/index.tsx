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
};

export const Typography: React.FC<Props> = (props) => {
  //   const className = props.fontFamily || "montserrat";
  const getClassName = () => {
    let className = "";
    if (props.fontFamily) {
      className += `${props?.fontFamily} `;
    } else {
      className += "montserrat ";
    }
    if (props.variant) {
      className += `${props?.variant} `;
    } else {
      className += "body1 ";
    }
    return className;
  };
  return (
    <div
      className={`${
        props.className ? `${props.className} ` : ""
      }${getClassName()}`}
      {...props}
      style={{
        color: props?.color || "#000",
        fontSize: props?.fontSize || "16px",
      }}>
      {props.children}
    </div>
  );
};
