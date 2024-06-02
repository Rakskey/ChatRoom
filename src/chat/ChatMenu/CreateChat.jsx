/* eslint-disable react/prop-types */
import  { useState } from "react";
import {
  Button,
  Form,
  Input,
  List,
  Grid,
  Image,
  Container,Checkbox
} from "semantic-ui-react";
import Default_Avatar from "../../assets/images/Default_avatar_profile.jpg"
import { S3Uploader } from "../../APICommunication/S3Uploader";

export default function CreateChat({ user, handleCreateChat, handleCancel }) {
  //console.log("CreateChat:", user);
  const [avatar, setAvatar] = useState(null);
  const [chatName, setChatName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleFileChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];
    // Update the state with the selected file
    handleFileUpload(file);
   
  };

  const handleFileUpload = async (file) => {
    if (file) {
      const fileName = file.name;
      await S3Uploader(file, fileName); // Assuming S3Uploader is an async function
      console.log("File uploaded:", fileName);
       setAvatar(constructAvatarURL(fileName));
    } else {
      console.log("No file selected");
    }
  };

  // Construct the avatar URL based on the filename and base URL
  const constructAvatarURL = (fileName) => {
    return `https://mychatsanboxrepo.s3.eu-central-1.amazonaws.com/avatars/${fileName}`;
  };

  const handleMemberSelect = (chatId) => {
    setSelectedMembers((prevMembers) =>
      prevMembers.includes(chatId)
        ? prevMembers.filter((id) => id !== chatId)
        : [...prevMembers, chatId]
    );
  };

  const handleSubmit = () => {
    const newChat = {
      name: chatName,
      members: selectedMembers,
    };
    handleCreateChat(newChat);
  };

  return (
    <Container>
      <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Form.Field>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: `url(${
                  avatar || Default_Avatar
                }) no-repeat center/cover`,
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("fileInput").click()}
            />
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </Form.Field>
        </div>
        <Form.Field>
          <Input
            icon="chat"
            iconPosition="left"
            size="mini"
            placeholder="Group Name here"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
          />{" "}
        </Form.Field>

        <Form.Field>
          <p>Members</p>
          <List
            divided
            relaxed
            style={{
              marginLeft: "12px",
              marginRight: "12px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {user.chats
              .filter((contact) => contact.type === "contact-chat")
              .map((contact) => (
                <List.Item key={contact.chatId}>
                  <Grid>
                    <Grid.Column width={5}>
                      <Image
                        src={`https://react.semantic-ui.com/images/avatar/small/${contact.avatar}.jpg`}
                        circular
                        size="mini"
                      />
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <List.Header>{contact.name}</List.Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Checkbox
                        onChange={() => handleMemberSelect(contact.chatId)}
                        checked={selectedMembers.includes(contact.chatId)}
                      />
                    </Grid.Column>
                  </Grid>
                </List.Item>
              ))}
          </List>
        </Form.Field>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Button circular color="teal" size="mini" onClick={handleSubmit}>
            Create
          </Button>
          <Button basic circular size="mini" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
