import "./App.css";
import React, {
  useEffect,
  useState,
  createContext,
} from "react";
import Header from "./activities/Header";
import SideBar from "./activities/SideBar";
import BodyPart from "./activities/BodyPart";
import Footer from "./activities/Footer";

import { auth } from "./services/Firebase";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null); //login WithGoogle


  useEffect(() => {
    auth.onAuthStateChanged((result) => {
        // setUser
      setUser(result);
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <SideBar />
        <BodyPart />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
