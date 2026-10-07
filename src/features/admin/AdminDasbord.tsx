import { useState } from "react";
import LeftNevBar from "./shared/LeftNevBar";
import Dashboard from "./features/Dashboard/Dashboard";
import Portfolio from "./features/portfolio/Portfolio";
import Bookings from "./features/Booking/Bookings";
import Payment from "./features/payment/Payment";
import JobInquires from "./features/JobInquires/JobInquires";
//import Analytics from "./features/Analytics/Analytics";
import Settings from "./features/Settings/Settings";
function AdminDasboard() {
  const [renderDashboard, setRenderDashboard] = useState<boolean>(true);
  const [renderPortfolio, setRenderPortfolio] = useState<boolean>(false);
  const [renderBooking, setRenderBooking] = useState<boolean>(false);
  const [renderPayment, setRenderPayment] = useState<boolean>(false);
  const [renderJobInquires, setRenderJobInquires] = useState<boolean>(false);
  const [renderAnalytics, setRenderAnalytics] = useState<boolean>(false);
  const [renderSettings, setRenderSettings] = useState<boolean>(false);
  function toDashboard() {
    setRenderSettings(false);
    setRenderAnalytics(false);
    setRenderJobInquires(false);
    setRenderPayment(false);
    setRenderBooking(false);
    setRenderPortfolio(false);
    setRenderDashboard(true);
  }
  function toPortfolio() {
    setRenderSettings(false);
    setRenderAnalytics(false);
    setRenderJobInquires(false);
    setRenderPayment(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderPortfolio(true);
  }
  function toBooking() {
    setRenderSettings(false);
    setRenderAnalytics(false);
    setRenderJobInquires(false);
    setRenderPayment(false);
    setRenderDashboard(false);
    setRenderPortfolio(false);
    setRenderBooking(true);
  }
  function toPayment() {
    setRenderSettings(false);
    setRenderAnalytics(false);
    setRenderJobInquires(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderPortfolio(false);
    setRenderPayment(true);
  }
  function toJobinquires() {
    setRenderSettings(false);
    setRenderAnalytics(false);
    setRenderPayment(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderPortfolio(false);
    setRenderJobInquires(true);
  }
  function toAnalytics() {
    setRenderSettings(false);
    setRenderJobInquires(false);
    setRenderPayment(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderPortfolio(false);
    setRenderAnalytics(true);
  }
  function toSettings() {
    setRenderAnalytics(false);
    setRenderJobInquires(false);
    setRenderPayment(false);
    setRenderBooking(false);
    setRenderDashboard(false);
    setRenderPortfolio(false);
    setRenderSettings(true);
  }
  function logout() {}
  return (
    <div className=" p-10 max-w-full min-w-fit min-h-screen max-h-fit bg-[#f8ffff] ">
      <div className="flex gap-10 h-fit w-full ">
        <div className="w-[25%] min-w-73.5 ">
          <div className="fixed ">
            <nav className="w-full h-full relative">
              <div className="absolute w-[294px] ">
                {/**sideber left*/}
                <LeftNevBar
                  toDashboard={toDashboard}
                  toPortfolio={toPortfolio}
                  toBooking={toBooking}
                  toAnalytics={toAnalytics}
                  toJobinquires={toJobinquires}
                  toPayment={toPayment}
                  toSettings={toSettings}
                  logout={logout}
                  Dashboard={renderDashboard}
                  Jobinquires={renderJobInquires}
                  Booking={renderBooking}
                  Payment={renderPayment}
                  Analytics={renderAnalytics}
                  Settings={renderSettings}
                  Portfolio={renderPortfolio}
                />
              </div>
            </nav>
          </div>
        </div>
        <main className="w-full h-full">
          {/**center Analytics*/}
          {renderDashboard && <Dashboard />}
          {renderPortfolio && <Portfolio />}
          {renderBooking && <Bookings />}
          {renderPayment && <Payment />}
          {renderJobInquires && <JobInquires />}
          {/**{renderAnalytics && <Analytics />} */}
          {renderSettings && <Settings />}
        </main>
      </div>
    </div>
  );
}
export default AdminDasboard;
