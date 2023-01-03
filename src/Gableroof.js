import React from "react";
import { Rect } from "react-konva";
import RidgeBoard from "./Ridgeboard";
import Gablerafters from "./Gablerafters";
import GableDormer from "./Gabledormer";
import Hipdormer from "./Hipdormer";

const Gableroof = (props) => {
  const roof_X = props.x - props.overhang / 2;
  const roof_Y = props.y - props.overhang / 2;
  const roof_Width = props.width + props.overhang;
  const roof_Length = props.length + props.overhang;

  return (
    <>
      {/* actual roof (according with outer wall size) */}
      <Rect
        // ref={props.roofRef}
        width={props.length - props.overhang}
        height={props.width - props.overhang}
        x={props.x + props.overhang / 2}
        y={props.y + props.overhang / 2}
        fill={props.color}
        stroke="rgba(0,0,0,0.1)"
      />
      {/* Overall roof structure inclusive off overhang level */}
      <Rect
        ref={props.roofRef}
        width={props.length + props.overhang}
        height={props.width + props.overhang}
        x={props.x} // - props.overhang / 2}
        y={props.y} // - props.overhang / 2}
        stroke="rgba(0,0,0,0.2)"
      />
      <RidgeBoard
        x={roof_X}
        y={roof_Y}
        width={roof_Width}
        length={roof_Length}
      />
      <Gablerafters
        x={props.x}
        y={props.y}
        width={props.width}
        length={props.length}
        rafterSpacing={props.rafterSpacing}
      />
      <GableDormer
        x={roof_Length / 2}
        y={roof_Width / 2}
        dtl={150} //ridge length
        dbl={60}
        dw={100}
        drafSpacing={15}
      />
      <Hipdormer
        x={roof_Length / 4}
        y={roof_Width / 2}
        dtl={150}
        dbl={80}
        dw={100}
        drafSpacing={15}
      />
    </>
  );
};

export default Gableroof;
