import "./App.css";
import Comment from "./component/Comment";
import Posts from "./component/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import { useEffect } from "react";
import { useState } from "react";
import Profile from "./component/Profile";

function App() {
  const [users, setUsers] = useState("");
  const [id, setId] = useState(0);
  const [profileUser, setProfileUser] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await data.json());
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const profileIdHandler = (rid) => {
    setId(rid);
  };

  return (
    <BrowserRouter>
      {/* //Navbar content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route exact path="/dashboard" element={<Dashboard users={users} profileIdHandler={profileIdHandler} />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
