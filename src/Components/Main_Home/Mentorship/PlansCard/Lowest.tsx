import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Lowest() {
  const urlNavigator = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [reference, setReference] = useState<string>("");
  const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const serverUrl = import.meta.env.VITE_SERVER_PORT;
  //payemnt
  function MakePayment({
    email,
    amount,
    orderId,
  }: {
    email: string;
    amount: number;
    orderId: string;
  }) {
    //create payment config/ payment data
    const config = {
      reference,
      email,
      amount: amount * 100, // amount is in kobo multiply buy 100 to get naira
      publicKey: paystackPublicKey,
    };
    //make payment function call
    const initializePayment = usePaystackPayment(config);
    //callbacks
    const onSuccess = async (paystackResponse: any) => {
      console.log("Popup closed, ref:", paystackResponse.reference);
      setLoading(false);

      //verify payment from server
      const verifyRespond = await fetch(`${serverUrl}/payment/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reference: paystackResponse.reference }),
      });
      const data = await verifyRespond.json();
      if (data.success) {
        alert("Payment successful!");
        urlNavigator("/students/login/access", { replace: true });
      } else {
        alert("Payment failed verification");
      }
    };
    //on user exit
    const onClose = () => {
      console.log("User closed popup");
      setLoading(false);
    };
    //payment call to start the work flow
    const handlePayment = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${serverUrl}/payment/paystack/init`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, amount, metadata: { orderId } }),
        });
        const data = await res.json();
        setReference(data.reference); // reference sent from backend

        //
        setTimeout(() => {
          initializePayment({ onSuccess, onClose });
        }, 0);
      } catch (error) {
        console.log(error);
        alert("could not start payment");
        setLoading(false);
      }
    };
    handlePayment();
  }
  async function handlePayClick() {
    const email= prompt("Enter your email:")?.trim();
    const password= prompt("Enter your password:")?.trim();
    if(email === "" || password === "") return;
    try{
      console.log(email, password)
    }catch(error){
      console.log(error);
    }
    /*
    const data = {
      email: "nwanoruovictory87@gmail.com",
      amount: 50000,
      orderId: "4352",
    };
    MakePayment(data);
    */
  }
  return (
    <div className=" flex flex-col p-10 gap-3 w-full h-full bg-[#F8FAFC]  rounded-2xl paymentCardShadow border-2 border-[black]">
      <span className="flex flex-col gap-1.5">
        <h5 className="fontPoppins font-semibold text-[40px] ">Basic Plan</h5>
        <h5 className="fontPoppins  text-[20px] -mt-2 ">Starter level</h5>
      </span>
      <span className="fontPoppins flex items-center gap-0.5 font-bold  text-[50px]  pl-1.5">
        <h5 className="font-medium text-[35px] ">&#8358;</h5>
        <h5>50,000</h5>
      </span>
      <span className="flex flex-col gap-2.5">
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-clock text-[20px] -ml-1"></i>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-1 ">
            Duration: 4 Week
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  mt-[-0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px]  -mt-2 ">
            1 live session per week
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  mt-[-0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2 ">
            Access to recorded lessons
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  mt-[-0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Basic design tasks
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  mt-[-0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2 ">
            Community support
          </h5>
        </span>
      </span>
      <div className="flex w-full justify-center pb-5 mt-5">
        <span
          className="w-fit h-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5 bg-[#191919] rounded-full pointer"
          onClick={handlePayClick}
        >
          <h5 className="font-inter font-medium text-[20px] text-[#FFFFFF]">
            Select Plan
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Lowest;
