import { useState, useContext, createContext } from "react";

const ClientBookingInfoContext = createContext({});
export function ClientBookingInfoProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <ClientBookingInfoContext.Provider value={{}}>
      {children}
    </ClientBookingInfoContext.Provider>
  );
}
export const ClientBookingInfoApi = () => useContext(ClientBookingInfoContext);
