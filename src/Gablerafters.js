import React from "react";
import Rafter from "./Rafter";

const Gablerafters = (props) => {
  const drawCommonRafters = (
    commonrafterStartX,
    commonrafterStartY,
    ridgeStartX,
    ridgeStartY,
    ridgeEndX,
    ridgeEndY,
    color,
    color1,
    color2
  ) => {
    let numberOfItems = Math.abs(
      Math.round((ridgeEndX - ridgeStartX) / props.rafterSpacing)
    );
    const rafSpacing = (ridgeEndX - ridgeStartX) / numberOfItems;

    if (numberOfItems * rafSpacing + ridgeStartX > ridgeEndX) {
      numberOfItems--;
    }

    return [...Array(numberOfItems).keys()].map((key, index) => (
      <>
        <Rafter
          id={"CR-Ridge " + index}
          key={key + " " + index}
          x={commonrafterStartX + rafSpacing * (index + 1)}
          y={commonrafterStartY}
          x1={ridgeStartX + rafSpacing * (index + 1)}
          y1={ridgeStartY}
          width={4}
          color={color}
          color1={color1}
          color2={color2}
        />
      </>
    ));
  };

  const drawOutriggers = (
    rafterStartX,
    rafterStartY,
    rafterEndX,
    rafterEndY,
    OutriggerSpacing,
    rafterSpacing,
    color,
    color1,
    color2
  ) => {
    let numberOfItems = Math.abs(
      Math.round((rafterEndY - rafterStartY) / OutriggerSpacing)
    );
    const OutrigSpacing = (rafterEndY - rafterStartY) / numberOfItems;

    if (numberOfItems * OutrigSpacing + rafterStartY > rafterEndY) {
      numberOfItems--;
    }

    return [...Array(numberOfItems).keys()].map((key, index) => (
      <>
        <Rafter
          id={"Outrig " + index}
          key={key + " " + index}
          x={rafterStartX}
          y={rafterStartY + OutrigSpacing * (index + 1)}
          x1={rafterStartX + rafterSpacing}
          y1={rafterStartY + OutrigSpacing * (index + 1)}
          width={4}
          color={color}
          color1={color1}
          color2={color2}
        />
      </>
    ));
  };

  return (
    <>
      {/* Common Rafters - Top - Start */}
      <Rafter
        id={"CR-Ridge-0 "}
        key={"CR-Ridge-0 "}
        x={props.x + 2}
        y={props.y}
        x1={props.x + 2}
        y1={props.y + props.width / 2}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      {/* Common Rafters - Top */}
      {drawCommonRafters(
        props.x,
        props.y,
        props.x,
        props.y + props.width / 2,
        props.x + props.length,
        props.y + props.width,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {/* Common Rafters - Top - End */}
      <Rafter
        id={"CR-Ridge-1 "}
        key={"CR-Ridge-1 "}
        x={props.x + props.length - 2}
        y={props.y}
        x1={props.x + props.length - 2}
        y1={props.y + props.width / 2}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      {/* {Draw outriggers / ladders at the end of the rafters - near Gable} */}
      {drawOutriggers(
        props.x,
        props.y,
        props.x,
        props.y + props.width / 2,
        20,
        props.rafterSpacing,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {drawOutriggers(
        props.x,
        props.y + props.width / 2,
        props.x,
        props.y + props.width,
        20,
        props.rafterSpacing,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {/* Common Rafters - Bottom - Start */}
      <Rafter
        id={"CR-Ridge-2 "}
        key={"CR-Ridge-2 "}
        x={props.x + 2}
        y={props.y + props.width / 2}
        x1={props.x + 2}
        y1={props.y + props.width}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      {/* Common Rafters - Bottom */}
      {drawCommonRafters(
        props.x,
        props.y + props.width / 2,
        props.x,
        props.y + props.width,
        props.x + props.length,
        props.y + props.width,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {/* Common Rafters - Bottom - End */}
      <Rafter
        id={"CR-Ridge-3 "}
        key={"CR-Ridge-3 "}
        x={props.x + props.length - 2}
        y={props.y + props.width / 2}
        x1={props.x + props.length - 2}
        y1={props.y + props.width}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      {/* {Draw outriggers / ladders at the end of the rafters - near Gable} */}
      {drawOutriggers(
        props.x + props.length - props.rafterSpacing,
        props.y,
        props.x + props.length,
        props.y + props.width / 2,
        20,
        props.rafterSpacing,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {drawOutriggers(
        props.x + props.length - props.rafterSpacing,
        props.y + props.width / 2,
        props.x + props.length,
        props.y + props.width,
        20,
        props.rafterSpacing,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
    </>
  );
};

export default Gablerafters;
