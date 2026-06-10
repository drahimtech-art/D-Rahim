import LoginLogo from "/images/loginLogo.png"
function AccessLogin(){
    return<div className="w-full h-screen bg-primary-green text-gray-200 flex justify-center items-center">
    <div className="w-full max-w-[810.5px] h-fit ">
        <div className="w-full h-full flex justify-center">
            <span className="flex gap-2 items-center">
                <span className="w-[32.14px] h-12.5">
                    <img className="w-full h-full" src={LoginLogo}></img>
                </span>
                <span className="flex flex-col ">
                    <h5 className="font-inter text-[20.09px] font-semibold ">D’RAHIM</h5>
                    <h5 className="font-inter text-[9.04px] font-semibold ">TECH INNOVATION</h5>
                </span>
            </span>
        </div>
        <div className="w-full h-full flex justify-center mt-12.5 ">
            <span>
                <h5 className="font-inter font-semibold min28pxMax32px text-center">Access Dashboard</h5>
                <h5 className="font-inter font-normal min20Max24px mt-5">Welcome back! Please login to your account</h5>
            </span>
        </div>
        {/**input */}
        <div className="mt-12.5 ">
            <div className="flex flex-col ">
                <h5 className="font-inter font-medium min20Max24px">Full Name</h5>
                <input className="w-full h-15 border-b-2 border-gray-200 pl-5 mt-0.75"></input>
            </div>
            <div className="flex flex-col mt-7.25">
                <h5 className="font-inter font-medium min20Max24px">Password</h5>
                <span className="mt-0.75 relative ">
                <input className="w-full h-15 border-b-2 border-gray-200 pl-5 "></input>
                <span className="absolute right-0  w-fit top-0 flex items-center pl-5 pr-2 h-full">
                <i className="fa fa-eye-slash  font-light"></i>
                </span>
                </span>
            </div>
            <div className="w-full h-full flex justify-end mt-4">
                <span>
                    <h5 className="font-inter font-semibold min20Max24px">Forgot Password?</h5>
                </span>
            </div>
        </div>
        {/**login btn */}
        <div className="w-full h-full flex justify-center mt-12.5">
            <span className="w-50.5 h-12.5 rounded-full bg-[#11AC76] flex justify-center items-center">
                <h5 className="font-medium font-inter min20Max24px">Login</h5>
            </span>
        </div>
    </div>
</div>
}
export default AccessLogin;