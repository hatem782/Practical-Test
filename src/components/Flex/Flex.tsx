import React, { ReactNode } from "react";
import styles from "./Flex.module.scss";

type FlexProps = {
  flex?:
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "start"
    | "end"
    | "stretch";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const flexes: Record<string, string> = {
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  start: "flex-start",
  end: "flex-end",
  stretch: "stretch",
};

const Flex = (props: FlexProps) => {
  const {
    flex = "center",
    className = "",
    children,
    onClick = () => {},
  } = props;
  const justifyContent = flexes[flex];
  return (
    <div
      style={{ justifyContent }}
      onClick={onClick}
      className={`${styles.main} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
