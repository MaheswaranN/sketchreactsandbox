import React from "react";
import HipRoof from "./Hiproof";
import GableRoof from "./Gableroof";

const Roof = (props) => {
  const callHipRoof = () => {
    return (
      <>
        <HipRoof
          x={props.x}
          y={props.y}
          length={props.length}
          width={props.width}
          color={props.color}
          overhang={props.overhang}
          rafterSpacing={props.rafterSpacing}
        />
      </>
    );
  };
  const callGableRoof = () => {
    return (
      <>
        <GableRoof
          x={props.x}
          y={props.y}
          length={props.length}
          width={props.width}
          color={props.color}
          overhang={props.overhang}
          rafterSpacing={props.rafterSpacing}
        />
      </>
    );
  };
  return (
    <>
      {props.roofType === "HipRoof" && callHipRoof()}
      {props.roofType === "GableRoof" && callGableRoof()}
    </>
  );
};

export default Roof;
