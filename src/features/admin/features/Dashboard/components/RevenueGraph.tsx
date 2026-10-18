import { Graph, type GraphObject } from "../../../shared/graph";
import { useRef, useEffect, useState } from "react";
function RevenueGraph(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasGraphObject = useRef<GraphObject | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [dataPointXAndYIndex, setDataPointXAndYIndex] = useState<
    { x: number; y: number; value: number }[]
  >([]);
  const data = [
    {
      increaseOrDecrease: 40000,
      monthDay: "May 26",
    },
    {
      increaseOrDecrease: 3000,
      monthDay: "May 26",
    },
    {
      increaseOrDecrease: 10000,
      monthDay: "May 26",
    },
    {
      increaseOrDecrease: 0,
      monthDay: "May 26",
    },
    {
      increaseOrDecrease: 8000,
      monthDay: "May 26",
    },
    {
      increaseOrDecrease: 60000,
      monthDay: "May 26",
    },
    {
      increaseOrDecrease: 10000,
      monthDay: "May 26",
    },
  ];
  useEffect(() => {
    if (!canvasRef.current) return;
    canvasGraphObject.current?.clearGraph();
    mountGraph();
  }, [dataPointXAndYIndex.length]);
  //
  function handleClickEventChangeOnCanvas(e: PointerEvent) {
    if (dataPointXAndYIndex.length === 0) return;
    const mouseVector = {
      x: 0,
      y: 0,
    };
    mouseVector.x = e.offsetX;
    mouseVector.y = e.offsetY;
    canvasGraphObject.current?.clearGraph();
    mountGraph();
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    for (let i = 0; i < dataPointXAndYIndex.length; i++) {
      if (
        mouseVector.x === dataPointXAndYIndex[i].x ||
        mouseVector.x + 1 === dataPointXAndYIndex[i].x ||
        mouseVector.x + 2 === dataPointXAndYIndex[i].x ||
        mouseVector.x + 3 === dataPointXAndYIndex[i].x ||
        mouseVector.x + 4 === dataPointXAndYIndex[i].x ||
        mouseVector.x + 5 === dataPointXAndYIndex[i].x ||
        mouseVector.x - 1 === dataPointXAndYIndex[i].x ||
        mouseVector.x - 2 === dataPointXAndYIndex[i].x ||
        mouseVector.x - 3 === dataPointXAndYIndex[i].x ||
        mouseVector.x - 4 === dataPointXAndYIndex[i].x ||
        mouseVector.x - 5 === dataPointXAndYIndex[i].x
      ) {
        if (
          mouseVector.y === dataPointXAndYIndex[i].y ||
          mouseVector.y + 1 === dataPointXAndYIndex[i].y ||
          mouseVector.y + 2 === dataPointXAndYIndex[i].y ||
          mouseVector.y + 3 === dataPointXAndYIndex[i].y ||
          mouseVector.y + 4 === dataPointXAndYIndex[i].y ||
          mouseVector.y + 5 === dataPointXAndYIndex[i].y ||
          mouseVector.y - 1 === dataPointXAndYIndex[i].y ||
          mouseVector.y - 2 === dataPointXAndYIndex[i].y ||
          mouseVector.y - 3 === dataPointXAndYIndex[i].y ||
          mouseVector.y - 4 === dataPointXAndYIndex[i].y ||
          mouseVector.y - 5 === dataPointXAndYIndex[i].y
        ) {
          ctx.beginPath();
          ctx.font = "15px sans-serif";
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.fillText(
            `${dataPointXAndYIndex[i].value}`,
            dataPointXAndYIndex[i].x - 20,
            dataPointXAndYIndex[i].y + 20,
          );
        }
      }
    }
  }
  function mountGraph() {
    if (!canvasRef.current || !parentRef.current) return;
    const canvasHeight: number = parentRef.current.clientHeight;
    const canvasWidth: number = parentRef.current.clientWidth;
    canvasGraphObject.current = Graph({
      lineWidth: 2,
      lineColor: "green",
      pointRaduis: 5,
      pointWidth: 2,
      pointColor: "white",
      graphBodyColorTop: "#DFFEF6",
      graphBodyColorBottom: "#DFFEF6",
      data: data,
      canvas: canvasRef.current,
      canvasHeight,
      canvasWidth,
      setDataPointXAndYIndex,
      handleClickEventChangeOnCanvas,
    });
    canvasGraphObject.current.constructGraph();
    canvasGraphObject.current.drawGraph();
    canvasGraphObject.current.drawGraphPoints();
  }
  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;
    window.addEventListener("resize", () => {
      if (!canvasGraphObject.current || !parentRef.current) return;
      canvasGraphObject.current?.clearGraph();
      mountGraph();
    });
    mountGraph();
    //console.log(test);
  }, []);
  //

  return (
    <section className="w-[60%] h-full rounded-[20px] flex flex-col bg-[#fffcfca1] p-4 pb-0 ">
      <div className="w-full h-[200px] rounded-[20px] mt-auto" ref={parentRef}>
        <canvas className="w-full h-full bg-[#FFFFFF]" ref={canvasRef}></canvas>
      </div>
    </section>
  );
}
export default RevenueGraph;
