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

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await data.json());
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <BrowserRouter>
      {/* //Navbar content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route exact path="/dashboard" element={<Dashboard users={users} />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
