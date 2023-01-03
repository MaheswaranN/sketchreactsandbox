import React from "react";
import Rafter from "./Rafter";

const Jackrafter = (props) => {
  const drawJackRafters = (hipStartX, hipStartY, hipEndX, hipEndY) => {
    let YlowToHigh = 1;
    let XlowToHigh = 1;
    if (hipStartX > hipEndX) {
      XlowToHigh = -1;
    }
    if (hipStartY > hipEndY) {
      YlowToHigh = -1;
    }

    let numberOfItems = Math.abs(
      Math.round((hipEndY - hipStartY) / props.rafterSpacing)
    );

    const rafSpacing = (hipEndY - hipStartY) / numberOfItems;

    if (numberOfItems * rafSpacing + hipStartY >= hipEndY) {
      numberOfItems--;
    }

    return [...Array(numberOfItems).keys()].map((key, index) => (
      <>
        <Rafter
          id={"Test " + index}
          key={key}
          x={hipStartX}
          y={hipStartY + rafSpacing * (index + 1)}
          x1={hipStartX + rafSpacing * (index + 1) * YlowToHigh * XlowToHigh}
          y1={hipStartY + rafSpacing * (index + 1)}
          width={4}
          color={"#ff3300"}
          color1={"#BEA69F"}
          color2={"#006CF1"}
        />

        <Rafter
          id={"Test1 " + index}
          key={key + "Test 1 "}
          x={hipStartX + rafSpacing * (index + 1) * YlowToHigh * XlowToHigh}
          y={hipStartY}
          x1={hipStartX + rafSpacing * (index + 1) * YlowToHigh * XlowToHigh}
          y1={hipStartY + rafSpacing * (index + 1)}
          width={4}
          color={"#ff3300"}
          color1={"#BEA69F"}
          color2={"#006CF1"}
        />
      </>
    ));
  };

  return (
    <>
      {/* Top Left Hip - Jack Rafter */}
      {drawJackRafters(
        props.x,
        props.y,
        props.x + props.width / 2,
        props.y + props.width / 2
      )}
      {/* Bottom Left Hip - Jack Rafter */}
      {drawJackRafters(
        props.x,
        props.y + props.width,
        props.x + props.width / 2,
        props.y + props.width / 2
      )}
      {/* Top Right Hip - Jack Rafter */}
      {drawJackRafters(
        props.x + props.length,
        props.y,
        props.x + props.length - props.width / 2,
        props.y + props.width / 2
      )}
      {/* Bottom Right Hip - Jack Rafter */}
      {drawJackRafters(
        props.x + props.length,
        props.y + props.width,
        props.x + props.length - props.width / 2,
        props.y + props.width / 2
      )}
    </>
  );
};

export default Jackrafter;
