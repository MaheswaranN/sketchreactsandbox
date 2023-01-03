import React from "react";
import Rafter from "./Rafter";

const Ridgeboard = (props) => {
  return (
    <Rafter
      x={props.x}
      y={props.y + props.width / 2}
      x1={props.x + props.length}
      y1={props.y + props.width / 2}
      width={4}
      color={"#0000ff"}
      color1={"#7B7485"}
      color2={"#FF0000"}
    />
  );
};

export default Ridgeboard;
