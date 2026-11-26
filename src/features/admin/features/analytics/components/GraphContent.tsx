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
  const [allStaticGraphData, setAllStaticGraphData] = useState<
    {
      increaseOrDecrease: number;
      monthDay: string;
    }[]
  >([]);
  const [renderActionBar, setRenderActionBar] = useState<boolean>(false);
  const [dataPointXAndYIndex, setDataPointXAndYIndex] = useState<
    { x: number; y: number; value: number }[]
  >([]);
  const [startingIndex, setStartingIndex] = useState<number>(0);
  const [endingIndex, setEndingIndex] = useState<number>(0);
  //
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
    let endIndex = 0;
    setStartingIndex(0);
    for (let i = 0; i < filterDateList.length; i++) {
      if (i === 7) break;
      endIndex++;
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
    setEndingIndex(endIndex);
    //
    const allGraphData: {
      increaseOrDecrease: number;
      monthDay: string;
    }[] = [];
    //
    for (let i = 0; i < filterDateList.length; i++) {
      const dataDate = `${filterDateList[i].split(" ")[1]} ${filterDateList[i].split(" ")[2]}`;
      for (let j = 0; j < sortedDataList.length; j++) {
        const sDataDate = `${sortedDataList[j].dateMonthYearDate.split(" ")[1]} ${sortedDataList[j].dateMonthYearDate.split(" ")[2]}`;
        if (dataDate === sDataDate) {
          const data = {
            increaseOrDecrease: sortedDataList[j].liveVistors,
            monthDay: sDataDate,
          };
          allGraphData.push(data);
          break;
        }
        if (j + 1 === sortedDataList.length) {
          const data = {
            increaseOrDecrease: 0,
            monthDay: dataDate,
          };
          allGraphData.push(data);
        }
      }
    }
    (() => {
      setGraphData(formatedGraphData);
      setAllStaticGraphData(allGraphData);
    })();
  }, [analyticsDataList.length]);
  //
  useEffect(() => {
    if (!graphData.length || !canvasRef.current) return;
    canvasGraphObject.current?.clearGraph();
    mountGraph();
  }, [graphData]);
  useEffect(() => {
    if (!canvasRef.current) return;
    canvasGraphObject.current?.clearGraph();
    mountGraph();
  }, [dataPointXAndYIndex.length]);
  //
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
  //
  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.addEventListener("click", handleClickEventChangeOnCanvas);
    return () => {
      if (!canvasRef.current) return;
      canvasRef.current.removeEventListener(
        "click",
        handleClickEventChangeOnCanvas,
      );
    };
  }, [dataPointXAndYIndex]);
  //
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
    });
    canvasGraphObject.current.constructGraph();
    canvasGraphObject.current.drawGraph();
    canvasGraphObject.current.drawGraphPoints();
  }
  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;
    function handleResizeFunction() {
      if (!canvasGraphObject.current || !parentRef.current || !graphData.length)
        return;
      canvasGraphObject.current?.clearGraph();
      mountGraph();
    }
    window.addEventListener("resize", handleResizeFunction);
    return () => {
      window.removeEventListener("resize", handleResizeFunction);
    };
  }, [graphData]);
  //
  function handleMoveToNextWeek() {
    setRenderActionBar(false);
    if (endingIndex >= allStaticGraphData.length) return;
    setStartingIndex(endingIndex);
    let endIndex = endingIndex;
    const formatedGraphData: {
      increaseOrDecrease: number;
      monthDay: string;
    }[] = [];
    for (let i = endingIndex; i < allStaticGraphData.length; i++) {
      if (i === endingIndex + 7) break;
      endIndex++;
      formatedGraphData.push(allStaticGraphData[i]);
    }
    setEndingIndex(endIndex);
    setGraphData(formatedGraphData);
  }
  function handleMoveToLastWeek() {
    setRenderActionBar(false);
    const endIndex = startingIndex;
    if (endIndex <= 0) return;
    setEndingIndex(startingIndex);
    let startIndex = endIndex;
    const formatedGraphData: {
      increaseOrDecrease: number;
      monthDay: string;
    }[] = [];
    for (let i = endIndex; i >= 0; i--) {
      if (i === endIndex - 7) break;
      startIndex--;
      formatedGraphData.push(allStaticGraphData[startIndex]);
    }
    setStartingIndex(startIndex);
    setGraphData(formatedGraphData.reverse());
  }
  //

  return (
    <>
      <article className="w-full h-[310px] ">
        {/**graph */}
        <section className="w-full h-full rounded-[20px] flex flex-col bg-[#FFFFFF] p-4 pb-0  ">
          <div className="w-full h-fit flex items-center p-3.25 pt-0">
            <h5 className="font-inter font-medium text-[14px]">
              Visitor Overview
            </h5>
            <div className="relative z-10 ml-auto h-fit w-fit">
              <button
                className=" pointer w-[93px] h-[29px] flex items-center gap-2 border border-[#D9D9D9] rounded-[10px] p-1.25"
                onClick={() => {
                  setRenderActionBar(!renderActionBar);
                }}
              >
                <h5 className="font-inter font-medium text-[12px] text-[#757575]">
                  This Week
                </h5>
                <img className="w-[12px] h-[12px]" src={downAngleIcon} />
              </button>
              {renderActionBar && (
                <div className="absolute z-10 flex justify-center w-full ">
                  <div className="  w-fit h-fit bg-[white]  mt-0.5 flex flex-col gap-[8px] items-center p-3.25 rounded-[10px] ">
                    <button
                      className=" pointer w-[93px] h-[29px] flex items-center gap-2 border border-[#D9D9D9] rounded-[10px] p-1.25"
                      onClick={handleMoveToLastWeek}
                      style={{
                        cursor: startingIndex === 0 ? "not-allowed" : "pointer",
                      }}
                    >
                      <h5 className="font-inter font-medium text-[12px] text-[#757575]">
                        Last Week
                      </h5>
                      <i className="fa fa-arrow-left text-[9px] text-[#757575]"></i>
                    </button>
                    <button
                      className=" pointer w-[93px] h-[29px] flex items-center gap-2 border border-[#D9D9D9] rounded-[10px] p-1.25"
                      onClick={handleMoveToNextWeek}
                      style={{
                        cursor:
                          endingIndex === allStaticGraphData.length
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      <h5 className="font-inter font-medium text-[12px] text-[#757575]">
                        Next Week
                      </h5>
                      <i className="fa fa-arrow-right text-[9px] text-[#757575]"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
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
      {renderActionBar && (
        <div
          className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0"
          onClick={() => setRenderActionBar(!renderActionBar)}
        ></div>
      )}
    </>
  );
}
export default GraphConent;
