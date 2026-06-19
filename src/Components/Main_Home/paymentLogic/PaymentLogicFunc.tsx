import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function MakePayment({
  email,
  amount,
  orderId,
}: {
  email: string;
  amount: number;
  orderId: string;
}) {
  const urlNavigator = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [reference, setReference] = useState<string>("");
  const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const serverUrl = import.meta.env.VITE_SERVER_PORT;
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
