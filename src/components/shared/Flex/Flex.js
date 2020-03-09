import React from "react";
import c from "./Flex.module.css";
import { justifyHelper, alignHelper } from "./utils";

export const Flex = ({ children, justify, align }) => {
   const styles = [c.flex];
   justifyHelper(styles, justify, c);
   alignHelper(styles, align, c);
   return <div className={styles.join(" ")}>{children}</div>;
};
