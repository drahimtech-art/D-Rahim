import { useState, useContext, createContext } from "react";
export interface BookingRequiredData {
  date: Date;
  time: string;
  defaultTimeOpenIndex: number;
  clientFullName: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  aboutProject: string;
  trafficSource: string;
}
interface ClientBookingInfoType {
  bookingInfo: BookingRequiredData | undefined;
  setBookingInfo: React.Dispatch<
    React.SetStateAction<BookingRequiredData | undefined>
  >;
}
const ClientBookingInfoContext = createContext<ClientBookingInfoType>({
  bookingInfo: undefined,
  setBookingInfo: () => {},
});
export function ClientBookingInfoProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [bookingInfo, setBookingInfo] = useState<
    BookingRequiredData | undefined
  >(undefined);
  return (
    <ClientBookingInfoContext.Provider
      value={{
        bookingInfo,
        setBookingInfo,
      }}
    >
      {children}
    </ClientBookingInfoContext.Provider>
  );
}
export const ClientBookingInfoApi = () => useContext(ClientBookingInfoContext);
