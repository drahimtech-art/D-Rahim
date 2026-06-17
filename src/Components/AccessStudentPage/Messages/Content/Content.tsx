import Contact from "./Contact/Contact";
function Content() {
  return (
    <div className="mt-7.5 w-full h-full max-h-full overflow-hidden flex">
      {/**left contact panel */}
      <div className="w-[30%] h-full max-h-full overflow-y-auto max-w-80.25  border-r border-[#11AC76]">
        <Contact />
      </div>
    </div>
  );
}
export default Content;
