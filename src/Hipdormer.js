import React from "react";
import Rafter from "./Rafter";

const Hipdormer = (props) => {
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
      Math.round((hipEndY - hipStartY) / props.drafSpacing)
    );

    const rafSpacing = (hipEndY - hipStartY) / numberOfItems;

    if (numberOfItems * rafSpacing + hipStartY > hipEndY) {
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

  const drawRoofJackRafters = (hipStartX, hipStartY, hipEndX, hipEndY) => {
    let adj = hipEndY - hipStartY;
    let opp = hipStartX - hipEndX;

    let angleBeta = Math.atan(opp / adj);

    let numberOfItems = Math.abs(
      Math.round((hipEndY - hipStartY) / props.drafSpacing)
    );

    const rafSpacing = (hipEndY - hipStartY) / numberOfItems;

    if (numberOfItems * rafSpacing + hipStartY > hipEndY) {
      numberOfItems--;
    }

    return [...Array(numberOfItems).keys()].map((key, index) => (
      <>
        <Rafter
          id={"Test " + index}
          key={key}
          x={hipStartX}
          y={hipStartY + rafSpacing * (index + 1)}
          x1={hipStartX - rafSpacing * (index + 1) * Math.tan(angleBeta)}
          y1={hipStartY + rafSpacing * (index + 1)}
          width={4}
          color={"#ff3300"}
          color1={"#BEA69F"}
          color2={"#006CF1"}
        />
      </>
    ));
  };
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
      Math.round((ridgeEndY - ridgeStartY) / props.drafSpacing)
    );
    const rafSpacing = (ridgeEndY - ridgeStartY) / numberOfItems;

    if (numberOfItems * rafSpacing + ridgeStartY > ridgeEndY) {
      numberOfItems--;
    }

    return [...Array(numberOfItems).keys()].map((key, index) => (
      <>
        <Rafter
          id={"Dormer-CR- " + index}
          key={key + " " + index}
          x={commonrafterStartX}
          y={commonrafterStartY + rafSpacing * (index + 1)}
          x1={ridgeStartX}
          y1={ridgeStartY + rafSpacing * (index + 1)}
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
      <Rafter
        id={"DormerTopLength-1 "}
        key={"DormerTopLength-1 "}
        x={props.x + props.dw / 2}
        y={props.y}
        x1={props.x + props.dw / 2}
        y1={props.y + props.dtl - props.dw / 2}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      <Rafter
        id={"DormerWidth-1 "}
        key={"DormerWidth-1 "}
        x={props.x}
        y={props.y + props.dtl}
        x1={props.x + props.dw}
        y1={props.y + props.dtl}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      <Rafter
        id={"DormerBottomRafter-1 "}
        key={"DormerBottomRafter-1 "}
        x={props.x}
        y={props.y + props.dtl}
        x1={props.x}
        y1={props.y + props.dtl - props.dbl}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      <Rafter
        id={"DormerBottomRafter-2 "}
        key={"DormerBottomRafter-2 "}
        x={props.x + props.dw}
        y={props.y + props.dtl}
        x1={props.x + props.dw}
        y1={props.y + props.dtl - props.dbl}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      <Rafter
        id={"DormerHipRafter-1 "}
        key={"DormerHipRafter-1 "}
        x={props.x}
        y={props.y + props.dtl - props.dbl}
        x1={props.x + props.dw / 2}
        y1={props.y}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      <Rafter
        id={"DormerHipRafter-2 "}
        key={"DormerHipRafter-2 "}
        x={props.x + props.dw}
        y={props.y + props.dtl - props.dbl}
        x1={props.x + props.dw / 2}
        y1={props.y}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      {/* {Bottom Hip Rafter} */}
      <Rafter
        id={"DormerHipRafter-3 "}
        key={"DormerHipRafter-3 "}
        x={props.x}
        y={props.y + props.dtl}
        x1={props.x + props.dw / 2}
        y1={props.y + props.dtl - props.dw / 2}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      <Rafter
        id={"DormerHipRafter-4 "}
        key={"DormerHipRafter-4 "}
        x={props.x + props.dw}
        y={props.y + props.dtl}
        x1={props.x + props.dw / 2}
        y1={props.y + props.dtl - props.dw / 2}
        width={4}
        color={"#ff66cc"}
        color1={"#77B100"}
        color2={"#00B4FF"}
      />
      {drawCommonRafters(
        props.x,
        props.y + props.dtl - props.dbl,
        props.x + props.dw / 2,
        props.y + props.dtl - props.dbl,
        props.x + props.dw / 2,
        props.y + props.dtl - props.dw / 2,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {drawCommonRafters(
        props.x + props.dw / 2,
        props.y + props.dtl - props.dbl,
        props.x + props.dw,
        props.y + props.dtl - props.dbl,
        props.x + props.dw,
        props.y + props.dtl - props.dw / 2,
        "#ff66cc",
        "#77B100",
        "#00B4FF"
      )}
      {drawRoofJackRafters(
        props.x + props.dw / 2,
        props.y,
        props.x,
        props.y + props.dtl - props.dbl
      )}
      {drawRoofJackRafters(
        props.x + props.dw / 2,
        props.y,
        props.x + props.dw,
        props.y + props.dtl - props.dbl
      )}
      {drawJackRafters(
        props.x,
        props.y + props.dtl,
        props.x + props.dw / 2,
        props.y + props.dtl - props.dw / 2
      )}
      {drawJackRafters(
        props.x + props.dw,
        props.y + props.dtl,
        props.x + props.dw / 2,
        props.y + props.dtl - props.dw / 2
      )}
    </>
  );
};

export default Hipdormer;
