import downAngleIcon from "/images/icons/CaretDown.png";
import { useEffect, useState, useRef } from "react";
import { Graph, type GraphObject } from "../../../shared/graph";
import type { AnalyticsDataType } from "../api/Api";
function GraphConent({
  analyticsDataList,
  filterDateList,
}: {
  analyticsDataList: AnalyticsDataType[];
  filterDateList: string[];
}): React.ReactElement {
  //
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasGraphObject = useRef<GraphObject | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [dataPointXAndYIndex, setDataPointXAndYIndex] = useState<
    { x: number; y: number; value: number }[]
  >([]);
  const [graphData, setGraphData] = useState<
    {
      increaseOrDecrease: number;
      monthDay: string;
    }[]
  >([]);
  useEffect(() => {
    const formatedGraphData: {
      increaseOrDecrease: number;
      monthDay: string;
    }[] = [];
    const sortedDataList = analyticsDataList.sort((a, b) => {
      const aDate = new Date(a.dateMonthYearDate);
      const bDate = new Date(b.dateMonthYearDate);
      return (aDate as any) - (bDate as any);
    });
    for (let i = 0; i < filterDateList.length; i++) {
      if (i === 7) break;
      const dataDate = `${filterDateList[i].split(" ")[1]} ${filterDateList[i].split(" ")[2]}`;
      for (let j = 0; j < sortedDataList.length; j++) {
        const sDataDate = `${sortedDataList[j].dateMonthYearDate.split(" ")[1]} ${sortedDataList[j].dateMonthYearDate.split(" ")[2]}`;
        if (dataDate === sDataDate) {
          const data = {
            increaseOrDecrease: sortedDataList[j].liveVistors,
            monthDay: sDataDate,
          };
          formatedGraphData.push(data);
          break;
        }
        if (j + 1 === sortedDataList.length) {
          const data = {
            increaseOrDecrease: 0,
            monthDay: dataDate,
          };
          formatedGraphData.push(data);
        }
      }
    }
    (() => {
      setGraphData(formatedGraphData);
    })();
  }, [analyticsDataList.length]);

  //
  useEffect(() => {
    if (!graphData.length) return;

    mountGraph();
  }, [graphData.length]);
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
            `${dataPointXAndYIndex[i].value}`.length > 3
              ? dataPointXAndYIndex[i].x - 20
              : dataPointXAndYIndex[i].x - 10,
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
      lineColor: "rgba(1, 78, 28, 0.603)",
      pointRaduis: 3,
      pointWidth: 3,
      pointColor: "white",
      graphBodyColorTop: "rgba(22, 163, 74, 0.15)",
      graphBodyColorBottom: "#FFFFFF",
      data: graphData,
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

  //

  return (
    <article className="w-full h-[310px]  ">
      {/**graph */}
      <section className="w-full h-full rounded-[20px] flex flex-col bg-[#FFFFFF] p-4 pb-0  ">
        <div className="w-full h-fit flex items-center p-3.25 pt-0">
          <h5 className="font-inter font-medium text-[14px]">
            Visitor Overview
          </h5>
          <button className="ml-auto pointer w-[93px] h-[29px] flex items-center gap-2 border border-[#D9D9D9] rounded-[10px] p-1.25">
            <h5 className="font-inter font-medium text-[12px] text-[#757575]">
              This Week
            </h5>
            <img className="w-[12px] h-[12px]" src={downAngleIcon} />
          </button>
        </div>
        <div
          className="w-full h-[240px] rounded-[20px] mt-auto"
          ref={parentRef}
        >
          <canvas
            className="w-full h-full bg-[#FFFFFF]"
            ref={canvasRef}
          ></canvas>
        </div>
      </section>
    </article>
  );
}
export default GraphConent;
