import { useState } from "react";
import { lazy } from "react";
import LeftNevBar from "./LeftNevBar";
const Dashboard = lazy(() => import("./Navigation/Dashboard/Dashboard"));
const Bookings = lazy(() => import("./Navigation/Booking/Bookings"));
import Mentorship from "./Navigation/Mentorship/Mentorship";
function AdminDasboard() {
  const [renderDashboard, setRenderDashboard] = useState<boolean>(true);
  const [renderBooking, setRenderBooking] = useState<boolean>(false);
  const [renderMentorship, setRenderMentorship] = useState<boolean>(false);
  const [renderJobInquires, setRenderJobInquires] = useState<boolean>(false);
  const [renderContent, setRenderContent] = useState<boolean>(false);
  const [renderSettings, setRenderSettings] = useState<boolean>(false);
  function toDashboard() {
    setRenderSettings(false);
    setRenderContent(false);
    setRenderJobInquires(false);
    setRenderMentorship(false);
    setRenderBooking(false);
    setRenderDashboard(true);
  }
  function toBooking() {
    setRenderSettings(false);
    setRenderContent(false);
    setRenderJobInquires(false);
    setRenderMentorship(false);
    setRenderDashboard(false);
    setRenderBooking(true);
  }
  function toMentorship() {
    setRenderSettings(false);
    setRenderContent(false);
    setRenderJobInquires(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderMentorship(true);
  }
  function toJobinquires() {
    setRenderSettings(false);
    setRenderContent(false);
    setRenderMentorship(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderJobInquires(true);
  }
  function toContent() {
    setRenderSettings(false);
    setRenderJobInquires(false);
    setRenderMentorship(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderContent(true);
  }
  function toSettings() {
    setRenderContent(false);
    setRenderJobInquires(false);
    setRenderMentorship(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderSettings(true);
  }
  function logout() {}
  return (
    <div className=" p-10 max-w-full min-w-fit  h-full bg-[#f8ffff] ">
      <div className="flex gap-10 h-fit w-full">
        {/**sideber left*/}
        <LeftNevBar
          toDashboard={toDashboard}
          toBooking={toBooking}
          toContent={toContent}
          toJobinquires={toJobinquires}
          toMentorship={toMentorship}
          toSettings={toSettings}
          logout={logout}
        />
        {/**center content*/}
        {renderDashboard && <Dashboard />}
        {renderBooking && <Bookings />}
        {renderMentorship && <Mentorship />}
      </div>
    </div>
  );
}
export default AdminDasboard;
