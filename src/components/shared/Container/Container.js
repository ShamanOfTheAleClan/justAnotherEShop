import React from "react";
import c from "./Container.module.css";

const Container = ({ children, className }) => {
   const { container } = c;
   const styles = [className, container];
   return <div className={styles.join(" ")}>{children}</div>;
};

export default Container;
