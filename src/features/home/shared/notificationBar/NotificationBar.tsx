function NotificationBar({
  errMassage,
}: {
  errMassage: string;
}): React.ReactElement {
  return (
    <section className=" absolute w-full  ">
      <section className="w-fit   min-[1000px]:w-[273px] h-fit bg-[#FFDBDB] -mt-0.5 mr-3 min-[1000px]:mr-0 border-2 border-[#C0392B] ml-auto p-3.25 flex justify-center items-center">
        <h5 className="min16Max20px font-inter font-normal text-[#C0392B]">
          {errMassage}
        </h5>
      </section>
    </section>
  );
}
export default NotificationBar;
