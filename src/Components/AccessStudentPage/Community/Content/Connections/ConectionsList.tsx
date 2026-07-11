import { useState, useEffect, type ChangeEvent } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import ConnectionsCard from "./ConnectionsCard";
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  bio: string;
  date?: string;
  time?: string;
};
type ChatContact = {
  contactId: string;
  contactFirstName: string;
  contactLastName: string;
  contactImage: string | null;
  chatGroupId: string;
};
function ConectionsList({ connectionList }: { connectionList: Connections[] }) {
  return (
    <div className="mt-4.5">
      {/***total connectsCount */}
      <span>
        <h5 className="font-semibold font-sans min18pxMax20px">
          {connectionList.length} Connections
        </h5>
      </span>
      {/**connectionsList */}
      <div
        className="mt-5.25 flex flex-col ga-2.5 border  border-[#11AC76] rounded-2xl pl-1.5 pr-1.5 pt-4 pb-4"
        style={{
          borderWidth: connectionList.length !== 0 ? "1px" : "0px",
        }}
      >
        {/**connections card */}
        {connectionList.map((e: Connections) => {
          return (
            <ConnectionsCard
              contactId={e.contactId}
              contactFirstName={e.contactFirstName}
              contactLastName={e.contactLastName}
              chatGroupId={e.chatGroupId}
              contactImage={e.contactImage}
              bio={e.bio}
              key={`connection-key-${e.contactId}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ConectionsList;
