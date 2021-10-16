import React,{useEffect}from "react";
import "./App.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./server/firestore";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging"
import Network from "./pages/Network"
import Notification from "./pages/Notification"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
       
        dispatch(
          login({
            Email: userAuth.email,
            FullName: userAuth.displayName,
            ProfileURL: userAuth.photoURL,
            
          })
        )
      } else {
        // user is not logged in
        dispatch(logout());
      }
      
    })
  },[]);

  return (
    <Router>
    <>
      {!user ? (
        <Login />
      ) : (

      <div className="app">
      <Header />
      <div className="app_body">  
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/messaging" component={Messaging} />
        <Route path="/network" component={Network} />
        <Route path="/notification" component={Notification} />
        </Switch>      
      </div>
    </div>
   
  )
}
  </>
  </Router>
);
}
export default App;
