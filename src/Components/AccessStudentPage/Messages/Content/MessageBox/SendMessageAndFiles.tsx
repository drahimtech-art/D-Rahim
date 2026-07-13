import { useRef, type ChangeEvent } from "react";
import paperPlane from "/images/icons/PaperPlane.png";
type SendMessageAndFilesControl = {
  input: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sendMessageAndFiles: () => void;
  fileChage: (e: ChangeEvent<HTMLInputElement>) => void;
  setIsFiles: React.Dispatch<React.SetStateAction<boolean>>;
  isFiles: boolean;
  canculeFileInput: () => void;
};
function SendMessageAndFiles(props: SendMessageAndFilesControl) {
  const filesInputRef = useRef<HTMLInputElement | null>(null);
  function HandleKeyDown(e: React.KeyboardEvent) {
    const key = e.key;
    if (key === "Enter") return props.sendMessageAndFiles();
  }
  function handleSetFilesButton() {
    if (!filesInputRef.current) return;
    filesInputRef.current.click();
    console.log("clicked");
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    props.fileChage(e);
    props.setIsFiles(true);
  }
  return (
    <>
      <div className="flex  w-full h-fit items-center pl-1.5 pr-1.5 relative">
        {/**input box */}
        {!props.isFiles && (
          <span className="w-full max-w-142 pl-3.25 pr-3.5  h-12.5 flex items-center border border-gray-500 rounded-[35px] gap-9.75 mr-7.5">
            {/**icon */}
            <i
              className=" fa fa-plus text-[30px] text-[#11AC76] pointer"
              onClick={handleSetFilesButton}
            ></i>
            <input
              className=" w-0 h-0"
              type="file"
              onChange={handleInputChange}
              ref={filesInputRef}
            ></input>
            <input
              className="w-full h-full pl-2"
              placeholder="Type a Message..."
              value={props.input}
              onChange={props.inputChange}
              onKeyDown={HandleKeyDown}
            ></input>
          </span>
        )}
        {props.isFiles && (
          <span className="w-full flex justify-start  pointer">
            <button
              className="w-20.25 h-12.5 pointer bg-[#11AC76] flex justify-center items-center rounded-[10px] "
              onClick={props.canculeFileInput}
            >
              <i
                className="fa fa-xmark   text-2xl text-gray-200"
                onClick={props.canculeFileInput}
              ></i>
            </button>
          </span>
        )}
        {/**action button */}
        <button
          className="w-20.25 h-12.5 pointer bg-[#11AC76] flex justify-center items-center rounded-[10px] ml-auto"
          onClick={props.sendMessageAndFiles}
        >
          <img className="w-6 h-6" src={paperPlane}></img>
        </button>
      </div>
    </>
  );
}
export default SendMessageAndFiles;
