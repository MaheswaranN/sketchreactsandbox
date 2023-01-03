import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Group, Layer, Stage, Transformer, Rect } from "react-konva";
import Roof from "./Roof";

const roomLength = 80; // in feets
const roomWidth = 40; // in feets
const overHang = 4; // in feets
const rafterSpacing = 3; // in feets
const battenSpacing = 2; // in feets
const battenoverHang = 3; // in feets

const roomLengthinInches = roomLength * 12;
const roomWidthinInches = roomWidth * 12;
const overHanginInches = overHang * 12;
const rafterSpacinginInches = rafterSpacing * 12;

const App = () => {
  const roofRef = useRef(null);
  const trRef = useRef(null);
  const rectRef = useRef(null);
  const grpRef = useRef(null);

  function handleTransform(e) {
    const shape1 = e.target;
    const transform = shape1.getTransform().copy();
    const attrs = transform.decompose();
    grpRef.current.setAttrs(attrs);
  }

  useEffect(() => {
    const transformNode = trRef.current;
    transformNode.enabledAnchors([
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right"
    ]);
    transformNode.nodes([rectRef.current]);
  }, [trRef]);

  return (
    <Stage width={1600} height={1600}>
      <Layer>
        <Group draggable="true">
          <Rect
            ref={rectRef}
            x={0}
            y={0}
            width={roomLengthinInches + overHanginInches / 2}
            height={roomWidthinInches + overHanginInches / 2}
            id="invisible-rect"
          />
          <Group
            ref={grpRef}
            clipX={0}
            clipY={0}
            clipWidth={roomLengthinInches + overHanginInches / 2}
            clipHeight={roomWidthinInches + overHanginInches / 2}
          >
            <Roof
              ref={roofRef}
              roofType={"HipRoof"}
              x={0}
              y={0}
              length={roomLengthinInches + overHanginInches / 2}
              width={roomWidthinInches + overHanginInches / 2}
              color={"#e6ffff"}
              overhang={overHanginInches}
              rafterSpacing={rafterSpacinginInches}
            />
          </Group>
        </Group>
        <Transformer
          onTransform={handleTransform}
          rotateEnabled={false}
          ref={trRef}
        />
      </Layer>
    </Stage>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
