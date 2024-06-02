import { Segment} from "semantic-ui-react";
import ChatInfo from "./ChatInfo";
import ConversationFeed from "./ConversationFeed";
//import WriteMessage from "./WriteMessage"

export default function ChatConversation({user}) {

  //console.log("ChatConversation: ", user);
  return (
    <>
      <Segment clearing>
        <ChatInfo user={user} />
      </Segment>

      
        <ConversationFeed user={user} />
  

      {/*  <Container>
        <WriteMessage />
      </Container> */}
    </>
  );
}
