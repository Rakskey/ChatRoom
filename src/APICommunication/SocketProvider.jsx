import { useState, useRef, useEffect, createContext } from "react";


const endpoint =  "wss://4rytv4evb2.execute-api.eu-central-1.amazonaws.com/test";
export const WebSocketContext = createContext(false, null, () => {});
// ..............................isConnected, message, send function

const SocketProvider = ({children}) => {

    const [isConnected, setIsConnected] = useState(false);
    const [message, setMessage] = useState (null);


    const websocket = useRef(null);


    useEffect (() => {

        const socket = new WebSocket(endpoint);

        socket.onopen = () => setIsConnected(true);

        socket.onclose = () => setIsConnected(false);

        socket.onmessage = (event) => setMessage(event.data);

        websocket.current = socket;

        return () => {
            socket.close();
        };


    }, [])

    const actionsWebSocket = [
      isConnected,
      message,
      //function to send ws WHEN it is called
      websocket.current?.send.bind(websocket.current),
    ];


     return (
       <WebSocketContext.Provider value={actionsWebSocket}>
         {children}
       </WebSocketContext.Provider>
     );

};

export default SocketProvider;
