import React from "react";
import { Shape } from "react-konva";
import useImage from "use-image";
import woodpattern1 from "./woodpattern5.jpeg";

const Roofdeck = (props) => {
  const [img] = useImage(woodpattern1);
  return (
    <>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(props.tlX, props.tlY);
          context.lineTo(props.trX, props.trY);
          context.lineTo(props.brX, props.brY);
          context.lineTo(props.blX, props.blY);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fillPatternImage={img}
        opacity={0.5}
      />
    </>
  );
};

export default Roofdeck;
