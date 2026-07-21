import { lazy, Suspense, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SocketApi } from "../../storage/SocketApi";
import { StudentsAppData } from "../../storage/StudentsApi";
import { FeedContextProvider } from "../../storage/FeedsContext";
import { MessagesApiProvider } from "../../storage/MessagesApi";
import Top from "./shared/Top";
import LeftNevBar from "./shared/LeftNevBar";
import Dashboard from "./features/Dashboard/Dashboard";
const Classes = lazy(() => import("./features/Classes/Classes"));
const Messages = lazy(() => import("./features/Messages/Messages"));
const Community = lazy(() => import("./features/Community/Community"));
import Settings from "./features/Settings/Settings";
function AccessStudentPage() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const [searchParems] = useSearchParams();
  const { userInfo, popUpCard, popUpControl } = userDetails;
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const page = searchParems.get("page");
  const [backgroundColor, setBackgroundColour] = useState<string>("white");
  const [renderDashboard, setRenderDashboard] = useState<boolean>(true);
  const [renderClasses, setRenderClasses] = useState<boolean>(false);
  const [renderMessage, setRenderMessage] = useState<boolean>(false);
  const [renderCummunity, setRenderCummunity] = useState<boolean>(false);
  const [renderSettings, setRenderSettings] = useState<boolean>(false);
  //join room with user connection id once on mount
  useEffect(() => {
    if (!socket) return;
    console.log("join room");
    console.log(socket.connected);
    const roomId = userInfo.connectionId;
    socket.emit("join-room", roomId);
    return () => {
      console.log("leave room");
      socket.emit("leave-room", roomId);
    };
  }, [socket?.connected]);
  //background content color control
  useEffect(() => {
    if (page == "overview" || page == "classes") {
      (() => {
        setBackgroundColour("white");
      })();
    } else if (
      page == "messages" ||
      page == "community" ||
      page == "settings"
    ) {
      (() => {
        setBackgroundColour("#f8ffff");
      })();
    }
  }, [page]);
  function toDashboard() {
    setRenderSettings(false);
    setRenderCummunity(false);
    setRenderMessage(false);
    setRenderClasses(false);
    setRenderDashboard(true);
  }
  function toClasses() {
    setRenderSettings(false);
    setRenderCummunity(false);
    setRenderMessage(false);
    setRenderDashboard(false);
    setRenderClasses(true);
  }
  function toMessage() {
    setRenderSettings(false);
    setRenderCummunity(false);
    setRenderClasses(false);
    setRenderDashboard(false);
    setRenderMessage(true);
  }
  function toCummunity() {
    setRenderSettings(false);
    setRenderMessage(false);
    setRenderClasses(false);
    setRenderDashboard(false);
    setRenderCummunity(true);
  }
  function toSettings() {
    setRenderCummunity(false);
    setRenderMessage(false);
    setRenderClasses(false);
    setRenderDashboard(false);
    setRenderSettings(true);
  }
  //listen for online ping
  function logout() {}
  console.log("full page rerender");
  return (
    <>
      <div className="w-full min-w-300 h-screen  max-h-screen    bg-white ">
        <div className="w-full h-full max-h-full flex flex-col ">
          {/**Top */}
          <div className="w-full p-10 pb-0">
            <Top />
          </div>
          {/**content */}
          <div
            className="w-full pl-10 pr-10 max-w-full h-full flex min-h-0 max-h-full gap-10 pt-10 "
            style={{ backgroundColor: backgroundColor }}
          >
            {/**left navigation panel */}
            <div className=" min-w-45 w-full max-w-73.5 h-full shrink-0 border-r border-gray-500 overflow-hidden">
              <div className="w-full h-full max-w-57.25 pt-5">
                <LeftNevBar
                  toDashboard={toDashboard}
                  toClasses={toClasses}
                  toCummunity={toCummunity}
                  toMessages={toMessage}
                  toSettings={toSettings}
                  logout={logout}
                  Dashboard={renderDashboard}
                  Messages={renderMessage}
                  Classes={renderClasses}
                  Cummunity={renderCummunity}
                  Settings={renderSettings}
                />
              </div>
            </div>
            {/**main content */}
            <div className="w-full  h-full ">
              <div className="w-full h-full overflow-y-auto">
                <Suspense
                  fallback={
                    <div className="w-full h-full bg-green-500 font-bold text-2xl">
                      Loading....
                    </div>
                  }
                >
                  {renderDashboard && <Dashboard />}
                  {renderClasses && <Classes />}

                  {renderSettings && <Settings />}
                  <>
                    <FeedContextProvider>
                      <MessagesApiProvider>
                        {renderMessage && <Messages />}
                        {renderCummunity && <Community />}
                      </MessagesApiProvider>
                    </FeedContextProvider>
                  </>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***post popup card */}
      <div className="w-full h-0 z-10 top-0 fixed  bodyMaxSizing">
        {popUpControl && (
          <div className="w-full h-screen bg-[#5756562d] relative flex justify-center items-center ">
            {popUpCard}
          </div>
        )}
      </div>
    </>
  );
}
export default AccessStudentPage;
