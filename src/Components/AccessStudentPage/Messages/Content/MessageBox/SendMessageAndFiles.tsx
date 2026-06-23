import type { ChangeEvent } from "react";
import paperPlane from "/images/PaperPlane.png";
type SendMessageAndFilesControl = {
  input: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sendMessageAndFiles: () => void;
};
function SendMessageAndFiles(props: SendMessageAndFilesControl) {
  return (
    <div className="flex  w-full h-fit items-center pl-1.5 pr-1.5 ">
      {/**input box */}
      <span className="w-full max-w-142 pl-3.25 pr-3.5  h-12.5 flex items-center border border-gray-500 rounded-[35px] gap-9.75 mr-7.5">
        {/**icon */}
        <i className=" fa fa-plus text-[30px] text-[#11AC76]"></i>
        <input
          className="w-full h-full pl-2"
          placeholder="Type a Message..."
          value={props.input}
          onChange={props.inputChange}
        ></input>
      </span>
      {/**action button */}
      <button
        className="w-20.25 h-12.5 pointer bg-[#11AC76] flex justify-center items-center rounded-[10px] ml-auto"
        onClick={props.sendMessageAndFiles}
      >
        <img className="w-6 h-6" src={paperPlane}></img>
      </button>
    </div>
  );
}
export default SendMessageAndFiles;
