import { StudentsAppData } from "../../ContextApi/StudentsApi";
import { useState, useRef, type ChangeEvent } from "react";
import noProfileImg from "/images/noProfileImage.jpeg";
import pencil from "/images/pencil.png";
import RightPanel from "./RightPanel";
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bio: string;
  connectionId: string;
  imageUrl: string | null;
};
function Settings() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const { userInfo, setUserInfo } = userDetails;
  const [isRequstSent, setIsRequstSent] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>(userInfo.firstName);
  const [lastName, setLastName] = useState<string>(userInfo.lastName);
  const [phoneNumber, setPhoneNumber] = useState<string>(userInfo.phoneNumber);
  const [dateOfBirth, setDateOfBirth] = useState<string>(userInfo.dateOfBirth);
  const [bio, setBio] = useState<string>(userInfo.bio);
  const [profileImage, setProfileImage] = useState<string | null>(
    userInfo.imageUrl,
  );
  const [updateProfileImage, setUpdateProfileImage] = useState<Blob | null>(
    null,
  );
  const profileImageInputRef = useRef<HTMLInputElement | null>(null);
  //const email = userInfo.email;
  const saveButtonRef = useRef<HTMLButtonElement | null>(null);
  //
  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFirstName(value);
  }
  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setLastName(value);
  }
  function handlePhoneNumberChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPhoneNumber(value);
  }
  function handleDateOfBirthChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDateOfBirth(value);
  }
  function handleBioChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setBio(value);
  }
  function handleChangePictureChangeButton() {
    if (!profileImageInputRef.current) return;
    profileImageInputRef.current.click();
  }
  function handleProfilePictureChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const image = URL.createObjectURL(file);
    setProfileImage(image);
    setUpdateProfileImage(file);
  }
  async function updateUserDetails() {
    if (!saveButtonRef.current || isRequstSent) return;
    if (firstName.trim() === "") return alert("First Name can't be empty");
    if (lastName.trim() === "") return alert("Last Name can't be empty");
    if (phoneNumber.trim() === "") return alert("Phone Number can't be empty");
    if (dateOfBirth.trim() === "") return alert("Birth date can't be empty");
    const phoneNumberLength = phoneNumber.split("").length;
    if (phoneNumberLength !== 11)
      return alert("Phone Number can't be below 11 digits");
    setIsRequstSent(true);
    saveButtonRef.current.classList.remove("AllowedPointerForButton");
    saveButtonRef.current.classList.add("notallowedPointerForButton");
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const formData = new FormData();
      const requstData = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        bio: bio,
      };
      if (updateProfileImage) {
        formData.append("profile-image", updateProfileImage);
      }
      formData.append("data", JSON.stringify(requstData));
      const requst = await fetch(`${serverPort}/students/update/user/info`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
        },
        body: formData,
      });
      const responds = await requst.json();
      if (responds.ok) {
        setIsRequstSent(false);
        saveButtonRef.current.classList.remove("notallowedPointerForButton");
        saveButtonRef.current.classList.add("AllowedPointerForButton");
        alert(responds.message);
        const userData: UserData = responds.userInfo;
        setUserInfo(userData);
      } else {
        throw new Error(responds.message);
      }
    } catch (error) {
      setIsRequstSent(false);
      saveButtonRef.current.classList.remove("notallowedPointerForButton");
      saveButtonRef.current.classList.add("AllowedPointerForButton");
      alert(error);
    }
  }
  return (
    <div className="w-full h-fit">
      {/**head */}
      <span>
        <h5 className="font-medium font-sans min20Max24px">My Profile</h5>
      </span>
      {/**content */}
      <div className="mt-7.5 flex gap-22.75">
        {/**end right panel*/}
        <div className="w-full max-w-60.5 mr-auto">
          <RightPanel />
        </div>
        {/**profile image */}
        <div className="flex  w-fit flex-col gap-2">
          <span className="block w-35 h-35 rounded-full test">
            <img
              className="w-full h-full rounded-full"
              src={profileImage ? profileImage : noProfileImg}
            ></img>
          </span>
          <h5
            className="text-[16px] text-center font-normal font-sans pointer"
            onClick={handleChangePictureChangeButton}
          >
            Edit profile photo
          </h5>
          <span>
            <input
              className="absolute w-0 h-0 hidden"
              type="file"
              ref={profileImageInputRef}
              onChange={handleProfilePictureChange}
            ></input>
          </span>
        </div>
        {/**edit content and options */}
        <div className="w-full min-w-86.5 max-w-121 flex flex-col gap-5">
          {/**full name section */}
          <div className="w-full h-fit flex items-center gap-10">
            {/**first name */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">First Name</h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={firstName}
                  onChange={handleFirstNameChange}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
            {/**last name */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">Last Name</h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={lastName}
                  onChange={handleLastNameChange}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
          </div>
          {/**Dath of birth & phone number */}
          <div className="w-full h-fit flex items-center gap-10">
            {/**dath of birth */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">
                Date of birth
              </h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
            {/**Phone number */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">
                Phone number
              </h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
          </div>
          {/**bio and action button */}
          <div className="w-full h-30.5 flex flex-col">
            <span className="flex h-full flex-col">
              <h5 className="font-normal font-sans text-[16px]">Bio</h5>
              <span className="w-full h-full  p-2.5 border border-gray-500 rounded-lg ">
                <textarea
                  className="w-full max-w-115 h-full pl-2"
                  value={bio}
                  onChange={handleBioChange}
                ></textarea>
              </span>
            </span>
          </div>
          {/**action button */}
          <div className="w-full mt-2.5 h-fit flex justify-center">
            <button
              className="pointer w-fit h-fit bg-[#11AC76] rounded-[10px] p-2.5 pl-3.75 pr-3.75] AllowedPointerForButton"
              ref={saveButtonRef}
              onClick={updateUserDetails}
            >
              <h5 className="font-medium font-sans text-[16px] text-[#FFFFFF]">
                Save Changes
              </h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
