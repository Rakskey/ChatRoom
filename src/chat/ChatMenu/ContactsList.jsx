/* eslint-disable react/prop-types */
import {
  Grid,
  Image,
  List,
} from "semantic-ui-react"

export default function ContactsList({ user, selectChat }) {
  //console.log("ContactsList:", user);

  return (
    <>
      <List divided relaxed animated selection size="medium">
        {user.chats.map((chat) => (
          <List.Item key={chat.chatId} onClick={() => selectChat(chat.chatId)}>
            <Grid>
              <Grid.Column width={5}>
                <Image
                  src={`https://react.semantic-ui.com/images/avatar/small/${chat.avatar}.jpg`}
                  circular
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <List.Header>{chat.name}</List.Header>
                <List.Description>
                  {" "}
                  {new Date(chat.lastSeen).toDateString()}
                </List.Description>
              </Grid.Column>
            </Grid>
          </List.Item>
        ))}
      </List>
    </>
  );
}
