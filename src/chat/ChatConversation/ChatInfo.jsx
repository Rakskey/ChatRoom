
import { 

  Header, Label

} from "semantic-ui-react";

export default function ChatInfo({user}) {

  return (
    <>
      <Header as="h4" floated="left" style={{ color: "grey" }}>
        {user.name} {", "} {user.chatSelected}
      </Header>
      <Header as="h5" floated="right">
        <Label circular color={"teal"} key={"teal"}>
          Connected
        </Label>
        <Label circular color={"#71797E"} key={"grey"}>
          Log out
        </Label>
      </Header>
    </>
  );
}
