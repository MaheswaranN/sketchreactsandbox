import React from "react";
import Rafter from "./Rafter";

const Hiprafter = (props) => {
  return (
    <>
      {/* Top Left */}
      <Rafter
        x={props.x}
        y={props.y}
        x1={props.x + props.width / 2}
        y1={props.y + props.width / 2}
        width={4}
        color={"#ffcc66"}
        color1={"#CDA291"}
        color2={"#402E32"}
      />
      {/* Bottom Left */}
      <Rafter
        x={props.x}
        y={props.y + props.width}
        x1={props.x + props.width / 2}
        y1={props.y + props.width / 2}
        width={4}
        color={"#ffcc66"}
        color1={"#CDA291"}
        color2={"#402E32"}
      />
      {/* Top Right */}
      <Rafter
        x={props.x + props.length}
        y={props.y}
        x1={props.x + props.length - props.width / 2}
        y1={props.y + props.width / 2}
        width={4}
        color={"#ffcc66"}
        color1={"#CDA291"}
        color2={"#402E32"}
      />
      {/* Bottom Right */}
      <Rafter
        x={props.x + props.length}
        y={props.y + props.width}
        x1={props.x + props.length - props.width / 2}
        y1={props.y + props.width / 2}
        width={4}
        color={"#ffcc66"}
        color1={"#CDA291"}
        color2={"#402E32"}
      />
    </>
  );
};

export default Hiprafter;
