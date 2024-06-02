import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Chat from "./chat/Chat";
import ChatSandBox from "./chatSandBox/ChatSandBox";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="chatSandBox" element={<ChatSandBox />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
