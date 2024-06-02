import { useContext, useState, useEffect } from "react";
import {
  GridRow,
  GridColumn,
  Grid,
  Container,
  Button,
} from "semantic-ui-react";
import ChatMenu from "./ChatMenu/ChatMenu";
import ChatConversation from "./ChatConversation/ChatConversation";
import { WebSocketContext } from "../APICommunication/SocketProvider";


const fakeLogins = [
    { chatId: "elliot", userId: "elliot" },
    { chatId: "helen", userId: "helen" },
    { chatId: "matthew", userId: "matthew" },
    { chatId: "daniel", userId: "daniel" },
    { chatId: "laura", userId: "laura" },
  ];


export default function ChatRoom() {

  const [isConnected, message, send] = useContext(WebSocketContext);

  const initUser = {
    name: "",
    chatId: "",
    userId: "",
    isLogin: false,
    isConnected: isConnected,
    chatSelected: "home",
    chats: [],
    contacts: [],
    connectionId: "",
  };

  const [user, setUser] = useState(initUser);
  //console.log(user);
  //console.log(message);

  const selectChat = (chatSelected) => {
    const fakeSelectedDataLogin = {
      action: "login",
      chatId: chatSelected,
      userId: user.userId,
    };
    if (isConnected) { 
      send(JSON.stringify(fakeSelectedDataLogin));
      setUser({ ...user, chatSelected: chatSelected , chatId: chatSelected});
    }
  };

  const sendFakeLogin = (chatId, userId) => {
    const loginOwnerUser = "owner#" & userId;
    const fakeDataLogin = {
      action: "login",
      chatId: chatId,
      userId: loginOwnerUser,
    };

    if (isConnected) { 
      send(JSON.stringify(fakeDataLogin));
      setUser({
        ...user,
        userId: userId,
        chatId: chatId,
        isConnected: isConnected,
      });
    }
  };


  useEffect(() => {
    if (message) {
      var isLogged = false;
      isLogged = JSON.parse(message).action === "logged in";
      if (isLogged) {
         setUser({
           ...user,
           connectionId: JSON.parse(message).connectionId,
           chats: JSON.parse(message).dataOwner.chats,
           name: JSON.parse(message).dataOwner.fullName,
           avatar: JSON.parse(message).dataOwner.avatar,
           contacts: JSON.parse(message).dataOwner.contacts,
           isLogin: true,
         });
      }
    }
  }, [message]);

  return (
    <>
      {!isConnected ? (
        "Connecting ...."
      ) : !user.isLogin ? (
        <Container textAlign="center" style={{ marginTop: "100px" }}>
          {fakeLogins.map((login, index) => (
            <Button
              color="blue"
              circular
              style={{
                marginBottom: "25px",
                marginLeft: "25px",
              }}
              key={index}
              onClick={() => sendFakeLogin(login.chatId, login.userId)}
            >
              Fake Login user: {login.userId} & chat: {login.chatId}
            </Button>
          ))}
        </Container>
      ) : (
        <Container
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <Grid columns={2} divided>
            <GridRow>
              <GridColumn width={4}>
                <ChatMenu user={user} selectChat={selectChat} />
              </GridColumn>
              <GridColumn width={12}>
                <ChatConversation user={user} />
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>
      )}
    </>
  );
}
