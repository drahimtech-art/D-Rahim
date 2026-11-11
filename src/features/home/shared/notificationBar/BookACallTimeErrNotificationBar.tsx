function BookACallTimeErrNotificationBar({
  close,
}: {
  close: () => void;
}): React.ReactElement {
  return (
    <div className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0 z-50">
      <div className="w-full h-full flex justify-center items-center">
        <article className="w-[80%] h-fit max-w-[494px] bg-[#FFFFFF] flex justify-center rounded-[16px] p-7 pl-12 pr-12">
          <div>
            <header className="flex justify-center">
              <h5 className="text-[#C0392B] font-inter font-semibold min18pxMax24px">
                Invalid Time Selection
              </h5>
            </header>
            <h5 className="mt-[17px] font-normal font-inter min14pxMax16px">
              You can only book appointments for future times, please choose a
              later time.
            </h5>
            <section className="flex justify-center mt-[20px]">
              <button
                className="pointer pl-9.25 pr-9.25 p-3.25 rounded-[30px] bg-[#757575] flex justify-center items-center text-[#FFFFFF]"
                onClick={close}
              >
                <h5 className=" font-normal font-inter min14pxMax16px">Ok</h5>
              </button>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
export default BookACallTimeErrNotificationBar;
