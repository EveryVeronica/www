import React, { useContext } from 'react'
import "./LayoutHeader.css";
import { auth, signInWithGoogle } from "../services/Firebase"
import {UserContext} from '../App'
function Header() {
    const user = useContext(UserContext);

   
  return (
    <div>
      <div className="LayoutHeader-header">
      <div className="left">
        {user ? <img src={user.photoURL} alt="a" /> : null}
        {user ? <button>{user.displayName}</button> : null}


        
      </div>

      <div className="right">
        {user ? (
          <button onClick={()=>{auth.signOut()}}>Sign Out</button>
        ) : (
          <button onClick={signInWithGoogle}>signInWithGoogle</button>
        )}
      </div>
    </div>
    </div>
  )
}

export default Header
