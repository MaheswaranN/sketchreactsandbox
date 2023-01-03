import React from "react";
import { Shape } from "react-konva";
import useImage from "use-image";
import woodpattern1 from "./woodpattern4.jpeg";

const Rafter = (props) => {
  let x1 = props.x;
  let y1 = props.y;
  let x2 = props.x1;
  let y2 = props.y1;

  let dx = x1 - x2;
  let dx2 = x2 - x1;
  let dy = y1 - y2;
  let dy2 = y2 - y1;

  let dist = Math.sqrt(dx * dx + dy * dy);
  dx = dx / dist;
  dy = dy / dist;
  dx2 = dx2 / dist;
  dy2 = dy2 / dist;

  let x3 = x1 + (props.width / 2) * dy;
  let y3 = y1 - (props.width / 2) * dx;
  let x4 = x1 - (props.width / 2) * dy;
  let y4 = y1 + (props.width / 2) * dx;

  let x5 = x2 + (props.width / 2) * dy2;
  let y5 = y2 - (props.width / 2) * dx2;
  let x6 = x2 - (props.width / 2) * dy2;
  let y6 = y2 + (props.width / 2) * dx2;

  const [img] = useImage(woodpattern1);

  return (
    <>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(x3, y3);
          context.lineTo(x4, y4);
          context.lineTo(x5, y5);
          context.lineTo(x6, y6);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        // for plain color apply
        // fill={props.color}
        // for gradient color apply
        // fillLinearGradientStartPointX={x3}
        // fillLinearGradientStartPointY={y3}
        // fillLinearGradientEndPointX={x5}
        // fillLinearGradientEndPointY={y5}
        // fillLinearGradientColorStops={[
        //   0,
        //   "#CAA472", //props.color,
        //   0.5,
        //   "#CAA472", //props.color1,
        //   0.9,
        //   "#CAA472" //props.color2
        // ]}
        // for pattern apply
        fillPatternImage={img}
      />
    </>
  );
};

export default Rafter;
