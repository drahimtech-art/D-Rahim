import { lazy, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Top from "./Top";
import LeftNevBar from "./LeftNevBar";
import Dashboard from "./Dashboard/Dashboard";
const Classes = lazy(() => import("./Classes/Classes"));
const Messages = lazy(() => import("./Messages/Messages"));
import Settings from "./Settings/Settings";
function AccessStudentPage() {
  const [searchParems] = useSearchParams();
  const page = searchParems.get("page");
  const [backgroundColor, setBackgroundColour] = useState<string>("white");
  const [renderDashboard, setRenderDashboard] = useState<boolean>(true);
  const [renderClasses, setRenderClasses] = useState<boolean>(false);
  const [renderMessage, setRenderMessage] = useState<boolean>(false);
  const [renderCummunity, setRenderCummunity] = useState<boolean>(false);
  const [renderSettings, setRenderSettings] = useState<boolean>(false);
  //background content color control
  useEffect(() => {
    if (page == "overview" || page == "classes") {
      (() => {
        setBackgroundColour((prevBackgroundColor) => {
          return (prevBackgroundColor = "white");
        });
      })();
    } else {
      (() => {
        setBackgroundColour((prevBackgroundColor) => {
          return (prevBackgroundColor = "#f8ffff");
        });
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
  function logout() {}
  return (
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
              {renderDashboard && <Dashboard />}
              {renderClasses && <Classes />}
              {renderMessage && <Messages />}
              {renderSettings && <Settings />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccessStudentPage;
