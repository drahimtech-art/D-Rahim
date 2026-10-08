function PasswordSection(): React.ReactElement {
  return (
    <article className="w-[70%] h-fit flex flex-col gap-[15px]">
      <section>
        <h5 className="font-semibold font-inter text-[22px]">
          Change Password
        </h5>
      </section>
      <section className="w-full h-fit flex flex-col gap-[15px]">
        <div className="flex flex-col ">
          <h5 className="font-medium text-[14px] font-inter">
            Current password
          </h5>
          <input className="w-full h-[50px] border border-[#eeeded] p-3 rounded-[10px]" />
        </div>
        <div className="flex flex-col ">
          <h5 className="font-medium text-[14px] font-inter">
            Enter new password
          </h5>
          <input className="w-full h-[50px] border border-[#eeeded] p-3 rounded-[10px]" />
        </div>
        <div className="flex flex-col ">
          <h5 className="font-medium text-[14px] font-inter">
            Confirm new password
          </h5>
          <input className="w-full h-[50px] border border-[#eeeded] p-3 rounded-[10px]" />
        </div>
      </section>
    </article>
  );
}
export default PasswordSection;
