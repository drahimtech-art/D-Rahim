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
    /**
     getPercent 
        which takes in 5 prop (currentValue: number, lowsetValueInList: number, highstValueInList: number, canvasFullHight: number, canvasLowestHight: number): number)
        and return a calculted percent of how high is should current line(y axois) be in the graph in relation to the highst and lowest value in list
        and keeping height of line in relation to canvas hight
        now this function takes any value and treates it as 0 - 100% represnting the highstValueInList as 100% and lowestValueInList as 0% any value in between is represented as 
        1% - 99% of 100%/  highstValueInList
     */
    const result =
      ((currentValue - lowsetValueInList) *
        (graphMaxPercent - graphMinPercent)) /
        (highstValueInList - lowsetValueInList) +
      graphMinPercent;
    const limit = Math.round(result);
    const revaseLimitedResult = Math.round(graphMaxPercent - limit) + 20; // this revase the other since on canvase highst point is 0 which sets y at top if calulated percent is 100 then you - minus it from canvaes hight which gives you a low value in revease its a high value in canvas hight then if value be 50 - canves hight that gives you half the value which sets y at middle of canvas and 25 sets y at close to bottom as well as 80 set y close to top
    return !(revaseLimitedResult <= 0) ? revaseLimitedResult : 20; // now to avoid line reaching canvas top if revaseLimitedResult === 0 return 20 which gives all high lines spacing from canvas top
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
      this.startX = 35; //start of graph line x axios
      this.startY = 0; //start of graph line y x axois
      this.endX = 0; // end of graph line x axois
      this.endY = 0; // end of graph line y axois
      this.drawingContentHeightMax = 0; // full hight of canvas in px
      this.drawingContentHeightMin = 100; // bottom hight of canvas if 0 px graph hight bottom of canvas
      this.drawingContentWidth = 0; // full width of canvas
      this.lineWidth = 0; // graph line width
      this.lineColor = "red"; // graph line color
      this.pointRaduis = 0; // point at starting, ending or joint of two graph line circle raduis (how big is th circle)
      this.pointWidth = 0; //  point at starting, ending or joint of two graph line circle border width
      this.pointColor = "white"; // point at starting, ending or joint of two graph line circle background color
      this.graphBodyColorTop = "blue"; // inner body of graph lines not whole canavas body but graph body background color top ("we have top and bottom because of linergradient style")
      this.graphBodyColorBottom = "blue"; // inner body of graph lines not whole canavas body but graph body background color bottom ("we have top and bottom because of linergradient style")
      this.graphJumpWidth = 100; // this the distance the length which a single graph line could move on the x axios  (line A to Line B horizontaly)
      this.linePointAToPointB = 100; //this a calculated relational distance between graph line A to B to C to D  at x axois
      this.pointPointAToPointB = 100; //this a calculated relational distance between graph line A to B to C to D  at x axois
      this.dataList = []; // graph repreasentation data list array of object with prop { increaseOrDecrease: number; monthDay: string }
      this.lowestValueInList = 0; // this a calculated lowset value in data list array ({ increaseOrDecrease: number; monthDay: string }[] => lowest increaseOrDecrease in list  )
      this.heightsValueInList = 0; // this a calculated heights value in data list array ({ increaseOrDecrease: number; monthDay: string }[] => heighest increaseOrDecrease in list  )
      this.ctx = null; // this a refreance / pointer to 2dContext drawaing board of canvas to apply drawings shapes and styles
      this.canvas = null; //  this a refreance / pointer to canvas html element
    }
    constructGraph(): void {
      //console.log(canvasWidth, canvasHeight);
      // in this section i inntailize my object propaties with input props gottten from graph call end point
      this.canvas = canvas;
      canvas.width = canvasWidth; // i set canvas width here as on window resize i clearRect()/ all drawaing resize and draw fresh graph
      canvas.height = canvasHeight; // i set canvas height here as on window resize i clearRect()/ all drawaing resize and draw fresh graph
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
        // this a loop of graph representation dataList to find the lowest and highest increaseOrDecrease value in list (find the lowest or highest score in list)
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
      if (data.length) {
        /* in this section i set my starting point graph line y axois to the return value of getPercent 
        which takes in 5 prop (currentValue: number, lowsetValueInList: number, highstValueInList: number, canvasFullHight: number, canvasLowestHight: number): number)
        and return a calculted percent of how high is should current line(y axois) be in the graph in relation to the highst and lowest value in list
        and keeping height of line in relation to canvas hight         
        */
        this.startY = getPercent(
          data[0].increaseOrDecrease,
          0,
          this.heightsValueInList,
          this.drawingContentHeightMax,
          this.drawingContentHeightMin,
        );
      } else {
        // in this section i say if no data list to represent set starting line y axois (startY) to canvasFullHight - 40 keeping to a little lower then canvas hight as to give it little spaceing from canvas top
        this.startY = this.drawingContentHeightMax - 40;
      }
      this.endX = canvas.width - 35; // in this section i set endX which is total length of canvas  to canvas width - 35 to give it little spacing at the right from canvas body
      if (data.length) {
        /* in this section i set my ending point graph line y axois to the return value of getPercent 
        which takes in 5 prop (currentValue: number, lowsetValueInList: number, highstValueInList: number, canvasFullHight: number, canvasLowestHight: number): number)
        and return a calculted percent of how high is should current line(y axois) be in the graph in relation to the highst and lowest value in list
        and keeping height of line in relation to canvas hight         
        */
        this.endY = getPercent(
          data[data.length - 1].increaseOrDecrease,
          0,
          this.heightsValueInList,
          this.drawingContentHeightMax,
          this.drawingContentHeightMin,
        );
      } else {
        // in this section i say if no data list to represent set ending line y axois (endY) to canvasFullHight - 40 keeping to a little lower then canvas hight as to give it little spaceing from canvas top
        this.endY = this.drawingContentHeightMax - 40;
      }
      this.graphJumpWidth = Math.round(this.endX / data.length); // i innitailize graphJumpWidth which is distance at x axois from graph line A to B by saying canvas width divided by total representation data in list length which give me a percent that can shows how many times line A can go to B and B to C to reach the graph width
      this.linePointAToPointB = Math.round(this.graphJumpWidth); // i innitailize linePointAToPointB with graphJumpWidth which is 1 distance of total graph line x axios (A to B);
      this.pointPointAToPointB = Math.round(this.graphJumpWidth);
    }

    drawGraph() {
      /*
      in this section i drawa the graph background line and graph line using innitailize this.object propaties
      */
      if (!this.ctx || !this.canvas) return;
      this.canvas.removeEventListener("click", handleClickEventChangeOnCanvas); // in this section a remove an canvas click event listiner to aviod duplication an component rereander
      this.canvas.addEventListener("click", handleClickEventChangeOnCanvas); // this adds a listiner on canvas for click event the function comes from parent body as to store function signature/refreance/pointer in memore as this.graph component rerenders which removes refrenace to function there for creating a duplicate listiner on each render as remove event listiner funtion call dont have a refreance signature to function to remove it
      const oneFouthOfHight = this.drawingContentHeightMax / 4; // in this section i split my canvas full hight into 4 section (25% of 100 %);
      let heightOfBgLine = oneFouthOfHight;
      for (let i = 0; i < 4; i++) {
        // in this section i draw background line from 15 x axios to canvas full width (this.drawingContentWidth) and the y axois at oneFouthOfHight now if loop is at index 0 y axois is zero which keeps first line at top the on next loop i add up 25% += 25% (increamentedHight += 25% / heightOfBgLine += oneFouthOfHight) which place background line in other of 4 total in relation to backgroud hight eg(grid-row-4)
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
      /// in this section i start my graph line drawaing
      this.ctx.beginPath(); // start new drawing
      this.ctx.moveTo(this.startX, this.startY); // start at this.startX, this.startY;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.font = "11px sans-serif";
      this.ctx.fillText(
        this.dataList.length ? this.dataList[0].monthDay : "",
        this.startX - 10,
        this.drawingContentHeightMax - 20,
      );
      for (let i = 0; i < this.dataList.length; i++) {
        // this loop the through the whole dreprsentation dataList and draw its line graph x and y axois in relation to canvas hight and width
        /* in this section i set my dataPercentInGraph (how high is the line from bottom to top) point graph line y axois to the return value of getPercent 
        which takes in 5 prop (currentValue: number, lowsetValueInList: number, highstValueInList: number, canvasFullHight: number, canvasLowestHight: number): number)
        and return a calculted percent of how high is should current line(y axois) be in the graph in relation to the highst and lowest value in list
        and keeping height of line in relation to canvas hight         
        */
        const dataPercentInGraph = getPercent(
          this.dataList[i].increaseOrDecrease,
          0,
          this.heightsValueInList,
          this.drawingContentHeightMax,
          this.drawingContentHeightMin,
        );
        if (i) {
          this.linePointAToPointB += this.graphJumpWidth; // if this not the first line drawen increament linePointAToPointB as to get x axois for the next line drwaing in relation to canvas full width
        }
        if (i) {
          this.ctx.lineTo(this.linePointAToPointB, dataPercentInGraph); // this draws the line from x axois to y axios
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
      // in this section at the send of my graph line drawen i want to close the graph by drawing a relational line from ending of graph line back to starting of graph line
      this.ctx.lineTo(this.endX, this.drawingContentHeightMax - 40);
      this.ctx.lineTo(this.startX, this.drawingContentHeightMax - 40);
      // in this section i add background color to graph line drawen in linear gradient
      const greadientColor = this.ctx.createLinearGradient(
        0,
        0,
        0,
        Math.round(heightOfBgLine - 55),
      );
      greadientColor.addColorStop(0, this.graphBodyColorTop);
      greadientColor.addColorStop(1, this.graphBodyColorBottom);
      this.ctx.fillStyle = greadientColor;
      this.ctx.fill();
      this.ctx.closePath();
    }
    drawGraphPoints() {
      /* in this section a draw points circle to repreasent the stating and ending of a line and joint between two lines
       using the same function flow as grawing a graph line i get the x and y axois point the same way but in this case 
       i place the circle point at the starting x and y corrodinates gotten which place circle at the start x and y corrodinates of every line

      
      */
      if (!this.ctx) return;
      const dataListPoints: { x: number; y: number; value: number }[] = []; // in this section i store the x, y corrodinates and increaseOrDecrease value of each circle point
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
          // in this section i store the x, y corrodinates and increaseOrDecrease value of each circle point
          const pointData: { x: number; y: number; value: number } = {
            x: this.pointPointAToPointB,
            y: dataPercentInGraph,
            value: this.dataList[i].increaseOrDecrease,
          };
          dataListPoints.push(pointData);
        } else {
          // in this section i store the x, y corrodinates and increaseOrDecrease value of each circle point
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
      setDataPointXAndYIndex(dataListPoints); // in this section  i  store the x, y corrodinates and increaseOrDecrease value of each circle point at graph parent component body to avoid lose data on component rerender
    }
    clearGraph() {
      // this section is used to clear the whole drwaing in canvas
      if (!this.ctx) return;
      this.ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  }
  return new DrawGraph(); // then i return the whole function flow of drawing a a graw in an object with be called used and manupulated my parent
}
