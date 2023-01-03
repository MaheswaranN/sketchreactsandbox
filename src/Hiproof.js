import React from "react";
import { Group, Rect } from "react-konva";
import Commonrafter from "./Commonrafter";
import GableDormer from "./Gabledormer";
import Hipdormer from "./Hipdormer";
import Hiprafter from "./Hiprafter";
import Jackrafter from "./Jackrafter";
import Ridgerafter from "./Ridgerafter";
import Roofdeck from "./Roofdeck";

const Hiproof = (props) => {
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
      <Hiprafter
        x={roof_X}
        y={roof_Y}
        width={roof_Width}
        length={roof_Length}
      />
      <Ridgerafter
        x={roof_X}
        y={roof_Y}
        width={roof_Width}
        length={roof_Length}
      />
      <Commonrafter
        x={roof_X}
        y={roof_Y}
        width={roof_Width}
        length={roof_Length}
        rafterSpacing={props.rafterSpacing}
      />
      <Jackrafter
        x={roof_X}
        y={roof_Y}
        width={roof_Width}
        length={roof_Length}
        rafterSpacing={props.rafterSpacing}
      />
      <GableDormer
        x={roof_Length / 2}
        y={roof_Width / 2}
        dtl={150}
        dbl={80}
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
      {/* <Roofdeck
        tlX={roof_X}
        tlY={roof_Y}
        trX={roof_X + roof_Length}
        trY={roof_Y}
        brX={roof_X + roof_Length - roof_Width / 2}
        brY={roof_Y + roof_Width / 2}
        blX={roof_X + roof_Width / 2}
        blY={roof_Y + roof_Width / 2}
      />
      <Roofdeck
        tlX={roof_X}
        tlY={roof_Y}
        trX={roof_X}
        trY={roof_Y}
        brX={roof_X + roof_Width / 2}
        brY={roof_Y + roof_Width / 2}
        blX={roof_X}
        blY={roof_Y + roof_Width}
      />
      <Roofdeck
        tlX={roof_X + roof_Width / 2}
        tlY={roof_Y + roof_Width / 2}
        trX={roof_X + roof_Length - roof_Width / 2}
        trY={roof_Y + roof_Width / 2}
        brX={roof_X + roof_Length}
        brY={roof_Y + roof_Width}
        blX={roof_X}
        blY={roof_Y + roof_Width}
      />
      <Roofdeck
        tlX={roof_X + roof_Length}
        tlY={roof_Y}
        trX={roof_X + roof_Length}
        trY={roof_Y}
        brX={roof_X + roof_Length}
        brY={roof_Y + roof_Width}
        blX={roof_X + roof_Length - roof_Width / 2}
        blY={roof_Y + roof_Width / 2}
      /> */}
    </>
  );
};

export default Hiproof;
