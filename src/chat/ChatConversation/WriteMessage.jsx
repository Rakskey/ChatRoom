import { useState } from "react";
import { Input } from "semantic-ui-react";

const WriteMessage = ({ dispatch }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      dispatch({ type: "send", payload: text });
      setText("");
    }
  };

  return (
    <>
      <Input
        fluid
        action={{
          icon: "send",
          onClick: () => {
            handleSend();
          },
        }}
        placeholder='"Hello how are you, the spy from the cold...'
        type="text"
        name="content"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default WriteMessage;
