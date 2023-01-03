import React from "react";
import Rafter from "./Rafter";

const Ridgerafter = (props) => {
  return (
    <Rafter
      x={props.x + props.width / 2}
      y={props.y + props.width / 2}
      x1={props.x + props.length - props.width / 2}
      y1={props.y + props.width / 2}
      width={4}
      color={"#0000ff"}
      color1={"#7B7485"}
      color2={"#FF0000"}
    />
  );
};

export default Ridgerafter;
