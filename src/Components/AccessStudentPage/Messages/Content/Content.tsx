import Contact from "./Contact/Contact";
function Content() {
  return (
    <div className="mt-7.5 w-full h-full flex b">
      {/**left contact panel */}
      <div className="w-[30%] overflow-hidden max-w-80.25  border-r border-[#11AC76]">
        <Contact />
      </div>
    </div>
  );
}
export default Content;
