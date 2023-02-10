import React, {useCallback, useContext, useState } from 'react'
import {UserContext} from '../App'
import io from "socket.io-client";
function BodyPart() {
    const user = useContext(UserContext);
    const [Token, setToken] = useState(""); //เก็บ user login WithGoogle

  // const socket = useMemo(() => {
  //   const setSocket = io.connect("http://localhost:3001", {
  //     auth: {
  //       token: "",
  //     },
  //   });

  //   setSocket.emit("config_room", "1");
  //   return setSocket;
  // }, []);
    
    
    
  const handelCreateContact = useCallback(() => {
    if (user != null) {
      user.getIdToken(true).then(function (idToken) {
        setToken(idToken);
      });
    }
  }, [user]);
    
    
  return (
    <div>
          <h1>BodyPart</h1>
   
          {user ? <button>{user.displayName}</button> : null}

          {Token}


          <button onClick={handelCreateContact}>CreateContact</button>
    </div>
  )
}

export default BodyPart
