import React from "react";
import Rafter from "./Rafter";

const Commonrafter = (props) => {
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

    if (numberOfItems * rafSpacing + ridgeStartX >= ridgeEndX) {
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

  return (
    <>
      {/* Hip - Top Left - Common Rafter @ Ridge Top Left */}
      <Rafter
        x={props.x + props.width / 2}
        y={props.y}
        width={4}
        x1={props.x + props.width / 2}
        y1={props.y + props.width / 2}
        color={"#00cc66"}
        color1={"#E4E7D4"}
        color2={"#747E4A"}
      />
      {/* Hip - Bottom Left - Common Rafter @ Ridge Bottom Left */}
      <Rafter
        x={props.x + props.width / 2}
        y={props.y + props.width / 2}
        width={4}
        x1={props.x + props.width / 2}
        y1={props.y + props.width}
        color={"#00cc66"}
        color1={"#E4E7D4"}
        color2={"#747E4A"}
      />
      {/* Hip - Left Middle - Common Rafter @ Ridge Left */}
      <Rafter
        x={props.x}
        y={props.y + props.width / 2}
        width={4}
        x1={props.x + props.width / 2}
        y1={props.y + props.width / 2}
        color={"#00cc66"}
        color1={"#E4E7D4"}
        color2={"#747E4A"}
      />
      {/* Hip - Top Right - Common Rafter @ Ridge Top Right */}
      <Rafter
        x={props.x + props.length - props.width / 2}
        y={props.y}
        width={4}
        x1={props.x + props.length - props.width / 2}
        y1={props.y + props.width / 2}
        color={"#00cc66"}
        color1={"#E4E7D4"}
        color2={"#747E4A"}
      />
      {/* Hip - Bottom Right - Common Rafter @ Ridge Bottom Right */}
      <Rafter
        x={props.x + props.length - props.width / 2}
        y={props.y + props.width / 2}
        width={4}
        x1={props.x + props.length - props.width / 2}
        y1={props.y + props.width}
        color={"#00cc66"}
        color1={"#E4E7D4"}
        color2={"#747E4A"}
      />
      {/* Hip - Right Middle - Common Rafter @ Ridge Ridge */}
      <Rafter
        x={props.x + props.length - props.width / 2}
        y={props.y + props.width / 2}
        width={4}
        x1={props.x + props.length}
        y1={props.y + props.width / 2}
        color={"#00cc66"}
        color1={"#E4E7D4"}
        color2={"#747E4A"}
      />
      {/* Common Rafters - Top */}
      {drawCommonRafters(
        props.x + props.width / 2,
        props.y,
        props.x + props.width / 2,
        props.y + props.width / 2,
        props.x + props.length - props.width / 2,
        props.y + props.width / 2,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {/* Common Rafters - Bottom */}
      {drawCommonRafters(
        props.x + props.width / 2,
        props.y + props.width,
        props.x + props.width / 2,
        props.y + props.width / 2,
        props.x + props.length - props.width / 2,
        props.y + props.width / 2,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
    </>
  );
};

export default Commonrafter;
