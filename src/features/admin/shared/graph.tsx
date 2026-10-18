export interface GraphObject {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  drawingContentHeightMax: number;
  drawingContentHeightMin: number;
  drawingContentWidth: number;
  lineWidth: number;
  lineColor: string;
  pointRaduis: number;
  pointWidth: number;
  pointColor: string;
  graphBodyColorTop: string;
  graphBodyColorBottom: string;
  graphJumpWidth: number;
  linePointAToPointB: number;
  pointPointAToPointB: number;
  dataList: { increaseOrDecrease: number; monthDay: string }[];
  lowestValueInList: number;
  heightsValueInList: number;
  ctx: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  constructGraph: () => void;
  drawGraph: () => void;
  drawGraphPoints: () => void;
  clearGraph: () => void;
}
export function Graph({
  lineWidth,
  lineColor,
  pointRaduis,
  pointWidth,
  pointColor,
  graphBodyColorTop,
  graphBodyColorBottom,
  data,
  canvas,
  canvasHeight,
  canvasWidth,
  setDataPointXAndYIndex,
  handleClickEventChangeOnCanvas,
}: {
  lineWidth: number;
  lineColor: string;
  pointRaduis: number;
  pointWidth: number;
  pointColor: string;
  graphBodyColorTop: string;
  graphBodyColorBottom: string;
  data: { increaseOrDecrease: number; monthDay: string }[];
  canvas: HTMLCanvasElement;
  canvasHeight: number;
  canvasWidth: number;
  setDataPointXAndYIndex: React.Dispatch<
    React.SetStateAction<{ x: number; y: number; value: number }[]>
  >;
  handleClickEventChangeOnCanvas: (e: PointerEvent) => void;
}): GraphObject {
  function getPercent(
    currentValue: number,
    lowsetValueInList: number,
    highstValueInList: number,
    graphMaxPercent: number,
    graphMinPercent: number,
  ): number {
    const result =
      ((currentValue - lowsetValueInList) *
        (graphMaxPercent - graphMinPercent)) /
        (highstValueInList - lowsetValueInList) +
      graphMinPercent;
    const limit = Math.round(result);
    const revaseLimitedResult = Math.round(graphMaxPercent - limit);
    return revaseLimitedResult ? revaseLimitedResult : 20;
  }
  class DrawGraph {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    drawingContentHeightMax: number;
    drawingContentHeightMin: number;
    drawingContentWidth: number;
    lineWidth: number;
    lineColor: string;
    pointRaduis: number;
    pointWidth: number;
    pointColor: string;
    graphBodyColorTop: string;
    graphBodyColorBottom: string;
    graphJumpWidth: number;
    linePointAToPointB: number;
    pointPointAToPointB: number;
    dataList: { increaseOrDecrease: number; monthDay: string }[];
    lowestValueInList: number;
    heightsValueInList: number;
    ctx: CanvasRenderingContext2D | null;
    canvas: HTMLCanvasElement | null;
    constructor() {
      this.startX = 35;
      this.startY = 0;
      this.endX = 0;
      this.endY = 0;
      this.drawingContentHeightMax = 0;
      this.drawingContentHeightMin = 100;
      this.drawingContentWidth = 0;
      this.lineWidth = 0;
      this.lineColor = "red";
      this.pointRaduis = 0;
      this.pointWidth = 0;
      this.pointColor = "white";
      this.graphBodyColorTop = "blue";
      this.graphBodyColorBottom = "blue";
      this.graphJumpWidth = 100;
      this.linePointAToPointB = 100;
      this.pointPointAToPointB = 100;
      this.dataList = [];
      this.lowestValueInList = 0;
      this.heightsValueInList = 0;
      this.ctx = null;
      this.canvas = null;
    }
    constructGraph(): void {
      //console.log(canvasWidth, canvasHeight);
      this.canvas = canvas;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      this.ctx = canvas.getContext("2d");
      this.lineWidth = lineWidth;
      this.lineColor = lineColor;
      this.pointRaduis = pointRaduis;
      this.pointWidth = pointWidth;
      this.pointColor = pointColor;
      this.graphBodyColorTop = graphBodyColorTop;
      this.graphBodyColorBottom = graphBodyColorBottom;
      this.dataList = data;
      let lowestValueInList = 0;
      let heightsValueInList = 0;
      data.forEach((value, i) => {
        if (i === 0) {
          lowestValueInList = value.increaseOrDecrease;
          heightsValueInList = value.increaseOrDecrease;
        }
        if (value.increaseOrDecrease < lowestValueInList) {
          lowestValueInList = value.increaseOrDecrease;
        }
        if (value.increaseOrDecrease > heightsValueInList) {
          heightsValueInList = value.increaseOrDecrease;
        }
      });
      this.lowestValueInList = lowestValueInList;
      this.heightsValueInList = heightsValueInList;
      this.drawingContentHeightMax = canvas.height;
      this.drawingContentWidth = canvas.width;
      this.startY = getPercent(
        data[0].increaseOrDecrease,
        0,
        this.heightsValueInList,
        this.drawingContentHeightMax,
        this.drawingContentHeightMin,
      );
      this.endX = canvas.width - 35;
      this.endY = getPercent(
        data[data.length - 1].increaseOrDecrease,
        0,
        this.heightsValueInList,
        this.drawingContentHeightMax,
        this.drawingContentHeightMin,
      );
      this.graphJumpWidth = Math.round(this.endX / data.length);
      this.linePointAToPointB = Math.round(this.graphJumpWidth);
      this.pointPointAToPointB = Math.round(this.graphJumpWidth);
    }

    drawGraph() {
      if (!this.ctx || !this.canvas) return;
      this.canvas.removeEventListener("click", handleClickEventChangeOnCanvas);
      this.canvas.addEventListener("click", handleClickEventChangeOnCanvas);
      const oneFouthOfHight = this.drawingContentHeightMax / 4;
      let heightOfBgLine = oneFouthOfHight;
      for (let i = 0; i < 4; i++) {
        this.ctx.beginPath;
        this.ctx.lineWidth = 0.075;
        if (i) {
          this.ctx.moveTo(15, Math.round(heightOfBgLine + 10));
          this.ctx.lineTo(
            this.drawingContentWidth,
            Math.round(heightOfBgLine + 10),
          );
          this.ctx.font = "12px sans-serif";
          this.ctx.fillText(
            `${i === 1 ? 2 : i === 2 ? 1 : 0}`,
            0,
            heightOfBgLine + 13,
          );
          heightOfBgLine += oneFouthOfHight;
        } else {
          this.ctx.moveTo(15, 7);
          this.ctx.lineTo(this.drawingContentWidth, 7);
          this.ctx.font = "12px sans-serif";
          this.ctx.fillText(`${3}`, 0, 10);
        }
        this.ctx.strokeStyle = "gray";
        this.ctx.stroke();
      }
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.font = "11px sans-serif";
      this.ctx.fillText(
        this.dataList[0].monthDay,
        this.startX - 10,
        this.drawingContentHeightMax - 20,
      );
      for (let i = 0; i < this.dataList.length; i++) {
        const dataPercentInGraph = getPercent(
          this.dataList[i].increaseOrDecrease,
          0,
          this.heightsValueInList,
          this.drawingContentHeightMax,
          this.drawingContentHeightMin,
        );
        if (i) {
          this.linePointAToPointB += this.graphJumpWidth;
        }
        if (i) {
          this.ctx.lineTo(this.linePointAToPointB, dataPercentInGraph);
          this.ctx.strokeStyle = this.lineColor;
          this.ctx.stroke();
          this.ctx.font = "11px sans-serif";
          this.ctx.fillText(
            this.dataList[i].monthDay,
            this.linePointAToPointB - 20,
            this.drawingContentHeightMax - 20,
          );
        }
      }
      this.ctx.lineTo(this.endX, this.drawingContentHeightMax - 40);
      this.ctx.lineTo(this.startX, this.drawingContentHeightMax - 40);
      const greadientColor = this.ctx.createLinearGradient(0, 0, 0, this.endY);
      greadientColor.addColorStop(0.75, this.graphBodyColorTop);
      greadientColor.addColorStop(1, this.graphBodyColorBottom);
      this.ctx.fillStyle = greadientColor;
      this.ctx.fill();
      this.ctx.closePath();
    }
    drawGraphPoints() {
      if (!this.ctx) return;
      const dataListPoints: { x: number; y: number; value: number }[] = [];
      for (let i = 0; i < this.dataList.length; i++) {
        const dataPercentInGraph = getPercent(
          this.dataList[i].increaseOrDecrease,
          0,
          this.heightsValueInList,
          this.drawingContentHeightMax,
          this.drawingContentHeightMin,
        );
        this.ctx.beginPath();
        this.ctx.lineWidth = this.pointWidth;
        if (i) {
          this.pointPointAToPointB += this.graphJumpWidth;
          this.ctx.arc(
            this.pointPointAToPointB,
            dataPercentInGraph,
            this.pointRaduis,
            0,
            Math.PI * 2,
          );
          const pointData: { x: number; y: number; value: number } = {
            x: this.pointPointAToPointB,
            y: dataPercentInGraph,
            value: this.dataList[i].increaseOrDecrease,
          };
          dataListPoints.push(pointData);
        } else {
          const pointData: { x: number; y: number; value: number } = {
            x: this.startX,
            y: this.startY,
            value: this.dataList[i].increaseOrDecrease,
          };
          dataListPoints.push(pointData);
          this.ctx.arc(
            this.startX,
            this.startY,
            this.pointRaduis,
            0,
            Math.PI * 2,
          );
        }
        this.ctx.fillStyle = this.pointColor;
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.fill();
        this.ctx.stroke();
      }
      setDataPointXAndYIndex(dataListPoints);
    }

    clearGraph() {
      if (!this.ctx) return;
      this.ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  }
  return new DrawGraph();
}
