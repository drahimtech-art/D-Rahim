import TableRows from "./TableRows";
import type { ProjectInfo } from "../api/Api";
import { useEffect, useState } from "react";
function List({
  projectList,
}: {
  projectList: ProjectInfo[];
}): React.ReactElement {
  const [limitList, setLimitList] = useState<ProjectInfo[]>([]);
  const [startIndexList, setStartIndexList] = useState<number>(0);
  const [endIndexList, setEndIndexList] = useState<number>(0);
  //
  useEffect(() => {
    const limitedListToFiveIndexData = [];
    let startingIndex = 0;
    if (projectList.length > 0) {
      for (let i = 0; i < projectList.length; i++) {
        if (startingIndex === 5) break;
        startingIndex += 1;
        limitedListToFiveIndexData.push(projectList[i]);
      }
      setStartIndexList(1);
      setEndIndexList(limitedListToFiveIndexData.length);
    } else {
      setStartIndexList(0);
      setEndIndexList(0);
    }
    (() => {
      setLimitList(limitedListToFiveIndexData);
    })();
  }, [projectList.length]);
  //
  function handleMoveToNextListIndex() {
    if (endIndexList >= projectList.length) return;
    let newEndIndex = endIndexList;
    const limitedListToFiveIndexData = [];
    for (let i = endIndexList; i < projectList.length; i++) {
      if (i === endIndexList + 5) break;
      newEndIndex += 1;
      limitedListToFiveIndexData.push(projectList[i]);
    }
    setStartIndexList(endIndexList);
    setEndIndexList(newEndIndex);
    setLimitList(limitedListToFiveIndexData);
  }
  function handleMoveToPrevListIndex() {
    if (startIndexList - 4 < 0) return;
    const limitedListToFiveIndexData = [];
    const endIndex = startIndexList - 1;
    let startIndex = startIndexList;
    for (let i = endIndex; i > endIndex - 5; i--) {
      startIndex -= 1;
      limitedListToFiveIndexData.push(projectList[i]);
    }
    setStartIndexList(startIndex ? startIndex : 1);
    setEndIndexList(endIndex + 1);
    setLimitList(limitedListToFiveIndexData.reverse());
  }
  return (
    <article className="w-full h-full bg-white">
      <section className="w-full h-15 border border-[#ebe8e8] bg-[#F5F5F5] grid grid-cols-[25%_32%_20%_13%_10%] ">
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Service
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Title
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Date Added
          </h5>
        </span>

        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Status
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5  flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Action
          </h5>
        </span>
      </section>
      <section className="w-full h-[400px] min-h-[400px]">
        <div className="w-full h-full  flex flex-col">
          {limitList.map((e, i) => {
            return <TableRows data={e} key={`table-row-key-${i}`} />;
          })}
          {/**{Array.from({ length: 30 }).map((_, i) => {
            return <TableRows key={`table-row-key-${i}`} />;
          })} */}
        </div>
      </section>
      <section className="w-full h-[72px] pl-2.5 pr-2.5 flex items-center">
        <span className="p-2.5 mr-auto">
          <h5 className="font-inter font-normal text-[16px]">
            Showing {startIndexList} to {endIndexList} of {projectList.length}{" "}
            results
          </h5>
        </span>
        <span className="w-fit h-full flex items-center gap-3">
          <i
            className="fa fa-angle-left pointer"
            onClick={handleMoveToPrevListIndex}
          ></i>
          <span className="w-fit h-full flex items-center gap-1">
            <span className="w-7.5 h-7.5 flex justify-center items-center  border border-[#F5F5F5] rounded-xl">
              <h5 className="font-inter font-normal text-[16px]">
                {startIndexList}
              </h5>
            </span>
            {
              <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
                <h5 className="font-inter font-normal text-[16px]">
                  {endIndexList}
                </h5>
              </span>
            }
            {endIndexList + 5 < projectList.length ? (
              <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
                <h5 className="font-inter font-normal text-[16px]">
                  {endIndexList + 5}
                </h5>
              </span>
            ) : (
              <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
                <h5 className="font-inter font-normal text-[16px]">
                  {projectList.length}
                </h5>
              </span>
            )}
          </span>
          <i
            className="fa fa-angle-right pointer"
            onClick={handleMoveToNextListIndex}
          ></i>
        </span>
      </section>
    </article>
  );
}
export default List;
