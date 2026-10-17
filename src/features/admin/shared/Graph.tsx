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
}: {
  lineWidth: number;
  lineColor: string;
  pointRaduis: number;
  pointWidth: number;
  pointColor: string;
  graphBodyColorTop: string;
  graphBodyColorBottom: string;
  data: { increaseOrDecrease: number }[];
  canvas: HTMLCanvasElement;
}): object {
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
    dataList: { increaseOrDecrease: number }[];
    lowestValueInList: number;
    heightsValueInList: number;
    ctx: CanvasRenderingContext2D | null;
    constructor() {
      this.startX = 20;
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
    }
    constructGraph(): void {
      if (!this.ctx) return;
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
      this.endX = canvas.width - 20;
      this.endY = getPercent(
        data[data.length - 1].increaseOrDecrease,
        0,
        this.heightsValueInList,
        this.drawingContentHeightMax,
        this.drawingContentHeightMin,
      );
      this.graphJumpWidth = Math.round(this.endX / data.length);
      this.linePointAToPointB = this.graphJumpWidth;
      this.pointPointAToPointB = this.graphJumpWidth;
    }

    drawGraph() {
      if (!this.ctx) return;
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);
      this.ctx.lineWidth = this.lineWidth;
      for (let i = 0; i < this.dataList.length; i++) {
        const dataPercentInGraph = getPercent(
          this.dataList[i].increaseOrDecrease,
          0,
          this.heightsValueInList,
          this.drawingContentHeightMax,
          this.drawingContentHeightMin,
        );
        console.log(dataPercentInGraph);
        if (i) {
          this.linePointAToPointB += this.graphJumpWidth;
        }
        if (i) {
          this.ctx.lineTo(this.linePointAToPointB, dataPercentInGraph);
          this.ctx.strokeStyle = this.lineColor;
          this.ctx.stroke();
        }
      }
      this.ctx.lineTo(this.endX, this.drawingContentHeightMax - 50);
      this.ctx.lineTo(this.startX, this.drawingContentHeightMax - 50);
      const greadientColor = this.ctx.createLinearGradient(0, 0, 0, this.endY);
      greadientColor.addColorStop(0.75, this.graphBodyColorTop);
      greadientColor.addColorStop(1, this.graphBodyColorBottom);
      this.ctx.fillStyle = greadientColor;
      this.ctx.fill();
      this.ctx.closePath();
    }
    drawGraphPoints() {
      if (!this.ctx) return;
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
        } else {
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
    }
  }
  return new DrawGraph();
}
