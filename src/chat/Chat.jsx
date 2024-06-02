
import ChatRoom from "./ChatRoom";
import SocketProvider from "../APICommunication/SocketProvider.jsx";

export default function Chat() {
  return (
    <>
      <SocketProvider>
        {" "}
        <ChatRoom />
      </SocketProvider>
    </>
  );
}


