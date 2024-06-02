/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import ContactsList from "./ContactsList";
import AddContact from "./AddContact";
import CreateChat from "./CreateChat";
import ChatMenuHeader from "./ChatMenuHeader";

// Define initial state for the chat menu
const initialState = {
  contacts: [],
  chats: [],
};

// Define actions for the reducer
const actionTypes = {
  ADD_CONTACT: "ADD_CONTACT",
  CREATE_CHAT: "CREATE_CHAT",
};

// Reducer function to handle adding contacts and creating chats
function chatReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.CREATE_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    default:
      return state;
  }
}

export default function ChatMenu({ user, selectChat }) {
  // Define state to manage which view is shown
  const [showChat, setShowChat] = useState({
    contactsList: true,
    createChat: false,
    addContact: false,
  });

  console.log("ChatMenu:", showChat);

  // Use the chatReducer to manage chat-related actions
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Handlers to update the view state and dispatch actions
  const handleShowContactsList = () => {
    console.log("Showing Contacts List");
    setShowChat({
      contactsList: true,
      createChat: false,
      addContact: false,
    });
  };

  const handleShowCreateChat = () => {
    console.log("Showing Create Chat");
    setShowChat({
      contactsList: false,
      createChat: true,
      addContact: false,
    });
  };

  const handleShowAddContact = () => {
    console.log("Showing Add Contact");
    setShowChat({
      contactsList: false,
      createChat: false,
      addContact: true,
    });
  };

  const handleAddContact = (contact) => {
    dispatch({ type: actionTypes.ADD_CONTACT, payload: contact });
    handleShowContactsList(); // Return to contacts list after adding contact
  };

  const handleCreateChat = (chat) => {
    dispatch({ type: actionTypes.CREATE_CHAT, payload: chat });
    handleShowContactsList(); // Return to contacts list after creating chat
  };

  return (
    <>
      <ChatMenuHeader
        handleShowContactsList={handleShowContactsList}
        handleShowCreateChat={handleShowCreateChat}
        handleShowAddContact={handleShowAddContact}
      />
      {showChat.contactsList && (
        <ContactsList user={user} selectChat={selectChat} />
      )}
      {showChat.createChat && (
        <CreateChat
          user={user}
          handleCreateChat={handleCreateChat}
          handleCancel={handleShowContactsList}
        />
      )}
      {showChat.addContact && (
        <AddContact handleAddContact={handleAddContact} />
      )}
    </>
  );
}
